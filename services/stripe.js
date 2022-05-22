import { CountryRegionData } from 'react-country-region-selector';
import { DEFAULT_CURRENCY, ORDER_STATUS, ORDER_TYPE, SUBSCRIPTION_RENEWAL } from '../config/constants';
import CartServices from './carts';
import SQLLicensesDao from './sql-db/sql-db-license.dao';
import SQLOrdersDao from './sql-db/sql-db-order.dao';
import SQLUserDao from './sql-db/sql-db-user.dao';
import EmailService from './emails';

export default class StripeServices {
  static getPriceData = (product, license, subscribedModules, STORE_PRODUCT_TABLE) => {
    return {
      unit_amount_decimal: CartServices.getUnitMount({ license, subscribedModules }, STORE_PRODUCT_TABLE),
      currency: DEFAULT_CURRENCY,
      recurring: { interval: SUBSCRIPTION_RENEWAL.interval },
      tax_behavior: 'exclusive',
      product_data: {
        name: product,
        tax_code: 'txcd_10000000',
      },
    }
  }

  static getProductsData = (product, license, subscribedModules, STORE_PRODUCT_TABLE) => {
    return [
      {
        price_data: {
          unit_amount_decimal: CartServices.getUnitMount({ license, subscribedModules }, STORE_PRODUCT_TABLE),
          currency: DEFAULT_CURRENCY,
          recurring: { interval: SUBSCRIPTION_RENEWAL.interval }, //  TODO: for testing propose. Update to month
          tax_behavior: 'exclusive',
          product,
        },
        quantity: 1,
      }
    ];
  }

  static handleSQLCustomerDeleted = async (event) => {
    const customerId = event.data.object.id;
    const userDao = new SQLUserDao();


    const userDataResponse = await userDao.getUserInfoByCustomerId(customerId);
    if (userDataResponse.recordsets.length !== 1) {
      throw Error(`An error happens when requesting user data for customer id ${customerId}, sql response: ${JSON.stringify(userDataResponse)}`)
    }

    const value = userDataResponse.recordset[0];

    const userResponse = await userDao.updateUserCustomerId(value.id, undefined);
    if (userResponse.recordsets.length !== 1) {
      throw Error(`An error happens when deleting customerid user data for userid ${value.id}, sql response: ${JSON.stringify(userResponse)}`)
    }
  }


  static handleSQLInvoicePaid = async (event, stripe) => {
    let { billing_reason, customer, subscription: subscriptionId } = event.data.object;
    if (billing_reason == 'subscription_cycle') {
      const userDao = new SQLUserDao();
      const licenseDao = new SQLLicensesDao();


      const userDataResponse = await userDao.getUserInfoByCustomerId(customer);
      if (userDataResponse.recordsets.length !== 1) {
        throw Error(`An error happens when requesting user data for id ${userId}, sql response: ${JSON.stringify(userDataResponse)}`)
      }

      const value = userDataResponse.recordset[0];


      const licenseResponse = await licenseDao.getLicenses(value.id);
      let licenseModulesRelation = licenseResponse.recordsets.length == 2 ? licenseResponse.recordsets[1] : [];
      licenseModulesRelation = licenseModulesRelation.reduce((acc, data) => {
        let { user_license_id, name } = data;
        return { ...acc, [user_license_id]: [...(acc[user_license_id] || []), name] };
      }, {});

      const licenses = licenseResponse.recordset.map(value => {
        return {
          id: value.license_id,
          product: value.product_name.toLowerCase(),
          license: value.license_name.toLowerCase(),
          expirationDate: value.expiration_date,
          creationDate: value.creation_date,
          subscribedModules: licenseModulesRelation[value.license_id]
        }
      })

      // TODO: incorrect license if user have multiple tipes, e.g. analyze and develop -> check this
      const userLicense = licenses.find(
        (element) => element.license !== "trial" && element.product === "tkrisk"
      );

      if (userLicense) {
        let subscription = await stripe.subscriptions.retrieve(subscriptionId);
        let currentPeriodEnd = new Date(subscription.current_period_end * 1000);

        const updateLicenseRequest = await licenseDao.updateLicenseExpiration(value.id,
          userLicense.id, currentPeriodEnd.toISOString(),
        );
        if (updateLicenseRequest.rowsAffected.length !== 1) {
          throw Error(`An error happens when updating license expiration date with value ${currentPeriodEnd.toISOString()}, sql response: ${JSON.stringify(updateLicenseRequest)}`)
        }
      }
    }
  }

