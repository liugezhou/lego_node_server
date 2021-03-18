/**
 * @description 检查数据库连接
 * @author liugezhou
 */

const { get } = require('./_server')

test('数据库连接', async () => {
    const { data, errno } = await get('/api/db-check')
    const { redisConn, mysqlConn, mongodbConn } = data

    expect(redisConn).toBe(true)
    expect(errno).toBe(0)
    expect(mysqlConn).toBe(true)
    expect(mongodbConn).toBe(true)
})
