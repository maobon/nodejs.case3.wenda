/**
 * Created by xinbob on 4/12/17.
 *
 * 路由 首页
 */

var express = require('express');
var router = express.Router();

var indexController = require('../controllers/index');

router
    .get('/', indexController.showIndex);


module.exports = router;