/**
 * Created by xinbob on 4/12/17.
 *
 * 路由 用户
 */

var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');

router
    .get('/login', userController.showLogin) // 展示登录页
    .post('/login', userController.doLogin)  // 执行登录操作

    .get('/register', userController.showRegister)  // 展示注册页面
    .post('/register', userController.doRegister)   // 执行注册操作


module.exports = router;