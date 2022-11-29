const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight
};

function newFlight(req, res){
    res.render('flights/new');
}

function index(req, res){    
    Flight.find({}, function(err, flightDocs){
        console.log(flightDocs);
        res.render('flights/index', {flights: flightDocs});
    });
    
};