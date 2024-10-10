var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', (req, res) => {
  res.render('contact'); // Render the contact page
});

router.post('/', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  console.log(`Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);

  // Redirect back to the contact page or wherever you'd like
  res.redirect('/contact');
});

module.exports = router;
