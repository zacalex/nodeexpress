/**
 * Created by cal on 6/25/17.
 */

var express = require('express');
var router = express.Router();
var feedback = require('../data/feedback.json');
var bodyParser = require('body-parser');
var fs = require('fs');

router.get('/api',function (req,res) {
    res.json(feedback);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));


router.post('/api',function (req,res) {
    feedback.unshift(req.body);
    fs.writeFile('./data/feedback.json',JSON.stringify(feedback),'utf8',function (err) {
        console.log(err);
    });
    res.json(feedback);
});
router.delete('/api/:id',function (req,res) {
    feedback.splice(req.params.id,1);
    fs.writeFile('./data/feedback.json',JSON.stringify(feedback),'utf8',function (err) {
        console.log(err);
    });
    res.json(feedback);
});

module.exports = router;