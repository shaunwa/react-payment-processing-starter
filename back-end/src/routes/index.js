import { createCheckoutSessionRoute } from './createCheckoutSessionRoute';
import { getProductRoute } from './getProductRoute';
import { listProductsRoute } from './listProductsRoute';
import { stripeWebhooksRoute } from './stripeWebhooksRoute';
import { testRoute } from './testRoute';

export const routes = [
    createCheckoutSessionRoute,
    getProductRoute,
    listProductsRoute,
    stripeWebhooksRoute,
    testRoute,
];