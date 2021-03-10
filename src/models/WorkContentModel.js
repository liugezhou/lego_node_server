/**
 * @description 作品内容 Model ，存储到 Mongodb
 * @author liugezhou
 */

const mongoose = require('../db/mongoose')

// 两个 model 公用一个 schema
const contentSchema = mongoose.Schema(
    {
        // 页面的组件列表
        components: [Object],
        // 页面的属性，如页面背景图片
        props: Object,
        // 配置信息，如微信分享配置
        setting: Object,
    },
    { timestamps: true }
)

// 未发布的内容
const WorkContentModel = mongoose.model('workContent', contentSchema)

// 发布的内容
const WorkPublishContentModel = mongoose.model('workPublishContent', contentSchema)

module.exports = {
    WorkContentModel,
    WorkPublishContentModel,
}
