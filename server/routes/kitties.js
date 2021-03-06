/**
 * Created by manadab on 1/10/16.
 */
var express = require('express');
var router = express.Router();
var Kitty = require('../models/kittyNames');
var mongoose = require('mongoose');

router.post('/', function(req, res) {
    var kitty = new Kitty ({ kittyName: req.body.kittyName });
    kitty.save(function(err){
        if(err) console.log('meow %s', err);
    });
});

router.get('/', function(req, res) {
    return Kitty.find({
    //kittyName: {$exists: true}
}).exec(function(err, kitties){
        if(err) throw new Error(err);
        //turns our mongo data into a usable jSon object
        var data = JSON.stringify(kitties);
        res.send(data);
        console.log(data);
    });
});


module.exports = router;