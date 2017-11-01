var apiUrls = require('../src/api-urls/index.js');
var proxy = {
  defaultTarget: 'http://127.0.0.1:8088',
  items: []
}
var nameUrls = []

Object.keys(apiUrls).forEach(function (item) {
  var itemArr = apiUrls[item].path.split('/')
  var name = itemArr[0] || itemArr[1]
  if (nameUrls.indexOf(name) === -1) {
    nameUrls.push('/' + name)
  }
})

nameUrls.forEach(function (item) {
  proxy.items.push({
    name: item
  })
})

const proxyConfig = (function () {
  var obj = {}
  proxy.items.forEach(function (item) {
    obj[item.name] = item.target ? {
      target: item.target,
      changeOrigin: true,
      secure: false
    } : {
      target: proxy.defaultTarget,
      changeOrigin: true,
      secure: false
    }
    
    obj[item.name].pathRewrite = {}
    obj[item.name].pathRewrite[item.name] = item.name       // 代理地址替换标识
  })
  return obj
})()

module.exports = proxyConfig