  static handlePaymentSucceeded = async (event, stripe) => {
    let { billing_reason, subscription: subscriptionId, payment_intent: paymentIntentId } = event.data.object;

    if (billing_reason == 'subscription_create') {
      // Retrieve the payment intent used to pay the subscription
      const payment_intent = await stripe.paymentIntents.retrieve(paymentIntentId);
      let subscription = await stripe.subscriptions.update(
        subscriptionId, {
        default_payment_method: payment_intent.payment_method,
      },
      );
    };
  }

  static handlePaymentFailed = async (event, stripe) => {
    let { paid, billing_reason, next_payment_attempt, lines, customer_email, customer } = event.data.object;
    if (paid == false && billing_reason === 'subscription_cycle') {
      EmailService.sendPaymentFailNotification({ userId: lines.data[0].metadata.userId, email: customer_email, orderId: lines.data[0].metadata.orderId, next_payment_attempt })
      this._handleLicensesWhenPaymentFailed(event, stripe)
    }
  }

  static _handleLicensesWhenPaymentFailed = async (event, stripe) => {
    let { customer } = event.data.object;

    const userDao = new SQLUserDao();
    const licenseDao = new SQLLicensesDao();

    const userDataResponse = await userDao.getUserInfoByCustomerId(customer);
    if (userDataResponse.recordsets.length === 1) {

      const userRecord = userDataResponse.recordset[0];

      const licenseResponse = await licenseDao.getLicenses(userRecord.id);
      const licenses = licenseResponse.recordset.map(value => {
        const license = {
          id: value.license_id,
          product: value.product_name.toLowerCase(),
          license: value.license_name.toLowerCase(),
          expirationDate: value.expiration_date,
          creationDate: value.creation_date,
        }
        return license;
      })

      const userLicense = licenses.find(
        (element) => element.license !== "trial" && element.product === "tkrisk"
      );

      if (userLicense) {
        let expirationDate = new Date(userLicense.expirationDate);
        let currentDate = new Date(Date.now());
        currentDate.setDate(currentDate.getDate() + 1);

        if (expirationDate < currentDate) {
          expirationDate.setMonth(expirationDate.getMonth() + 1);

          await licenseDao.updateLicenseExpiration(userRecord.id,
            userLicense.id, expirationDate.toISOString(),
          );
        }
      }
    }
  }


  static handleSQLSubscriptionDeleted = async (event) => {
    let { customer, id } = event.data.object;
    if(!customer && event.type === 'customer.deleted')
      customer = id;

    const userDao = new SQLUserDao();
    const licenseDao = new SQLLicensesDao();
    const ordersDao = new SQLOrdersDao();

    const userDataResponse = await userDao.getUserInfoByCustomerId(customer);
    if (userDataResponse.recordsets.length !== 1) {
      throw Error(`An error happens when requesting user data for customer id ${customer}, sql response: ${JSON.stringify(userDataResponse)}`)
    }

    const value = userDataResponse.recordset[0];

    const userData = {
      id: value.id,
      emails: [value.email],
      clientAccount: value.client_account,
      licenseAgreement: value.license_agreement,
      location: value.storage_location,
      customerId: value.customer_id
    };

    const licenseResponse = await licenseDao.getLicenses(userData.id);
    let licenseModulesRelation = licenseResponse.recordsets.length == 2 ? licenseResponse.recordsets[1] : [];
    licenseModulesRelation = licenseModulesRelation.reduce((acc, data) => {
      let { user_license_id, name } = data;
      return { ...acc, [user_license_id]: [...(acc[user_license_id] || []), name] };
    }, {});

    const licenses = licenseResponse.recordset.map(value => {
      const license = {
        id: value.license_id,
        product: value.product_name.toLowerCase(),
        license: value.license_name.toLowerCase(),
        expirationDate: value.expiration_date,
        creationDate: value.creation_date,
        subscribedModules: licenseModulesRelation[value.license_id]
      }
      return license;
    })

    // TODO: incorrect license if user have multiple tipes, e.g. analyze and develop -> check this
    const userLicense = licenses.find(
      (element) => element.license !== "trial" && element.product === "tkrisk"
    );

    if(userLicense){
      const { product, subscribedModules, license } = userLicense;

      const orderRequest = await ordersDao.createOrder(userData.id, 0, undefined, ORDER_STATUS.APPROVED, ORDER_TYPE.DELETE_LICENSE, subscribedModules, product, license, userData.emails[0], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
      if (orderRequest.recordsets.length !== 1) {
        throw Error(`An error happens when creating order, sql response: ${JSON.stringify(orderRequest)}`)
      }
  
      // TODO: delete or keep history disabling that specific license¿?
      const deleteLicenseRequest = await licenseDao.deleteLicense(userData.id, userLicense.id)
      if (deleteLicenseRequest.rowsAffected.length !== 1) {
        throw Error(`An error happens when deleting license, sql response: ${JSON.stringify(deleteLicenseRequest)}`)
      }
    }
  }

  static getSubscriptions = async (stripe, { customerId, expandData = true }) => {
    let expand = expandData ? ['customer', 'default_payment_method', 'latest_invoice', 'plan.product'] : [];

    let subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: 'active',
      limit: 1,
    });

