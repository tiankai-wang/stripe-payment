import express from 'express';
import Stripe from 'stripe';
import bodyParser from 'body-parser';

const stripeSecretKey = "sk_test_51LXxrfBGpm7Cu8Cy6SAEKqXRZBo5hyGdZSRsNyJml8aQPHOJ9tOHhgXZO8uw8TAV8CVpwz3782mDRdJe1P8yUsUS00P95VqTHY"
const app = express();

app.use((req, res, next) => {
    bodyParser.json()(req, res, next);
});

app.post('/payment-sheet', async (req, res) => {
    const stripe = new Stripe(stripeSecretKey, {
        apiVersion: '2020-08-27',
        typescript: true,
    });
    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: 'usd',
        payment_method_types: ['card', 'link'],
    });
    return res.json({
        paymentIntent: paymentIntent.client_secret,
    });
});

app.listen(4242, () => console.log(`Node server listening on port ${4242}!`));