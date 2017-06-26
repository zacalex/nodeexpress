
var express = require('express');
var reload  = require('reload');
var app = express();
var dataFile = require('./data/data.json');
var io = require('socket.io')();

app.set('port',process.env.PORT || 8081);
app.set('appData',dataFile);
app.set('view engine','ejs');
app.set('views','./views');

app.locals.siteTitle = 'Roux meetups';
app.locals.allSpeakers = dataFile.speakers;

app.use(express.static('./public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));



var sever = app.listen(8081,function () {
    console.log('LISTENING ON http://127.0.0.1:' + app.get('port')+'/');
    console.log('LISTENING ON http://127.0.0.1:' + app.get('port')+'/speakers');
});

io.attach(sever);
io.on('connection',function (socket) {
    console.log('user connected');
    socket.on('postMessage',function (data) {
        io.emit('updateMessages',data);
    });
})

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