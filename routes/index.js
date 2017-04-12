/**
 * Created by xinbob on 4/12/17.
 *
 * 路由 首页
 */

var express = require('express');
var router = express.Router(); // 路由实例

// 引入控制器模块
var indexController = require('../controllers/index');

// 配置路由 响应get请求 当为'/'时
router
    .get('/', indexController.showIndex);


module.exports = router;