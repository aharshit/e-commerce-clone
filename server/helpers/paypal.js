const paypal = require('paypal-rest-sdk');
require('dotenv').config(); // Load environment variables

paypal.configure({
  mode: 'sandbox', // 'sandbox' or 'live'
  client_id: 'AcbMH7S_yr8LpahV6NEXKwIlsDMulxXJDuhu8wljV8rprxa2vZd6-9WIWLrg89fc7dH-ah9c7YFhRKXc',
  client_secret: 'EHvWZvqVUvYfJZLs3vki1-tctwQbWUPpy4W-8XOyQzE3weDAqrjuN-uBc_gvAsuBf1RA_JsJmTb9CMl_',
});

module.exports = paypal;

