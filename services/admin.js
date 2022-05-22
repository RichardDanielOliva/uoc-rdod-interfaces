import { API_URL_ADMIN } from "../config/constants";
import AuthService from "./serviceAuth";

export default class AdminService extends AuthService {
  constructor() {
    super();
  }

  static getWhiteList = async () => {
    try {
      const response = await super.callBackend(
        API_URL_ADMIN.whiteList,
        super.API_METHODS.GET
      );
      return [true, response.data];
    } catch (error) {
      return [false, error];
    }
  };

  static addToWhiteList = async (tableKey, value) => {
    try {
      const response = await super.callBackend(
        API_URL_ADMIN.whiteList,
        super.API_METHODS.POST,
        {
          key: tableKey,
          value: value,
        }
      );
      return [true, response.data];
    } catch (error) {
      return [false, error];
    }
  };

  static deleteFromWhiteList = async (tableKey, value) => {
    try {
      const response = await super.callBackend(
        API_URL_ADMIN.whiteList,
        super.API_METHODS.DELETE,
        {
          key: tableKey,
          value: value,
        }
      );
      return [true, response.data];
    } catch (error) {
      return [false, error];
    }
  };
}
