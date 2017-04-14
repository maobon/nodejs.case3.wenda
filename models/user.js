/**
 * Created by xinbob on 4/12/17.
 *
 * 业务层 操作数据库
 * 使用第三方mongoose处理 nodejs处理连接mongodb
 * CRUD 增删改查操作
 */

var mongoose = require('mongoose');

// 更换 mongoose 的Promise库为node原生的promise库
mongoose.Promise = global.Promise;

// 链接mongoDB数据库 库名称wenda
mongoose.connect('mongodb://localhost/wenda');

// 设定 users 集合的协议
var userSchema = mongoose.Schema({
    // 用户名
    email: {
        type: String,
        required: true
    },
    // 密码
    password: {
        type: String,
        required: true
    },
    // 昵称
    nickname: {
        type: String,
        required: true
    },
    // 头像
    avatar: {
        type: String,
        default: 'avatar-max-img.png'
    },
    // 创建时间
    create_time: {
        type: Date,
        default: Date.now
    },
    // 上次修改时间
    last_modified: {
        type: Date,
        default: Date.now
    }
})

// 发布 userSchema协议为模型 User 用于操作具体数据库
// 并将模型导出
module.exports = mongoose.model('User', userSchema);