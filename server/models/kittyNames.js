/**
 * Created by manadab on 1/10/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//helper just to shorten code

var KittySchema = new Schema({
    kittyName: 'String'
});
//new mongoose object
//with key value pairs of types


//module.exports = mongoose.model('kitty_set', KittySchema);
//telling us this is in our database and how we save it
var Kitty = mongoose.model('kitty_set', KittySchema);
module.exports = Kitty;