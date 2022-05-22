import { loadStripe } from '@stripe/stripe-js';

const secreteKey = process.env.NEXT_PUBLIC_PAYMENT_PUBLISHABLE_KEY;
export const stripePromise = loadStripe(secreteKey);