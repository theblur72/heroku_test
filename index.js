var bodyParser = require('body-parser');
//express을 사용한 서버 생성
var express = require('express');
var app = express();
//베포하기위해 수정, env가 heroku랑 연결되는 포트임.
const PORT = process.env.PORT||3000;
app.use(bodyParser.urlencoded({ extended:true }));
var router = require('./router/main')(app);
var db = require('./db');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//해당 포트에서 서버 실행
var server = app.listen(PORT, function(){
    console.log("server has started on port " + PORT)
})