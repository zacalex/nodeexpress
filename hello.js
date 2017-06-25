
var express = require('express');
var reload  = require('reload');
var app = express();
var dataFile = require('./data/data.json');

app.set('port',process.env.PORT || 8888);
app.set('appData',dataFile);
app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('./public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));


var sever = app.listen(8888,function () {
    console.log('LISTENING ON http://127.0.0.1:' + app.get('port')+'/');
    console.log('LISTENING ON http://127.0.0.1:' + app.get('port')+'/speakers');
});

reload(sever,app);

// /**
//  * Created by cal on 6/18/17.
//  */
// var http = require('http');
//
// var myServer = http.createServer(function (request, response) {
//     response.writeHead(200,{"Content_Type" : "text/html"});
//     response.write('<h1>Roux Meetups</h1>');
//     response.end();
// }).listen(8888);
//
//
// // http.createServer(function (request, response) {
// //
// //     // 发送 HTTP 头部
// //     // HTTP 状态值: 200 : OK
// //     // 内容类型: text/plain
// //     response.writeHead(200, {'Content-Type': 'text/plain'});
// //
// //     // 发送响应数据 "Hello World"
// //     response.write("here i am");
// //     response.end('Hello World\n');
// // }).listen(8888);
//
// // 终端打印如下信息
// console.log('Server running at http://127.0.0.1:8888/');