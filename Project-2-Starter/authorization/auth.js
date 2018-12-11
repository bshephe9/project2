// Required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');
var cookieSession = require('cookie-session');
require('dotenv').config();