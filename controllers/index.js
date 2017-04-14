/**
 * Created by xinbob on 4/12/17.
 *
 * 控制器 - 首页
 */

exports.showIndex = function (req, res) {
    // ejs渲染
    res.render('index', {
        // 根据客户端请求的SESSID 查询服务端本地储存对应SESS_ID的用户属性
        // 是否已经登录
        isLogin: req.session.isLogin
    });
}