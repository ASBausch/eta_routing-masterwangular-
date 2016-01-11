/**
 * Created by manadab on 1/10/16.
 */
var express = require('express');
//uses router method of express, a small subset of functionality only concerned with routing
var router = express.Router();
var path = require('path');


router.get("/*", function(req,res){
    var file = req.params[0] || "assets/views/index.html";
    res.sendFile(path.join(__dirname, "../public/", file));

});

module.exports = router;