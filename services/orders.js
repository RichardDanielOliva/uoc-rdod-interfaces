import { API_URL } from '../config/constants';
import { useLocaleOrdersTable } from '../hooks/locales/orders.hook';
import AuthService from './serviceAuth';

const axios = require('axios');

//TODO: implement b2c token as header for all services calls to avoid send userID
export default class OrdersServices extends AuthService {
    static addItem = async (dataForm, status='CREATED') => {
        const jsonData = {
                ...dataForm,
                status,
        };
        return await super.callBackend(API_URL.orders, super.API_METHODS.POST, jsonData);
    }

    static getItems = async () => {
        return await super.callBackend(API_URL.orders, super.API_METHODS.GET);
    }

    static updateItem = async (orderId, status) => {
        const jsonData = { orderId, status };
        return await super.callBackend(API_URL.orders, super.API_METHODS.PUT, jsonData);
    }

    static mapToTableFormat = (data) => {
        const ORDERS_TABLE = useLocaleOrdersTable();
        let tableData = data ? 
            data.map((data) => {
                return ORDERS_TABLE.columns.reduce((row, column) => {
                    row[column.accessor] = data[column.accessor];
                    return row
                }, {})       
            }) :
            [];
        return {
            data: tableData,
            columns: ORDERS_TABLE.columns,
        }
    }
}
