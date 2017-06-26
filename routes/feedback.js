/**
 * Created by cal on 6/24/17.
 */

var express = require('express');
var router = express.Router();

router.get('/feedback',function (req,res) {

    // res.send('<link rel="stylesheet" type="text/css" href="/css/style.css">' +
    //     '<h1>Welcome</h1>' +
    //     '<img src="/images/misc/background.jpg" alt="background" style="height: 300px;">' +
    //     '<p>Roux Academy Meetups put together artists from all walks of life</p>' +
    //     '<script src="/reload/reload.js"></script> ');

    res.render('feedback',{
        pageTitle: 'Feedback',
        pageID: 'feedback'
    });

});

module.exports = router;