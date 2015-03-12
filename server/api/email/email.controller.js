'use strict';

var _ = require('lodash'),
        mandrill = require('mandrill-api/mandrill'),
        key = require('../../config/environment'),
        mandrill_client = new mandrill.Mandrill(key.mandrill.apiKey);

// Get list of emails
exports.email = function(req, res) {

  var message = {
    'subject': 'Your Percolate demo is ready!',
    'from_email': 'chuckmpierce@gmail.com',
    'from_name': 'Percolate',
    'text': 'Here is your demo!!!',
    'to': [{
            'email': req.body['Company Email'],
            'name': req.body['First Name'] + ' ' + req.body['Last Name'],
            'type': 'to'
          }],
    'headers': {
      'Reply-To': 'chuckmpierce@gmail.com'
    }
  };


  mandrill_client.messages.send({'message': message, 'async': false}, function(result) {
    console.log(result);
    res.send(result);
  }, function(e) {
    console.log('An error occurred: ' + e.name + ' - ' + e.message);
    res.send(404);
  });
};

// // Get a single email
// exports.show = function(req, res) {
//   Email.findById(req.params.id, function (err, email) {
//     if(err) { return handleError(res, err); }
//     if(!email) { return res.send(404); }
//     return res.json(email);
//   });
// };

// // Creates a new email in the DB.
// exports.create = function(req, res) {
//   Email.create(req.body, function(err, email) {
//     if(err) { return handleError(res, err); }
//     return res.json(201, email);
//   });
// };

// // Updates an existing email in the DB.
// exports.update = function(req, res) {
//   if(req.body._id) { delete req.body._id; }
//   Email.findById(req.params.id, function (err, email) {
//     if (err) { return handleError(res, err); }
//     if(!email) { return res.send(404); }
//     var updated = _.merge(email, req.body);
//     updated.save(function (err) {
//       if (err) { return handleError(res, err); }
//       return res.json(200, email);
//     });
//   });
// };

// // Deletes a email from the DB.
// exports.destroy = function(req, res) {
//   Email.findById(req.params.id, function (err, email) {
//     if(err) { return handleError(res, err); }
//     if(!email) { return res.send(404); }
//     email.remove(function(err) {
//       if(err) { return handleError(res, err); }
//       return res.send(204);
//     });
//   });
// };

function handleError(res, err) {
  return res.send(500, err);
}