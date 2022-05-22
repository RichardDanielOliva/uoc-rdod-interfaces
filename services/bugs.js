import { API_URL, CONTACT_FORM_TYPE } from '../config/constants';
import AuthService from "./serviceAuth";

export default class BugsServices extends AuthService {
    constructor() {super();}

    static addItem = async (dataForm) => {
        const jsonData = {
            ...dataForm,
            type: CONTACT_FORM_TYPE.BUG,
        };
        try {
            const response = await super.callBackend(API_URL.bugs, super.API_METHODS.POST, jsonData);
            return [true, response]
        } catch (error) {
            return [false, error]
        }
    }

    static getItems = async () => {
        try {
            const response = await super.callBackend(API_URL.bugs, super.API_METHODS.GET);
            return [true, response.data]
        } catch (error) {
            return [false, error]
        }
    }

    static updateItem = async (bug) => {
        try {
            const response = await super.callBackend(API_URL.bugs, super.API_METHODS.PUT, bug);
            return [true, response]
        } catch (error) {
            return [false, error]
        }
    }

    static mapToTableFormat = (data, userId) => {
        let tableData = data ? 
            data.map((item) => {
                let shortDescription = item.description.length > 250 ? 
                    `${item.description.slice(0, 250)} ...`: 
                    item.description;
                return {
                    ['id']: item.id,
                    ['description']: {
                        subject: item.subject,
                        description: shortDescription,
                        date: item.creation_datetime,
                    },
                    ['options'] : {
                        isFollower: item.followers ? item.followers.includes(userId) : false,
                        status: item.status
                    }
                }
            }) :
            [];
        return {
            data: tableData
        }
    }
}
