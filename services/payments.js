import { API_URL } from '../config/constants';
import AuthService from './serviceAuth';

export default class PaymentServices extends AuthService {
    static getSubscriptionSession = async (order, STORE_PRODUCT_TABLE) => {
        return await super.callBackend(API_URL.paymentsSubscriptions, super.API_METHODS.POST, {order, STORE_PRODUCT_TABLE});
    }

    static getQuote = async (subscriptionId, { id, license, subscribedModules, address }, STORE_PRODUCT_TABLE) => {
        const jsonData = { subscriptionId, orderId: id, address, license, subscribedModules, STORE_PRODUCT_TABLE };
        return await super.callBackend(API_URL.paymentsQuotes,super.API_METHODS.POST, jsonData);
    }

    static getSetupIntent = async (customerId) => {
        const jsonData = { customerId };
        return await super.callBackend(API_URL.paymentsSetupIntent,super.API_METHODS.POST, jsonData);
    }
}
