import { stripe } from '../stripe';

export const getProductRoute = {
    path: '/products/:productId',
    method: 'get',
    handler: async (req, res) => {
        const { productId } = req.params;
        const product = await stripe.products.retrieve(productId);

        const priceResults = await stripe.prices.list({ product: productId });
        const prices = priceResults.data;

        console.log(product);

        res.status(200).json({
            ...product,
            prices,
        });
    }
}