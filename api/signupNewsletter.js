require("dotenv").config();
const axios = require('axios');

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid request method' })
      };
    }

    const { email } = JSON.parse(event.body);

    // Your Mailchimp API endpoint for adding subscribers
    const apiUrl = `${process.env.REACT_APP_MAILCHIMP_API_ENDPOINT}/lists/${process.env.REACT_APP_MAILCHIMP_LIST_ID}`;

    // Mailchimp API request payload
    const data = {
      email_address: email,
      status: 'subscribed'
    };

    // Make a POST request to the Mailchimp API
    const response = await axios.post(apiUrl, data);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Subscriber added', response: response.data })
    };
  } catch (error) {
    console.error('Error adding subscriber:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error adding subscriber' })
    };
  }
};