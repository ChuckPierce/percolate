'use strict';

var express = require('express');
var controller = require('./email.controller');

var router = express.Router();

router.post('/', controller.email);

module.exports = router;