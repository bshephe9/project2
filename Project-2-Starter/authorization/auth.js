// Required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');
var cookieSession = require('cookie-session');
require('dotenv').config();


app.set('port', (process.env.PORT || 8000));
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
//set up view engine
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// cookieSession config
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
    name: 'session',
    keys: process.env.COOKIE_KEY,
}));

app.use(passport.initialize()); // Used to initialize passport
app.use(passport.session()); // Used to persist login sessions
