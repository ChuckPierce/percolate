'use strict';
var localENV = require('../local.env.js');
// Development specific configuration
// ==================================
module.exports = {

  mailgun: {
  	user: localENV.MAILGUN_USER,
  	password: localENV.MAILGUN_PASSWORD
  }
};
