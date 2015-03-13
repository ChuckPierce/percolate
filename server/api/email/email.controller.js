'use strict';

var config = require('../../config/environment'),
    nodemailer = require('nodemailer'),
    transport = require('nodemailer-smtp-transport');

var stmp = nodemailer.createTransport(transport({ 
          service: "Mailgun",
          auth: {
            user: config.mailgun.user,
            pass: config.mailgun.password
          }
        }));

// Send email to person who filled out the form on the website
exports.email = function(req, res) {
    //constructs message for sending with personalized message
    var message = {
      from: 'chuckmpierce@gmail.com',
      to: req.body['Company Email'],
      subject: 'Thanks for requesting a demo!',
      text: 'Thank you ' + req.body['First Name'] + ' ' + req.body['Last Name'] + ' for requesting a demo. We want to help ' + req.body['Company'] + ' get one step ahead in their marketing strategy. One of our sales reps will be in touch!'
    };
      //uses nodemailer's stmp plugin to send through mailgun
      stmp.sendMail(message, function(err, info) {  
        if(err) handleError(res, err);
        console.log('message sent - ' + info);
        res.send(info)
      });
};

function handleError(res, err) {
  return res.send(500, err);
}