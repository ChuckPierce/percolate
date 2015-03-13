'use strict';

var express = require('express');
var controller = require('./email.controller');

var router = express.Router();

//route to post to to send email to intended recipient
router.post('/', controller.email);

module.exports = router;