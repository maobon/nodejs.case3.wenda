/**
 * Created by xinbob on 4/12/17.
 *
 * 入口点
 */

var express = require('express');
var path = require('path');

// 引入自己的路由模块
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');

var app = express();

// 开放静态资源
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')));
app.use('/public/', express.static(path.join(__dirname, './public/')));

// 配置ejs模板引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views/'));

// 设置路由
app.use(indexRouter);
app.use(userRouter);

// 侦听3000端口
app.listen(3000, function () {
    console.log('server is running...');
})