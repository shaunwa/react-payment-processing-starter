import { stripe } from '../stripe';

export const listProductsRoute = {
    path: '/products',
    method: 'get',
    handler: async (req, res) => {
        const productsResponse = await stripe.products.list({ limit: 10 });
        const products = productsResponse.data;

        const priceResponses = await Promise.all(
            products.map(product => stripe.prices.list({ product: product.id }))
        );
        const prices = priceResponses.map(res => res.data);

        const productsWithPrices = products.map((product, i) => ({
            ...product,
            prices: prices[i],
        }));

        res.status(200).json(productsWithPrices);
    }
}