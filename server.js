const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const defaultroute = require('./routes/defaultroutes')

const app = express()



//configure express
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Setup View Engine to use EJS
app.set("views", path.join(__dirname, "./views"));
app.set("views engine", "ejs");

//Routes configuration
app.use('/', defaultroute)

app.listen
(8000, (req,res) => {
    console.log('server is runing')
})