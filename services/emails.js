import { CONTACT_FORM_TYPE, NOTIFICATION_SUBJECT, NOTIFICATION_TYPE } from "../config/constants";
import axios from "axios";

const company_EMAILS = {
    emailAPI: process.env.PRIVATE_EMAIL_API,
    //support: "support@company.com", // TODO: From env
    //sales: "info@company.com", // TODO: From env
    support: process.env.PRIVATE_SUPPORT_EMAIL,
    sales: process.env.PRIVATE_SALES_EMAIL,
  };

export default class EmailService {
    static async sendRequest(dataForm, images, type=CONTACT_FORM_TYPE.SALES) {
        const jsonData = {
                content: dataForm,
                type: type,
                images: Object.values(images).reduce((acc, img) => {
                    acc= [...acc, ...img.map(image => image[0])]
                    return acc
                }, []),
                email: type === CONTACT_FORM_TYPE.SALES ? company_EMAILS.sales : company_EMAILS.support,
        };
        
        try {
            const response = await axios.post(company_EMAILS.emailAPI, jsonData);
            return [true, response]
        } catch (error) {
            return [false, error]
        }
    }

    static async sendPaymentFailNotification({ userId, email, orderId, next_payment_attempt  }){
        
        const jsonData = {
            content: {
                next_payment_attempt: new Date(next_payment_attempt * 1000)
            },
            subject: NOTIFICATION_SUBJECT.RENEWAL_LICENSE_ERROR,
            email: company_EMAILS.support,
            userEmail: email,
            group: NOTIFICATION_TYPE.ERROR,
            userId: userId,
            notificationId: orderId
        };
        try {
            const response = await axios.post(company_EMAILS.emailAPI, jsonData);
            return [true, response]
        } catch (error) {
            return [false, error]
        }
    }

    static async sendNewTrialLicensesNotification({ license, email, subscribedModules,  product, orderId, licenseId, userId, expirationDate }){
        return await this._sendLicenseNotification( NOTIFICATION_SUBJECT.NEW_TRIAL_LICENSE, email,
            { license, subscribedModules, product, licenseId, expirationDate }, userId, orderId)
    }

    static async sendNewLicensesNotification({ license, email, subscribedModules,  product, orderId, licenseId, userId }){
        return await this._sendLicenseNotification( NOTIFICATION_SUBJECT.NEW_LICENSE, email,
            { license, subscribedModules,  product, licenseId }, userId, orderId)
    }

    static async sendUpdateLicensesNotification({ license, email, subscribedModules,  product, orderId, licenseId, userId }){
        return await this._sendLicenseNotification( NOTIFICATION_SUBJECT.UPDATE_LICENSE, email,
            { license, subscribedModules,  product, licenseId }, userId, orderId)
    }

    static async sendCancelLicensesNotification({ orderId, email, userId }){
        return await this._sendLicenseNotification( NOTIFICATION_SUBJECT.CANCEL_LICENSE, email,
            {}, userId , orderId)
    }

    static async _sendLicenseNotification(subject, email, content, userId, orderId){
        const jsonData = {
            content,
            subject,
            email: company_EMAILS.support,
            userEmail: email,
            group: NOTIFICATION_TYPE.LICENSE,
            userId: userId,
            notificationId: orderId
        };

        try {
            const response = await axios.post(company_EMAILS.emailAPI, jsonData);
            return [true, response]
        } catch (error) {
            return [false, error]
        }
    }

    static async sendNewBugNotification({ userId, email, bugId, os, browser, description, replicationSteps, subject, firstName, lastName  }){
        const jsonData = {
            content: {
                os, browser, description, replicationSteps, subject, firstName, lastName
            },
            subject: NOTIFICATION_SUBJECT.NEW_BUG,
            email: company_EMAILS.support,
            userEmail: email,
            group: NOTIFICATION_TYPE.BUG,
            userId: userId,
            notificationId: bugId
        };

        try {
            const response = await axios.post(company_EMAILS.emailAPI, jsonData);
            return [true, response]
        } catch (error) {
            return [false, error]
        }
    }

    static async sendNewQuoteNotification({ userId, city, email, quoteId, subscriptionType, product, license, message, numUser, subscribedModules, organizationName }){
        const jsonData = {
            content: {
                subscriptionType, product, license, message, numUser, subscribedModules, organizationName, city
            },
            subject: NOTIFICATION_SUBJECT.NEW_QUOTE,
            email: company_EMAILS.support,
            userEmail: email,
            group: NOTIFICATION_TYPE.QUOTE,
            userId: userId ? userId: 'External User',
            notificationId: quoteId
        };

        try {
            const response = await axios.post(company_EMAILS.emailAPI, jsonData);
            return [true, response]
        } catch (error) {
            return [false, error]
        }
    }

    static _extractRequestData = (data) => {
        let { userId, email, requestId, type, subject, description, message, licenseId, firstName, lastName, city, title } = data;
        switch (type) {
            case CONTACT_FORM_TYPE.SALES:
                return {
                    content: { email, type, subject, message, firstName, lastName, city },
                    subject: NOTIFICATION_SUBJECT.NEW_SALES_REQUEST,
                    userId: userId ? userId: 'External User',
                    notificationId: requestId
                }
            case CONTACT_FORM_TYPE.SERVICES:
                return {
                    content: { email, type, subject, description, licenseId, title },
                    subject: NOTIFICATION_SUBJECT.NEW_SERVICES_REQUEST,
                    userId: userId,
                    notificationId: requestId
                }
            case CONTACT_FORM_TYPE.SUPPORT:
                return {
                    content: { email, type, subject, message, firstName, lastName, city },
                    subject: NOTIFICATION_SUBJECT.NEW_SUPPORT_REQUEST,
                    userId:  userId ? userId: 'External User',
                    notificationId: requestId
                }
            default:
                throw Error("Invalid request type")
        }
    }

    static async sendNewRequestNotification(data){
        const { subject, content, userId, notificationId } = this._extractRequestData(data)
        const jsonData = {
            content,
            subject,
            email: company_EMAILS.support,
            userEmail: content.email,
            group: NOTIFICATION_TYPE.REQUEST,
            userId,
            notificationId
        };

        try {
            const response = await axios.post(company_EMAILS.emailAPI, jsonData);
            return [true, response]
        } catch (error) {
            return [false, error]
        }
    }

    static async sendUpdateRequestNotification({ userId, email, requestId, type, status, subject }){
        const jsonData = {
            content: { type, subject, status },
            subject: NOTIFICATION_SUBJECT.UPDATE_REQUEST(type, status),
            userEmail: email,
            email: company_EMAILS.support,
            group: NOTIFICATION_TYPE.REQUEST,
            userId: userId,
            notificationId: requestId
        };

        try {
            const response = await axios.post(company_EMAILS.emailAPI, jsonData);
            return [true, response]
        } catch (error) {
            return [false, error]
        }
    }
}