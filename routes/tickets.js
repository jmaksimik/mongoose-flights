const express = require('express');
const router = express.Router();
const ticketCtrl = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketCtrl.new);
router.post('/flights/:id/tickets', ticketCtrl.create);
// router.post('/flights/:id', ticketCtrl.ticketAdd);


module.exports = router;