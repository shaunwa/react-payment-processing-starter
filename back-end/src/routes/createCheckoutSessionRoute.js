import * as admin from 'firebase-admin';
import { getDbConnection } from '../db';
import { stripe } from '../stripe';

export const createCheckoutSessionRoute = {
    path: '/checkout-session',
    method: 'post',
    handler: async (req, res) => {
        const { authtoken } = req.headers;
        const { prices } = req.body;

        const user = await admin.auth().verifyIdToken(authtoken);
        const { email } = user;

        const lineItems = prices.map(price => ({
            price: price.id,
            quantity: 1,
        }));

        const isRecurring = prices.some(price => price.type === 'recurring');

        const sessionConfig = {
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: isRecurring ? 'subscription' : 'payment',
            success_url: 'http://localhost:3000/checkout-result?status=success',
            cancel_url: 'http://localhost:3000/checkout-result?status=canceled',
        };

        const session = await stripe.checkout.sessions.create(sessionConfig);

        const db = getDbConnection('react-pp-db');
        await db.collection('users').updateOne({
            fbId: user.uid,
        }, {
            $set: { email },
        })

        res.status(200).json({ sessionId: session.id });
    },
}