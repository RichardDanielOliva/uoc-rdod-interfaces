import { API_URL } from "../config/constants";
import { useLocaleStoreCartDefaultTableData, useLocaleStoreCartTableColumns, useLocaleStoreProductTable } from "../hooks/locales/store.hook";
import AuthService from "./serviceAuth";

export default class CartServices extends AuthService {
  static addItem = async (items, product, license) => {
    const jsonData = {
      subscribedModules: items,
      product,
      license,
    };
    try {
      const response = await super.callBackend(API_URL.carts, super.API_METHODS.POST, jsonData);
      return [true, response];
    } catch (error) {
      return [false, error];
    }
  };

  static getItem = async () => {
    try {
      const response = await super.callBackend(API_URL.carts, super.API_METHODS.GET);
      return [true, response.data];
    } catch (error) {
      return [false, error];
    }
  };

  static mapToItemFormat = (userId, items, product, license) => {
    return {
      subscribedModules: items,
      product,
      license,
      userId,
    };
  };

  static mapToTableFormat = (cart) => {
    const STORE_CART_TABLE_COLUMNS = useLocaleStoreCartTableColumns();
    const STORE_CART_DEFAULT_TABLE_DATA = useLocaleStoreCartDefaultTableData();
    const STORE_PRODUCT_TABLE = useLocaleStoreProductTable();
    let tableData = {
      columns: STORE_CART_TABLE_COLUMNS,
      data: [...STORE_CART_DEFAULT_TABLE_DATA],
    };

    if (cart.product) {
      let productItem = STORE_PRODUCT_TABLE[cart.license].data.find(
        (product) => product.id === "tkrisk"
      );
      tableData.data.push({
        id: productItem.id,
        product: productItem.productSuite.name,
        price: productItem.price,
      });
      cart.subscribedModules.forEach((item) => {
        let product = STORE_PRODUCT_TABLE[cart.license].data.find(
          (product) => product.id === item
        );
        tableData.data.push({
          id: product.id,
          product: product.productSuite.name,
          price: product.price,
        });
      });
    }

    return tableData;
  };

  static getSubTotalPrice = ({license, subscribedModules}, STORE_PRODUCT_TABLE) => {
    let totalPrice = 0;

    if (license && subscribedModules) {
      let productItem = STORE_PRODUCT_TABLE[license].data.find(
        (product) => product.id === "tkrisk"
      );
      totalPrice += productItem.price;
      totalPrice = subscribedModules.reduce((acc, item) => {
        let product = STORE_PRODUCT_TABLE[license].data.find(
          (product) => product.id === item
        );
        if (isNaN(acc)) {
          acc = 0;
        }
        return product.price ? acc + product.price : acc;
      }, totalPrice);

      return totalPrice;
    };
    }

    static getUnitMount = (cart, STORE_PRODUCT_TABLE) => {
       return Math.round(this.getSubTotalPrice(cart, STORE_PRODUCT_TABLE) * 100)
    }

    static getMonthlyPrice = (cart) => {
        return this.getSubTotalPrice(cart) / 12;
    }
}
