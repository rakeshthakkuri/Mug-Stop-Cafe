/* GET 'about' page */
const about = (req, res) => {
    res.render('generic-text', { title: 'About' });
   };
const menu = (req, res) => {
    res.render('menu', { title: 'Menu' });
   };
const ambience = (req, res) => {
    res.render('ambience', { title: 'Ambience' });
   };
const contact = (req, res) => {
    res.render('contact', { title: 'Contact US' });
   };
module.exports = {
    about,
    menu,
    ambience,
    contact
   };