'use strict';
var localENV = require('../local.env.js');
// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/percolate-dev'
  },

  mandrill: {
  	apiKey: localENV.MANDRILL_API_KEY
  },

  seedDB: false
};
