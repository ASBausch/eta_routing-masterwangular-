var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var kitty = require('./routes/kitties');

app.set("port", process.env.PORT || 5000);

//database stuff

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var mongoURI = 'mongodb://localhost:27017/kitty_set';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.once('open', function(err){
    if(err){
        console.log('Error: ', err);
    }
    console.log('Mongo Connection Open');
});

app.use('/kitties', kitty);
app.use('/', index);

app.listen(app.get('port'), function(){
    //get whatever port has been set so that it works for any port set out of express
    //test to see if it runs
    console.log('Listening on port: ', app.get('port'));
});

module.exports = app;