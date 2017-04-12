/**
 * Created by xinbob on 4/12/17.
 *
 * 入口点
 */

var path = require('path');
var express = require('express');

var bodyParser = require('body-parser');

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

// 配置解析表单 POST 请求体数据中间件
// 该中间件会为 req 请求对象提供一个 body 属性用来获取表单 POST 请求体数据
app.use(bodyParser.urlencoded({extended: false}));

// 设置路由
app.use(indexRouter);
app.use(userRouter);

// 侦听3000端口
app.listen(3000, function () {
    console.log('server is running...');
})