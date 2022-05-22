import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../config/msal_b2c_config";

const msalInstance = new PublicClientApplication(msalConfig);

export { msalInstance };
