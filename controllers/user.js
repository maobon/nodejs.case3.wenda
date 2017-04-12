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

    var body = req.body;

    // model.findOne().then()
    // mongoose 查库的语法
    User
        .findOne({email: body.email}) // 根据邮箱查用户全部信息
        .then(function (doc) {
            if (!doc) {
                // 无该用户信息
                res.json({
                    err_code: 2001,
                    message: '登录失败'
                })

            } else {
                // 查到该用户信息
                if (doc.password !== body.password) {
                    // 提交的登录密码 与 数据库中保存的密码不一致
                    res.json({
                        err_code: 2001,
                        message: '登录失败'
                    })

                } else {
                    // 1. 分配 session_id
                    // 2. 返回给客户端登录成功
                    res.json({
                        err_code: 0
                    })

                }
            }
        })


}

exports.showRegister = function (req, res) {
    res.render('register');
}

exports.doRegister = function (req, res) {

    var body = req.body;

    User
        .findOne({email: body.email}) // 根据email查询用户的信息
        .then(function (doc) {

            if (doc) {
                // 如果存在 则表示已使用过该邮箱注册过
                res.json({
                    err_code: 1001,
                    message: '该用户名已被注册'
                })

            } else {
                // 不存在 则未查询到相关信息
                // return 一个promise对象
                return new User(body).save()
            }
        })

        .then(function (user) {
            // 接收上一个 函数的返回值
            if (user) {
                res.json({
                    err_code: 0
                })
            }
        })
        .catch(function (err) {
            res.json({
                err_code: 500,
                message: err.message
            })
        })

}