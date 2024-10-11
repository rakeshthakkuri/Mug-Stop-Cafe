/* GET 'home' page */
const homelist = (req, res) => {
    res.render('home', {
    title: 'CAFÈ ',
    pageHeader: {
    title: 'CAFÈ Shop',
    //strapline: 'Find places to work with wifi near you!'
    },
    locations: [{
    name: 'Mug Stop Cafè',
    address: 'Plot 42-44, Serial 8, 19-22, Gachibowli, Hyderabad',
    rating: 3,
    facilities: ['Continental', ' Italian', 'Sandwich', 'Pizza', 'Beverages'],
    distance: '2.6KM From Gachibowli'
     }
]
});
};
   /* GET 'Location info' page */
   const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info' });
   };
   /* GET 'Add review' page */
   const addReview = (req, res) => {
    res.render('review', { title: 'Add review' });
   };
   
   module.exports = {
    homelist,
    locationInfo,
    addReview
   };