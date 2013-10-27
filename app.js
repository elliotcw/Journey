'use strict';

var express = require('express'),
  app = express(),
  oneDay = 86400000;

app.use(express.compress());

app.use(express.static(__dirname + '/public/dist', {
  maxAge: oneDay
}));


app.get('/api/XML_TRIP_REQUEST2', function(req, res) {
  
  // Require them here as only used for api requests
  var request = require('request'),
    url = require('url'),
    xmljson = require('xmljson');

  // Create a url object from the one passed in
  var urlParts = url.parse(req.url, true);

  // Pull out the query string and create the
  // TFL url to fetch the data.
  var tflUrl = url.format({
    host: 'jpapi.tfl.gov.uk',
    pathname: '/api/XML_TRIP_REQUEST2',
    protocol: 'http:',
    query: urlParts.query
  });

  // Fire off the request
  request.get({url: tflUrl}, function(e, r, body) {

    // return a json response
    xmljson.to_json(body, function(error, data) {
      res.send(error || data);
    });
  });
});

app.listen(process.env.PORT || 3000);