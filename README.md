# 使用express配置vue本地开发环境

## 前言

　　近期在做 vue 单页项目，采用的开发方式是前后端分离的模式。后端只提供接口，前端负责数据获取与展现，接口文档写在 [rap](http://rapapi.org/org/index.do) 上。不得不说现在这种开发方式大大提高了我们程序猿的效率。

## 技术点

　　node + express + vue

## 总体描述

- [x] 接口统一管理
- [x] 支持跨域访问
- [x] mock 数据与测试环境分离


## 项目运行
```txt
　　git clone https://github.com/Guoch0526/vue-rap-demo.git

　　cd vue-rap-demo

　　npm install

　　// 安装好依赖之后,找到 rap_server 文件夹中的 config-rap.js, 替换为你的rap项目基本配置
  
　　// 接口统一写在 src/api-irls/index.js 中, 接着：

　　npm run start

　　大功告成!
```txt

## 项目总体结构

```txt
├── build                                       // webpack配置文件
├── config                                      // 项目(代理)配置
├── rap_server                                  // rap服务器配置
├── src                                         // 资源目录
│   ├── api-urls                                // 接口配置
│   ├── assets                                  // 公共资源
│   ├── components                              // 组件
│   ├── router                                  // 页面路由
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序主入口
├── package.json                                // 包
├── index.html                                  // 入口html文件
```txt
