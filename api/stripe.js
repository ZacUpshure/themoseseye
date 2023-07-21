import Stripe from 'stripe';

const stripe = new Stripe(process.env.REACT_APP_STRIPE_PRIVATE_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {


        const params = {
            submit_types: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            line_items: req.body.map((item) => {
              // Make sure to correctly form the image URL
              const img = item.image[0]?.asset?._ref; // Use optional chaining in case image[0] or asset is missing
              const newImage = img ? img.replace('image-', `https://cdn.sanity.io/images/${process.env.REACT_APP_SANITY_PROJECT_ID}/production/`).replace('-webp', '.webp') : null;
          
              return {
                price_data: {
                  currency: 'eur',
                  product_data: {
                    name: item.name,
                    images: newImage ? [newImage] : [], // Ensure you pass the image URL as an array
                  },
                  unit_amount: item.price * 100,
                },
                quantity: 1, // Fixed quantity of 1 for each product
              };
            }),
            success_url: `${req.headers.origin}/?success=true`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
          };
          

        // const params = {
        //     submit_type: 'pay',
        //     mode: 'payment',
        //     payment_method_types: ['card'],
        //     billing_address_collection: 'auto',
        //     line_items: req.body.map((item) => {
        //       const img = item.image[0].asset._ref;
        //       const newImage = img.replace('image-', `https://cdn.sanity.io/images/${process.env.REACT_APP_SANITY_PROJECT_ID}/production/`).replace('-webp', 'webp');
          
        //       return {
        //         price_data: {
        //           currency: 'eur',
        //           product_data: {
        //             name: item.name,
        //             images: [newImage],
        //           },
        //           unit_amount: item.price * 100,
        //         },
        //         quantity: item.quantity, // Include the quantity for each product
        //       };
        //     }),
        //     success_url: `${req.headers.origin}/?success=true`,
        //     cancel_url: `${req.headers.origin}/?canceled=true`,
        //   };

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session); 
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}