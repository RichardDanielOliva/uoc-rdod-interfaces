export const SUBSCRIPTION_RENEWAL = {
  interval: 'month', //day, month
  getExpiration: (date) => date.setMonth(date.getMonth() + 1)//setDate(), getDate() //setMonth(), getMonth()
}

export const AVAILABLE_SUBSCRIPTION_COUNTRIES = ['GB', 'US'];

export const API_URL = {
  request: "/api/requests",
  requestPublic: "/api/requests/public",
  images: "/api/images",
  bugs: "/api/bugs",
  orders: "/api/orders",
  quotes: "/api/quotes",
  quotesPublic: "/api/quotes/public",
  carts: "/api/carts",
  licenses: "/api/licenses",
  licensesRequest: "/api/licenses/request",
  payments: "/api/payments",
  subscriptions: "/api/subscriptions",
  subscriptionsCustomer: "/api/subscriptions/customer",
  subscriptionsPaymentMethods: "/api/subscriptions/payment_methods",
  invoicesPDF: (invoiceId) => `/api/subscriptions/invoices/${invoiceId}`,
  paymentsQuotes: "/api/payments/quotes",
  paymentsSubscriptions: "/api/payments/subscriptions",
  paymentsSetupIntent: "/api/payments/setup_intents",
  user: "/api/user",
  userRoles: "/api/user/roles",
  resources: "/api/resources"
}

export const API_URL_ADMIN = {
  whiteList: "/api/admin/whitelist"
}

export const API_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH"
}

export const DEFAULT_TABLE_PAGE_SIZE = 10;
export const DEFAULT_TABLE_PAGE_SIZE_OPTIONS = [10, 20, 30, 40, 50];
export const DEFAULT_CURRENCY = 'USD';
export const NAVIGATION_ITEMS = [
  { id: "Musica", name: "Conciertos", url: "/#music" },
  { id: "Deportes", name: "Deportes", url: "/#sport" },
  { id: "Teatro y comedia", name: "Teatro y comedia", url: "/#theater" },
];

export const NOTIFICATION_TYPE = {
  LICENSE: 'license',
  BUG: 'bug',
  QUOTE: 'quote',
  REQUEST: 'request',
  ERROR: 'error'
}

export const NOTIFICATION_SUBJECT = {
  RENEWAL_LICENSE_ERROR: 'Renewal License error',
  NEW_LICENSE: 'New TKRISK License',
  NEW_TRIAL_LICENSE: 'New TKRISK Trial License',
  UPDATE_LICENSE: 'Update TKRISK License',
  CANCEL_LICENSE: 'TKRISK licence cancelled',
  NEW_BUG: 'Detected New Bug',
  NEW_QUOTE: 'New Quote Request',
  NEW_PUBLIC_QUOTE: 'New Quote Request From External User',
  NEW_SERVICES_REQUEST: 'New Services Request',
  NEW_SALES_REQUEST: 'New Sales Request',
  NEW_PUBLIC_SALES_REQUEST: 'New Sales Request From External User',
  NEW_SUPPORT_REQUEST: 'New Support Request',
  NEW_PUBLIC_SUPPORT_REQUEST: 'New Support Request From External User',
  UPDATE_REQUEST: (type, status) => ` ${status} ${type} Request`
}

// REQUEST TYPE
// ISSUES - DOCUMENTATION AND PRE POPULATE FORM WITH USER DATA
export const CONTACT_FORM_TYPE = {
  SALES: "SALES",
  TRIAL: "TRIAL",
  SERVICES: "SERVICES",
  BUG: "BUG",
  TECHNICAL: "TECHNICAL",
  SUPPORT: "SUPPORT",
  OTHER: "OTHER",
  QUOTES: {
    ANALYZE: "ANALYZE",
    DEVELOP: "DEVELOP",
    ENTERPRISE: "ENTERPRISE",
    DISTRIBUTE: "DISTRIBUTE",
  }
};

export const QUOTES_STATUS = {
  CREATED: "CREATED",
}

export const REQUESTS_STATUS = {
  CREATED: "CREATED",
  CANCELLED: "CANCELLED"
}

export const ORDER_STATUS = {
  CREATED: "CREATED",
  APPROVED: "APPROVED",
  CANCELLED: "CANCELLED",
  PENDING_PAYMENT: "PENDING_PAYMENT",
}

export const ORDER_TYPE = {
  CREATE_LICENSE: "CREATE_LICENSE",
  UPDATE_LICENSE: "UPDATE_LICENSE",
  DELETE_LICENSE: "DELETE_LICENSE"
}

export const PRODUCTS = {
  TKRISK: 'tkrisk'
}

export const POPULATE_USER_FORM_INPUTS = {
  email: { disabled: true },
  firstName: { disabled: true },
  lastName: { disabled: true },
};

export const POPULATE_CHECKOUT_FORM_INPUTS = {
  email: { disabled: true },
  firstName: { disabled: false },
  lastName: { disabled: false },
  country: { disabled: false },
  state: { disabled: false },
  city: { disabled: false },
  line1: { disabled: false },
  line2: { disabled: false },
  postal_code: { disabled: false },
  company: { disabled: false },
  jobTitle: { disabled: false },
  line2: { disabled: false },
  phone: { disabled: false },
};
