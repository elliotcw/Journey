'use strict';

var express = require('express'),
  app = express(),
  oneDay = 86400000;

app.use(express.compress());

app.use(express.static(__dirname + '/public/dist', { maxAge: oneDay }));

app.listen(process.env.PORT || 3000);