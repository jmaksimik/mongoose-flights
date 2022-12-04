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
        //console.log(flightDoc)
        console.log(flightDoc.destinations)
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
    const newFlight = new Flight();
    const dt = newFlight.departs;
    const departsDate = dt.toISOString().slice(0, 16);

    res.render('flights/new', {departsDate});
}

function index(req, res){    
    Flight.find({}, function(err, flightDocs){
        res.render('flights/index', {flights: flightDocs});
    });
};