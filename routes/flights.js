var express = require('express');
var router = express.Router();
const flightCtrl = require('../controllers/flights');

/* GET users listing. */
router.get('/new', flightCtrl.new)
router.get('/', flightCtrl.index );


module.exports = router;
