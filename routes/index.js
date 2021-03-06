/**
 * Created by cal on 6/24/17.
 */

var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {

    // res.send('<link rel="stylesheet" type="text/css" href="/css/style.css">' +
    //     '<h1>Welcome</h1>' +
    //     '<img src="/images/misc/background.jpg" alt="background" style="height: 300px;">' +
    //     '<p>Roux Academy Meetups put together artists from all walks of life</p>' +
    //     '<script src="/reload/reload.js"></script> ');
    var data = req.app.get('appData');
    var pagePhotos = [];
    var pageSpeakers = data.speakers;
    data.speakers.forEach(function (item){
        pagePhotos = pagePhotos.concat(item.artwork)
    } )
    res.render('index',{
        pageTitle: 'Home',
        artwork :  pagePhotos,
        pageID: 'home',
        speakers :  pageSpeakers
    });

});

module.exports = router;