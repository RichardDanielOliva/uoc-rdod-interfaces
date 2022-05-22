import { DEFAULT_CURRENCY } from "../config/constants";

export default class FormatServices {
    static formatCurrency = (value) => {
        if([null, undefined].includes(value) || Number.isNaN(value)) return value;
        else return `${DEFAULT_CURRENCY} ${(Math.round(Number(value) * 10) / 10).toFixed(2)}`;
    }

    static formatDecimal = (value) => {
        return `${Number(value).toFixed(2)}`;
    }

    static formatCard = (stripeCard) => {
        return `${stripeCard.brand} •••• ${stripeCard.last4}`;
    }

    static formatAddress = (address) => {
        return `${address.line1} ${address.postal_code} ${address.city} ${address.state} ${address.country}`;
    }

    static getHostUrl = (req) => { 
        return `${req.headers.origin}`
    }
}