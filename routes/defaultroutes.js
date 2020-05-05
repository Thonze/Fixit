const express = require('express')
const router = express.Router()
const defaultcontroller = require('../controller/defaultcontroller')
const nodemailer = require('nodemailer')
const mailer = require('../config/mailer')

const GMAIL_USER = process.env.GMAIL_USER
const GMAIL_PASS = process.env.GMAIL_PASS




router.route('/')
.get(defaultcontroller.index)


// POST route from contact form
router.post('/contact', (req, res) => {

    // Instantiate the SMTP server
    const smtpTrans = nodemailer.createTransport({
      host: 'Gmail',
      // port: 465,
      auth: {
        user: 'mosesthonze@gmail.com',
        pass: '55234304'
      }
    })
  
    // Specify what the email will look like
    const mailOpts = {
      from: 'Your sender info here', // This is ignored by Gmail
      to: 'mosesthonze@gmail.com',
      subject: 'New message from contact form at tylerkrys.ca',
      text: `${req.body.name} (${req.body.phoneNumber}) ${req.body.gender}  says: ${req.body.message}`
    }
  
    // Attempt to send the email
    smtpTrans.sendMail(mailOpts, (error, response) => {
      if (error) {
        console.log('contact-failure') // Show a page indicating failure
      }
      else {
        res.render('/') // Show a page indicating success
      }
    })
  })
  


// // POST route from contact form
// router.post('/contact', (req, res) => {

//     // Instantiate the SMTP server
//     const smtpTrans = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 465,
//       secure: true,
//       auth: {
//         user: 'mosesthonze@gmail.com',
//         pass: '55234304'
//       }
//     })
  
//     // Specify what the email will look like
//     const mailOpts = {
//       from: 'Your sender info here', // This is ignored by Gmail
//       to: 'mosesthonze@gmail.com',
//       subject: 'New message from contact form at tylerkrys.ca',
//       text: `${req.body.name} (${req.body.phoneNumber}) ${req.body.gender}  says: ${req.body.message}`
//     }
  
//     // Attempt to send the email
//     smtpTrans.sendMail(mailOpts, (error, response) => {
//       if (error) {
//         res.send('contact-failure') // Show a page indicating failure
//       }
//       else {
//         res.render('/') // Show a page indicating success
//       }
//     })
//   })
  







module.exports = router