### Intruduce
> 慕课网的一门付费课程，老师讲课逻辑混乱，啰里八嗦，是我最大的感受。    
> 好好弄懂这个项目的细节是我的追求。    
> koa2框架搭建的一套后端管理，项目是在开源代码中done下来后，跟随课程内容的部分代码修改。


### 配置
> src/config/envs/dev.js:这里配置了mysql、redies、mongodb三大数据库的本地信息。 
> 测试mysql连接： node src/db/mysql2.js     
> 测试sequelize连接mysql： node src/db/seq/utils/conn-test.js   
> src/db/seq/utils/sync-alter.js：此文件为同步model至数据库。   
> 测试mongoose连接：node src/db/mongoose.js
