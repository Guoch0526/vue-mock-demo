var express = require('express')
var app = express()
var config = require('./config-path.js')
config(app)

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})