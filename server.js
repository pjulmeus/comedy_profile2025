const stripe = require('stripe')('sk_test_51QbRpTCHSonHOQuJOqQMMuD9j2AcDsNQJ8fxNHFyY3mw8Zi7YssWejBk4RXmmmFH7389SsYhlQsKDKiKt8de2XKN00CoRGPzaC');
const express = require('express')
require('dotenv').config()

const app = express()
app.use(express.static('public'));
const PORT = process.env.DB_PORT

const YOUR_DOMAIN = `http://localhost:${PORT}`;

    app.get('/', async(req,res) => {
        console.log("Hello, here I home")
    })

    app.post('/create-checkout-session', async (req, res) => {
        const session = await stripe.checkout.sessions.create({
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: '{{PRICE_ID}}',
              quantity: 1,
            },
          ],
          mode: 'payment',
          success_url: `${YOUR_DOMAIN}/success.html`,
          cancel_url: `${YOUR_DOMAIN}/cancel.html`,
          automatic_tax: {enabled: true},
      });
      
        res.redirect(303, session.url);
      });
      
      app.listen(PORT, () => console.log('Running on port ' + PORT));