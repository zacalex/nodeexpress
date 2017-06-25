/**
 * Created by cal on 6/24/17.
 */

var express = require('express');
var router = express.Router();



router.get('/speakers',function (req,res) {
    var dataFile = req.app.get('appData');
    var info = '';

    dataFile.speakers.forEach(function (item) {

        info +='<li>' +
            '<h2>' + item.name +'</h2>' +
            '<img src="/images/speakers/'+item.shortname+'_tn.jpg" alt="speaker" >' +
            '<p>' + item.summary +'</p>' +
            '</li>'
    });
    res.send('<link rel="stylesheet" type="text/css" href="/css/style.css">'
        +'<h1>roux acadmy meetops</h1>' + info+
        '<script src="/reload/reload.js"></script> ');

});

router.get('/speakers/:speakerid',function (req,res) {
    var dataFile = req.app.get('appData');
    var speaker = dataFile.speakers[req.params.speakerid];

    res.send(
        '<link rel="stylesheet" type="text/css" href="/css/style.css">'+
        '<h1>' + speaker.title + '</h1>' +
        '<h2>with '+speaker.name+'</h2>' +
        '<img src="/images/speakers/'+speaker.shortname+'_tn.jpg" alt="speaker" >' +
        '<p>'+speaker.summary+'</p>'+
        '<script src="/reload/reload.js"></script> ');

});

module.exports = router;