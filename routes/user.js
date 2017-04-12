/**
 * Created by xinbob on 4/12/17.
 *
 * 路由 用户
 */

var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');

router
    .get('/login', userController.showLogin)
    .post('/login', userController.doLogin)

    .get('/register', userController.showRegister)
    .post('/register', userController.doRegister)


module.exports = router;