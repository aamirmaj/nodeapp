// server.js

// modules ================================

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var db = require('./config/db'); //db.url calls any items inside
var port = process.env.PORT || 8080;

// parse app/json
app.use(bodyParser.json());

//parse vnd.api+json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// parse x-www-form
app.use(bodyParser.urlencoded({extended: true}));

// override
app.use(methodOverride('X-HTTP-Method-Override'));

// set static files location /public/img, /img for users
app.use(express.static(__dirname + '/public'));

// routes
require('./app/routes')(app); // config routes

// start app at localhost
app.listen(port);

// shout to user
console.log('Running on port ' + port);

// expose app
exports = module.exports = app;
