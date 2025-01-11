const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const express = require('express')
require('dotenv').config()

const app = express()
app.use(express.static('public'));
const PORT = process.env.DB_PORT

const YOUR_DOMAIN = `comedy-profile2025.vercel.app`;

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