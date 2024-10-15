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
const pizza = (req, res) => {
    res.render('pizza', { title: 'Pizza' });
   };
const continental = (req, res) => {
    res.render('continental', { title: 'Continental' });
   };
const italian = (req, res) => {
    res.render('italian', { title: 'Italian' });
   };
const sandwich = (req, res) => {
    res.render('sandwich', { title: 'Sandwich' });
   };
const beverages = (req, res) => {
    res.render('beverages', { title: 'Beverages' });
   };
module.exports = {
    about,
    menu,
    ambience,
    contact,
    pizza,
    continental,
    italian,
    sandwich,
    beverages
   };