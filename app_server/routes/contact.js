// routes/contact.js
var express = require('express');
var router = express.Router();

// GET request to render the contact page
router.get('/', (req, res) => {
  res.render('contact'); // Ensure this matches your view engine setup
});

// POST request to handle form submission
router.post('/', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Log the submitted data to the console
  console.log(`Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);

  // Redirect back to the contact page (this effectively reloads the page)
  res.redirect('/contact'); // Redirect to the contact page after submission
});

module.exports = router;
