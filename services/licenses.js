import { API_URL, PRODUCTS, CONTACT_FORM_TYPE } from "../config/constants";
import AuthService from "./serviceAuth";

export default class LicensesServices extends AuthService {
  constructor() {
    super();
  }
  
  static requestTrial = async (dataForm) => {
    try {
      const response = await super.callBackend(
        API_URL.licensesRequest,
        super.API_METHODS.POST,
        {
          ...dataForm,
          product: PRODUCTS.TKRISK,
          license: CONTACT_FORM_TYPE.TRIAL,
        }
      );
      return [true, response.data];
    } catch (error) {
      return [false, error.response ? error.response.data : error];
    }
  };

  static getLicenses = async () => {
    try {
      const response = await super.callBackend(
        API_URL.licenses,
        super.API_METHODS.GET
      );
      return [true, response.data];
    } catch (error) {
      return [false, error];
    }
  };
}
