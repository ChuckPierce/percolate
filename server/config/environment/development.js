'use strict';
var localENV = require('../local.env.js');
// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/percolate-dev'
  },

  mailgun: {
  	user: localENV.MAILGUN_USER,
  	password: localENV.MAILGUN_PASSWORD
  },

  seedDB: false
};
