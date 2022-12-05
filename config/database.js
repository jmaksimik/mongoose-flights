const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/finalFlights', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("connected", function(){
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on("error", function(err){
    console.log(`There was an ${err}`);
});