var apiUrls = require('../src/api-urls/index.js')

var configRap = {
  base: {
    projectId: '28279',          // 项目ID，默认请参见config
    port: 80,                    // 端口，默认请参见config
    host: 'rapapi.org',          // 主机，默认请参见config
    mock: '/mockjsdata/'         // 返回mock json 数据
  },
  urls: []
}

var arrUrls = []
Object.keys(apiUrls).forEach(item => {
  arrUrls.push({
    path: apiUrls[item].path
  })
})
configRap.urls = configRap.urls.concat(arrUrls)

module.exports = configRap
