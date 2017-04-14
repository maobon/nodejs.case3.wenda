/**
 * Created by xinbob on 4/12/17.
 *
 * 控制器 - 首页
 */

exports.showIndex = function (req, res) {
    res.render('index', {
        isLogin: req.session.isLogin
    });
}