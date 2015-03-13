'use strict';

var _ = require('lodash'),
        config = require('../../config/environment'),
        nodemailer = require('nodemailer'),
        transport = require('nodemailer-smtp-transport');

var stmp = nodemailer.createTransport(transport({ 
          service: "Mailgun",
          auth: {
            user: config.mailgun.user,
            pass: config.mailgun.password
          }
        }));

// Get list of emails
exports.email = function(req, res) {

    var message = {
      from: 'chuckmpierce@gmail.com',
      to: req.body['Company Email'],
      subject: 'Thanks for requesting a demo!',
      text: 'Thanks for requesting a demo.  One of our sales reps will be in touch!'
    };

      stmp.sendMail(message, function(err, info) {  
        if(err) handleError(res, err);
        console.log('message sent - ' + info);
        res.send(info)
      });
};

function handleError(res, err) {
  return res.send(500, err);
}