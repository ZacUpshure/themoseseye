require("dotenv").config();
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: process.env.REACT_APP_MAILCHIMP_API_KEY,
  server: process.env.REACT_APP_MAILCHIMP_DC
});

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid request method' })
      };
    }

    const { email } = JSON.parse(event.body);

    const response = await mailchimp.lists.addListMember(process.env.REACT_APP_MAILCHIMP_LIST_ID, {
      email_address: email,
      status: 'subscribed'
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Subscriber added', response })
    };
  } catch (error) {
    console.error('Error adding subscriber:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error adding subscriber' })
    };
  }
};
