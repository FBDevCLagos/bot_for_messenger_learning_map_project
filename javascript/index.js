'use strict';
const express = require('express');
const bodyParser = require('body-parser');

// The rest of the code implements the routes for our Express server.
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Webhook validation
app.get('/webhook', function(req, res) {
    // replace <VERIFY_TOKEN> here with the verify token you specified on messenger dashboard
    if (req.query['hub.mode'] === 'subscribe' &&
        req.query['hub.verify_token'] === '<VERIFY_TOKEN>') {
        res.status(200).send(req.query['hub.challenge']);
    } else {
        res.send('Error, wrong validation token');  
    }
});

// Set Express to listen out for HTTP requests
var server = app.listen(process.env.PORT || 3000, function () {
  console.log("Listening on port %s", server.address().port);
});