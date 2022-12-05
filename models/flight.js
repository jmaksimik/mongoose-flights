const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: Date
});



const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    flightNo: {
        type: Number,
        minLength: 10,
        maxLength: 9999
    },
    departs: {
        type: Date,
        default: function () {
            let currentDay = new Date();
            let yearLater = currentDay.setFullYear(currentDay.getFullYear() + 1);
            return yearLater.toString().slice(0, 16);

        }
    },
    destinations: [destinationSchema]
});

 module.exports = mongoose.model('Flight', flightSchema)


