import { API_URL, QUOTES_STATUS } from '../config/constants';
import AuthService from './serviceAuth';
import { useLocaleQuotesTable } from '../hooks/locales/quotes.hook';

export default class QuotesServices extends AuthService {
    constructor() {super();}

    static addItem = async (dataForm, product, license) => {
        const jsonData = {
                ...dataForm,
                product,
                license,
                status: QUOTES_STATUS.CREATED,
        };
        try {
            let options={
                retryWithoutAuth: true,
                retryEndPoint: API_URL.quotesPublic
            }
            const response = await super.callBackend(API_URL.quotes, super.API_METHODS.POST, jsonData, options);
            return [true, response]
        } catch (error) {
            return [false, error]
        }
    }

    static getItemsByUserId = async () => {
        try {
            const response = await super.callBackend(API_URL.quotes, super.API_METHODS.GET);
            return [true, response.data]
        } catch (error) {
            return [false, error]
        }
    }

    static mapToTableFormat = (data) => {
        const QUOTES_TABLE = useLocaleQuotesTable();
        let tableData = data ? 
            data.map((data) => {
                return QUOTES_TABLE.columns.reduce((row, column) => {
                    row[column.accessor] = data[column.accessor];
                    return row
                }, {})       
            }) :
            [];
        return {
            data: tableData,
            columns: QUOTES_TABLE.columns,
        }
    }
    
}
