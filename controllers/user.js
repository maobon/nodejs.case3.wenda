/**
 * Created by xinbob on 4/12/17.
 *
 * 控制器 - 用户
 */

var User = require('../models/user');

exports.showLogin = function (req, res) {
    res.render('login');
}

exports.doLogin = function (req, res) {

}

exports.showRegister = function (req, res) {
    res.render('register');
}

exports.doRegister = function (req, res) {

}