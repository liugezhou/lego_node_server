/**
 *@description prd-dev配置
 *@author   liugezhou
 */

const devConf = require('./dev')

// 修改redis连接配置
Object.assign(devConf.redisConf, {
    host: 'editor-redis',
})

// 修改mysql连接配置
Object.assign(devConf.mysqlConf, {
    host: 'editor-mysql',
})

// 修改mongo连接配置
Object.assign(devConf.mongodbConf, {
    host: 'editor-mongo',
})
// 发不出来的H5域名
devConf.h5Origin = 'http://182.92.168.192:8082'
module.exports = devConf
