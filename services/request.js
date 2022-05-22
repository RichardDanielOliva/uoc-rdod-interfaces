import { API_URL, CONTACT_FORM_TYPE, REQUESTS_STATUS } from '../config/constants';
import { useLocaleRequestsTable } from '../hooks/locales/requests.hook';
import AuthService from "./serviceAuth";

export default class RequestServices extends AuthService {
    constructor() {super();}

    static updateItem = async (dataForm) => {
        try {
            const response = await super.callBackend(API_URL.request, super.API_METHODS.PUT, dataForm);
            return [true, response]
        } catch (error) {
            return [false, error]
        }
    }

    static addItem = async (dataForm, type=CONTACT_FORM_TYPE.SALES) => {
        try {
            let options={
                retryWithoutAuth: true,
                retryEndPoint: API_URL.requestPublic
            }
            const response = await super.callBackend(API_URL.request, super.API_METHODS.POST, {...dataForm, type: type}, options);
            return [true, response]
        } catch (error) {
            return [false, error]
        }
    }

    static getItemsByUserId = async () => {
        try {
            const response = await super.callBackend(API_URL.request, super.API_METHODS.GET);
            return [true, response.data]
        } catch (error) {
            return [false, error]
        }
    }

    static mapToTableFormat = (data) => {
        const REQUESTS_TABLE = useLocaleRequestsTable();
        let tableData = data ? 
            data.map((data) => {
                let rowData = REQUESTS_TABLE.columns.reduce((row, column) => {
                    row[column.accessor] = data[column.accessor];
                    return row
                }, {})  

                rowData.enableDelete = data.status !== REQUESTS_STATUS.CANCELLED;
                return rowData;      
            }) :
            [];
        return {
            data: tableData,
            columns: REQUESTS_TABLE.columns,
        }
    }

    static mapToFormFormat = (form, attributes, data) => {
        const formValues = JSON.parse(JSON.stringify(form));
  
        if(attributes){
          Object.entries(attributes).forEach(([inputId, inputOptions]) => {
            formValues.inputs[inputId] = {
              ...formValues.inputs[inputId],
              ...inputOptions,
            }
            if(data[inputId]) formValues.inputs[inputId].initialValue = data[inputId]
          } )
        }
    
        return formValues;
    }
}
