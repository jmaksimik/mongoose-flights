const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show
};

function show(req, res){
    Flight.findById(req.params.id, function(err, flightDoc){
        console.log(flightDoc)
        flightDoc.destinations.sort(function (a, b){
            return new Date(a.arrival) - new Date(b.arrival)
        }); 
        Ticket.find({flight: flightDoc._id}, function(err, ticketDocs){
            console.log(ticketDocs, '<- ticket var' );
            res.render('flights/show', 
            {flight: flightDoc, tickets: ticketDocs}); 
        }) 
    }); 
};

function create(req, res){
    console.log(req.body);
    if(req.body.departs === ''){
        delete req.body.departs
    }
    Flight.create(req.body, function(err, flightDoc){
        if(err){
            console.log(err);
            return res.send('error in creating; check the terminal');
        };
        console.log(flightDoc);
        res.redirect('/flights');
    });
}

function newFlight(req, res){
    res.render('flights/new');
}

function index(req, res){    
    Flight.find({}, function(err, flightDocs){
        // console.log(flightDocs);
        res.render('flights/index', {flights: flightDocs});
    });
};