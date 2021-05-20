import configureStripe from 'stripe';

const { RPP_STRIPE_API_KEY } = process.env;

export const stripe = configureStripe(RPP_STRIPE_API_KEY);