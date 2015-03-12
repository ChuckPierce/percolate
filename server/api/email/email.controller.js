'use strict';

var _ = require('lodash'),
        mandrill = require('mandrill-api/mandrill'),
        key = require('../../config/environment'),
        mandrill_client = new mandrill.Mandrill(key.mandrill.apiKey),
        nodemailer = require('nodemailer'),
        transport = require('nodemailer-smtp-transport');

var stmp = nodemailer.createTransport(transport({ 
          service: "Mailgun",
          auth: {
            user: "postmaster@sandbox8f67228da981480ca21174dff1255fbc.mailgun.org",
            pass: "59bcc8679ab585cc29c7a9386ee906b0"
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