const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const keys = require('../config/keys.js');
const User = require('../models/User');
const db = require('./config/keys').mongoURI;
const routes = require('./routes/users');
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

mongoose.connect(db, {useNewURLParser: true})
  .then(() => {console.log("Sucessfully connected to database")})
  .catch((err) => {console.error(err)})

app.use(require('express-session')({
  secret: 'hallelujah',
  resave: false,
  saveUninitialized: false
})
)

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/users', users);

app.listen(3000, () => {
  console.log("Listening on port 3000");
})
