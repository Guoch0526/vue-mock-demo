/**
 * url   : 接口请求地址(和rap上地址统一)
 * method: 接口请求方法, 默认为 post (可不填)   < get, post, delete, put >
 * title : 接口描述
 */

const apiUrls = {
  getRapData: {
    path: '/user/getRapData',
    title: '获取rap数据',
    method: 'post'
  }
}

module.exports = apiUrls
