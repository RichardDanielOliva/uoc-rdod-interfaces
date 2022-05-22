import { API_URL, PRODUCTS, CONTACT_FORM_TYPE } from "../config/constants";
import AuthService from "./serviceAuth";

export default class UserService extends AuthService {
  constructor() {
    super();
  }
  

  static getRoles = async () => {
    try {
      const response = await super.callBackend(
        API_URL.userRoles,
        super.API_METHODS.GET
      );
      return [true, response.data];
    } catch (error) {
      return [false, error];
    }
  };
}
