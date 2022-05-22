import { API_URL } from '../config/constants';
import AuthService from './serviceAuth';

export default class SubscriptionServices extends AuthService {
    static getItem = async () => {
        return await super.callBackend(API_URL.subscriptions, super.API_METHODS.GET);
    }

    static addItem = async (orderId, paymentMethodId, customerId) => {
        const jsonData = { orderId, paymentMethodId, customerId };
        return await super.callBackend(API_URL.subscriptions, super.API_METHODS.POST, jsonData);
    }
    
    static updateItem = async (orderId, paymentMethodId, customerId, formData, STORE_PRODUCT_TABLE) => {
        const jsonData = { ...formData, orderId, paymentMethodId, customerId, STORE_PRODUCT_TABLE };
        return await super.callBackend(API_URL.subscriptions, super.API_METHODS.PUT, jsonData);
    }

    static updateCustomerAddress = async (customerId, address) => {
        const jsonData = { customerId, address };
        return await super.callBackend(API_URL.subscriptionsCustomer, super.API_METHODS.PUT, jsonData);
    }

    static attachPaymentMethod = async (customerId, paymentMethodId, subscriptionId) => {
        const jsonData = { customerId, paymentMethodId, subscriptionId };
        return await super.callBackend(API_URL.subscriptionsPaymentMethods, super.API_METHODS.PUT, jsonData);
    }

    static getPaymentMethods = async () => {
        return await super.callBackend(API_URL.subscriptionsPaymentMethods, super.API_METHODS.GET);
    }

    static cancelSubscription = async () => {
        return await super.callBackend(API_URL.subscriptions, super.API_METHODS.DELETE);
    }

    static getInvoicesPDF = async (invoiceId) => {
        return await super.callBackend(API_URL.invoicesPDF(invoiceId), super.API_METHODS.GET);
    }

    static validateNewRequest = async (userData, orderData, subscription) => {
        if(userData && orderData && subscription){
          if(subscription.metadata.orderId != orderData.id || 
            subscription.metadata.userId !== userData.id){
              throw("Invalid parameters")
          }
        }else {
            throw("Invalid parameters")
        }
    }

    
    static validateUpdateRequest = async (userData, orderData, subscription) => {
        if(!(userData && orderData && subscription && 
            subscription.metadata.userId === userData.id) )
          throw("Invalid parameters")
    }
}