    if (subscriptions.data.length > 0) {
      return await stripe.subscriptions.retrieve(subscriptions.data[0].id, { expand });
    } else {
      return null;
    }

  }

  static getOverdueSubscriptions = async (stripe, { customerId, expandData = true }) => {
    let expand = expandData ? ['customer', 'default_payment_method', 'latest_invoice', 'plan.product'] : [];

    let subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: 'past_due',
      limit: 1,
    });

    if (subscriptions.data.length > 0) {
      return await stripe.subscriptions.retrieve(subscriptions.data[0].id, { expand });
    } else {
      return null;
    }
  }

  static cancelSubscriptions = async (stripe, { customerId }, status = ['active']) => {
    let subscriptions = await stripe.subscriptions.list({
      customer: customerId,
    })
    subscriptions = subscriptions.data.filter(subscription => status.includes(subscription.status));

    for (let index = 0; index < subscriptions.length; index++) {
      let subscription = subscriptions[index];
      
      await stripe.subscriptions.del(
        subscription.id
      );
    }
  }

  static getCharges = async (stripe, userData) => {
    return await stripe.charges.list({
      customer: userData.customerId,
      limit: 12,
    });
  }

  static getUpcomingInvoice = async (stripe, userData) => {
    return await stripe.invoices.retrieveUpcoming({
      customer: userData.customerId,
      subscription: userData.subscriptionId
    });
  }

  static getCustomer = async (stripe, userData) => {
    return await stripe.customers.retrieve(
      userData.customerId
    );
  }

  static updateSubscription = async (stripe, { customerId, userId, orderId, address, product, license, subscribedModules, currentSubscription, STORE_PRODUCT_TABLE }) => {
    const price = await stripe.prices.create(this.getPriceData(product, license, subscribedModules, STORE_PRODUCT_TABLE));
    if (!currentSubscription) {
      const subscriptions = await stripe.subscriptions.list({
        customer: customerId,
        status: 'active',
        limit: 1,
      });

      currentSubscription = subscriptions.data[0];
    }

    const subscription = await stripe.subscriptions.update(currentSubscription.id, {
      cancel_at_period_end: false,
      proration_behavior: 'create_prorations',
      items: [
        { price: price.id, quantity: 1 },
        ...currentSubscription.items.data.map(item => ({ id: item.id, deleted: true }))
      ],
      metadata: { orderId, userId }
    })

    await stripe.customers.update(customerId, { address });

    return subscription;
  }

  static getSubscriptionSession = async (stripe, data, STORE_PRODUCT_TABLE) => {
    let { email, orderId } = data;
    console.log("Getting subscription")
    const customers = await stripe.customers.list({
      limit: 1,
      email: email,
    });

    let subscription;
    if (customers.data.length === 0) {
      console.log("Creating subscription with new user")
      subscription = await this.createSubscriptionSession(stripe, data, STORE_PRODUCT_TABLE)
    } else {
      const customer = customers.data[0];
      const subscriptions = await stripe.subscriptions.list({
        customer: customer.id,
        status: "incomplete",
        limit: 1,
      });

      if (subscriptions.data.length === 0 || subscriptions.data[0].metadata.orderId !== orderId) {
        console.log("Creating subscription with existing user")
        subscription = await this.createSubscriptionSession(stripe, data, STORE_PRODUCT_TABLE, customer)
      } else {
        console.log("Getting existing subscription")
        subscription = await stripe.subscriptions.retrieve(subscriptions.data[0].id, { expand: ['latest_invoice.payment_intent'] })
      }
    }
    return subscription;
  }

  static createSubscriptionSession = async (stripe, { orderId, userId, license, subscribedModules, product, email, address }, STORE_PRODUCT_TABLE, customer) => {
    address.country = CountryRegionData.find(data => data[0] === address.country)[1];
    const stripeProduct = await stripe.products.create({
      name: product,
    });
    const items = this.getProductsData(stripeProduct.id, license, subscribedModules, STORE_PRODUCT_TABLE);
    const subscription = {
      items: items,
      payment_behavior: 'default_incomplete',
      automatic_tax: { enabled: true },
      expand: ['latest_invoice.payment_intent'],
      metadata: { orderId, userId }
    }

    if (customer) {
      subscription.customer = customer.id;
    } else {
      const customer = await stripe.customers.create({ email, address });
      subscription.customer = customer.id;
    }

    try{
      return await stripe.subscriptions.create(subscription);
    }catch(error){
      let defaultAddress = {
        country: 'US',
        postal_code: '34001'
      }
      await stripe.customers.update(
        subscription.customer, { address: defaultAddress }
      );
      return await stripe.subscriptions.create(subscription);
    }

  }

  static updateCustomer = async (stripe, { customerId, address }) => {
    address.country = CountryRegionData.find(data => data[0] === address.country)[1];
    return await stripe.customers.update(
      customerId, { address }
    );
  }

  static updateCustomerPaymentMethod = async (stripe, { customerId, paymentMethodId, subscriptionId }) => {
    await this.detachCustomerPaymentMethod(stripe, { customerId, paymentMethodId });
    return await this.attachCustomerPaymentMethod(stripe, { customerId, paymentMethodId, subscriptionId });
  }

  static retryPayment = async (stripe, { subscriptionId, paymentMethodId }) => {
    const subscription = await stripe.subscriptions.retrieve(
      subscriptionId, {expand:['latest_invoice.payment_intent']}
    );
    
    if (subscription.status === 'past_due' && subscription.latest_invoice.payment_intent && subscription.latest_invoice.payment_intent.status === 'requires_payment_method') {
      await stripe.paymentIntents.confirm(subscription.latest_invoice.payment_intent.id, {payment_method: paymentMethodId});
    }
  }
  
  static detachCustomerPaymentMethod = async (stripe, { customerId, paymentMethodId }) => {
    const paymentMethods = await stripe.paymentMethods.list({
      customer: customerId,
      type: 'card',
    });
    
    for (let index = 0; index < paymentMethods.data.length; index++) {
      let card = paymentMethods.data[index];
      if (card.id !== paymentMethodId)
        await stripe.paymentMethods.detach(card.id);
    }

    if (paymentMethodId) {
      await stripe.customers.update(
        customerId,
        {
          invoice_settings: {
            default_payment_method: paymentMethodId,
          }
        }
      );
    }
  }

  static attachCustomerPaymentMethod = async (stripe, { customerId, paymentMethodId, subscriptionId }) => {
    await stripe.subscriptions.update(
      subscriptionId, { default_payment_method: paymentMethodId }
    );

    await stripe.customers.update(
      customerId, { invoice_settings: { default_payment_method: paymentMethodId } }
    );
  }

  static getPaymentMethods = async (stripe, userData) => {
    return await stripe.paymentMethods.list({
      customer: userData.customerId,
      type: 'card',
    });
  }

  static sameQuotes = (quotes, subscription, orderId, address) => {
    if (quotes.data.length === 0)
      return false;

    if (quotes.data[0].metadata && quotes.data[0].metadata.orderId !== orderId)
      return false;

    if (quotes.data[0].metadata && quotes.data[0].metadata.subscription === subscription.id) {
      let quoteMetadata = quotes.data[0].metadata;
      let sameAddress = (address && quoteMetadata.countryAddress) && (address.country === quoteMetadata.countryAddress && address.state === quoteMetadata.stateAddress)
      return sameAddress;
    } else
      return false;
  }

  static getQuote = async (stripe, { subscriptionId, orderId, address, subscribedModules, license }, STORE_PRODUCT_TABLE) => {
    console.log("Getting quote");

    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    let customer;
    if (address) {
      console.log("Updating customer address");
      address.country = CountryRegionData.find(data => data[0] === address.country)[1];
      customer = await stripe.customers.update(
        subscription.customer, { address }
      );
    } else {
      customer = await stripe.customers.retrieve(subscription.customer)
    }

    const quotes = await stripe.quotes.list({
      limit: 1,
      customer: subscription.customer,
      status: 'draft'
    });

    let quote;
    if (this.sameQuotes(quotes, subscription, orderId, address)) {
      console.log("Getting existing quote");
      quote = quotes.data[0];
    } else {
      console.log("Creating new quote");
      quote = await this.createQuote(stripe, { subscription, orderId, subscribedModules, license, address }, STORE_PRODUCT_TABLE);
    }

    return { quote, customer }
  }

  static createQuote = async (stripe, { subscription, orderId, subscribedModules, license, address }, STORE_PRODUCT_TABLE) => {
    return await stripe.quotes.create({
      customer: subscription.customer,
      line_items: this.getProductsData(subscription.items.data[0].price.product, license, subscribedModules, STORE_PRODUCT_TABLE),
      automatic_tax: { enabled: true },
      metadata: {
        subscription: subscription.id,
        countryAddress: address.country,
        stateAddress: address.state,
        orderId
      }
    });
  }

  static getSetupIntent = async (stripe, { customerId }) => {
    console.log("Getting setupIntent");
    return await stripe.setupIntents.create({
      customer: customerId,
    });
  }
}
