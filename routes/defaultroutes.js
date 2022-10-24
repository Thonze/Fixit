const express = require('express')
const router = express.Router()
const defaultcontroller = require('../controller/defaultcontroller')
const nodemailer = require('nodemailer')
const mailer = require('../config/mailer')
const flash = require('connect-flash')

const GMAIL_USER = process.env.GMAIL_USER
const GMAIL_PASS = process.env.GMAIL_PASS




router.route('/')
.get(defaultcontroller.index)


// POST route from contact form
router.post('/contact', (req, res) => {

    // Instantiate the SMTP server
    const smtpTrans = nodemailer.createTransport({
      service: 'Gmail',
      // port: 465,
      auth: {
        user: 'mosesthonze@gmail.com',
        pass: '55234304'
      }
    })
  
    // Specify what the email will look like
    const mailOpts = {
      to: 'mosesthonze@gmail.com',
      from: 'fixit.com', // This is ignored by Gmail
      subject: 'New message from contact form at Fixit.com',
      text: `Hi my name is ${req.body.name}  ,  ${req.body.message}
              Gender:(${req.body.gender}) 
             Here is my phone number: ${req.body.PhoneNumber}
             
             `
    }
  
    // Attempt to send the email
    smtpTrans.sendMail(mailOpts, (error, response) => {
      if (error) {
        console.log(error) // Show a page indicating failure
      }
      else {
        console.log('mail sent')
        // req.flash('success-message', 'project added successfully')
        res.redirect('/') // Show a page indicating success
      }
    })
  })
  







module.exports = router