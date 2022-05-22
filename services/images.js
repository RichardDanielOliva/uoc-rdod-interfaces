import { API_URL } from '../config/constants';
import AuthService from './serviceAuth';

export default class ImagesServices extends AuthService {
    constructor() {super();}

    static addMultipleItems = async (items) => { 
        try {
            const response = await super.callBackend(API_URL.images, super.API_METHODS.POST, {images: items});
            return [true, response]
        } catch (error) {
            return [false, error]
        }
    }

    static getItem = async (imageId) => {
        try {
            const response = await super.callBackend(`${API_URL.images}/${imageId}`, super.API_METHODS.GET);
            return [true, response.data]
        } catch (error) {
            return [false, error]
        }
    }
}
