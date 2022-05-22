import { API_URL } from '../config/constants';

const axios = require('axios');

//TODO: implement b2c token as header for all services calls to avoid send userID
export default class ResourcesServices {
    static getItems = async () => {
        try {
            const response = await axios.get(API_URL.resources)
            return [true, response.data]
        } catch (error) {
            return [false, [], error]
        }
    }

    static getItem = async (resourceId) => {
        try {
            const response = await axios.get(`${API_URL.resources}/${resourceId}`)
            return [true, {...response.data[resourceId]}]
        } catch (error) {
            return [false, [], error]
        }
    }
}
