/**
 * Created by cal on 6/25/17.
 */

var express = require('express');
var router = express.Router();

router.get('/chat',function (req,res) {

    res.render('chat',{
        pageTitle: 'Chat',
        pageID: 'chat'
    });

});

module.exports = router;