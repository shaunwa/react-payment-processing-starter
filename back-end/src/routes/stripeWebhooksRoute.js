import { getDbConnection } from '../db';
import { stripe } from '../stripe';

export const stripeWebhooksRoute = {
    path: '/stripe-webhooks',
    method: 'post',
    handler: async (req, res) => {
        const event = req.body;
        
        console.log(event);

        switch (event.type) {
            case 'checkout.session.completed': {
                const session = event.data.object;

                const lineItemsResult = await stripe.checkout.sessions.listLineItems(session.id, { limit: 10 });
                const { data: newPurchasedLineItems } = lineItemsResult;

                const customerEmail = session.customer_email || session.customer_details.email;

                const userPurchasedNewsletterSub = newPurchasedLineItems.some()

                const db = getDbConnection('react-pp-db');
                await db.collection('users').updateOne(
                    { email: customerEmail },
                    {
                        $push: { purchasedLineItems: { $each: newPurchasedLineItems } },
                        $set: { lastSubscriptionPaymentDate: Date.now() },
                    },
                );
            }
            case 'invoice.paid': {

            }
            case 'invoice.payment_failed': {

            }
            case 'customer.subscription.deleted': {

            }
        }

        res.sendStatus(200);
    }
}