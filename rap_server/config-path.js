var configRap  = require('./config-rap.js')
var rapnode    = require('rap-node-plugin')
var bodyParser = require('body-parser')
var qs         = require('querystring')
var axios      = require('axios')
var util       = require('util')

rapnode.config(configRap.base)                // 应用 rap 接口基础配置
global.RAP_FLAG = 1                           // 全局 rap 设置: 1 => 开启  0 => 关闭

var backEndUrl = 'https://www.ceshi.com'      // 测试服地址

// 请求拦截
axios.interceptors.request.use(cfg => {
  if (typeof (cfg.data) !== 'string') {
    cfg.data = qs.stringify(cfg.data)
  }
  console.log('请求的数据：')
  console.log(cfg.data)
  return cfg
})

// 响应拦截
axios.interceptors.response.use(function (response) {
  console.log(`响应的数据：[${response.config.url}]`)
  console.log(response.data)
  return response
})

// 请求 url 处理
var getMethodName = function (rapUrl) {
  if (!rapUrl || typeof (rapUrl) !== 'string') {
    return ''
  }
  var method = rapUrl.replace(/\//g, '.')
  if (method.substr(0, 1) === '.') {
    method = method.substring(1)
  }
  return method
}

// 应用级中间件 设置响应头 以支持跨域
// 没有挂载具体路径，每个请求都会执行该中间件
var config_middle = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type")
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    if (req.method === 'OPTIONS') {
      res.end()
    } else {
      next()
    }
  })
}

var config_path = function (app) {
  // 输出每个请求的 method, originalUrl, body
  app.use(function (req, res, next) {
    util.log(`[RAP SERVER] ${req.method} ${req.originalUrl} ${JSON.stringify(req.body)}`)
    next()
  })

  // 对每个接口请求进行处理
  configRap.urls.forEach(function (item) {
    app.all(item.path, (req, res) => {
      var url = item.path
      // 请求测试服数据
      if (global.RAP_FLAG !== 1) {
        var method = getMethodName(url)
        axios.post(backEndUrl + '/callapi?method=' + method, req.body)
          .then(response => {
            // 在这里可以对获取的数据进行一个处理，或者直接传给客户端
            res.json(response.data)
          })
          .catch(err => {
            console.log(err)
            res.status(500).send('error')
          })
      } else {
        // 请求 rap 中 mock 数据
        rapnode.getRapData(url, (err, data) => {
          data.error = data.error === 'null' ? null : data.error
          res.json(data)
        })
      }
    })
  })
}

var config = function (app) {
  // 解析 application/json
  app.use(bodyParser.json())
  // 解析 application/x-www-form-urlencoded
  // extended - 当设置为false时，会使用querystring库解析URL编码的数据；
  //            当设置为true时，会使用qs库解析URL编码的数据。后没有指定编码时，使用此编码。默认为true
  app.use(bodyParser.urlencoded({ extended: true }))
  config_middle(app)
  config_path(app)
}

module.exports = config
