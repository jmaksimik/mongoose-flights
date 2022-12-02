const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
};

function create(req, res) {
    req.body.flight = req.params.id;
    console.log(req.body, req.params.id, '<- ticket info')
    Ticket.create(req.body, function(err, ticketDoc){
        res.redirect(`/flights/${req.params.id}`)
    })
}

function newTicket (req, res){
    res.render('tickets/new', {flight: req.params.id});
}
