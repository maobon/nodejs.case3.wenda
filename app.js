/**
 * Created by xinbob on 4/12/17.
 *
 * 入口点
 */

var express = require('express');
var path = require('path');

var app = express();

// 开放静态资源
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')));
app.use('/public/', express.static(path.join(__dirname, './public/')));

// 配置ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views/'));

// test 中间件拦截住请求 测试下server是否工作正常
// app.get('/', function (req, res, next) {
//     res.render('index');
// })

// 侦听3000端口
app.listen(3000, function () {
    console.log('server is running...');
})