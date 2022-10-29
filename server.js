const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const defaultroute = require('./routes/defaultroutes')
const nodemailer = require('nodemailer')
// const {globalVariables} = require('./config/configuration')
const flash = require('connect-flash');
const session = require('express-session')
const PORT = process.env.PORT || 4008

const app = express()



//configure express
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))


// Setup View Engine to use EJS
app.set("views", path.join(__dirname, "./views"));
app.set("views engine", "ejs");

//Routes configuration
app.use('/', defaultroute)

// global variable
app.use(flash());
// app.use(globalVariables);

//Setup Flash and Session
app.use(session({
    secret:"NJSNndjkndjkn&*H(JN46647dcbbcj",
    saveUninitialized: true,
    resave: true,
    cookie: {maxAge: 3600000} //1 Hour Expiration
  }));



app.listen
(PORT, (req,res) => {
    console.log('server is runing')
})