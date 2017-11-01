# 使用express配合rap配置vue本地开发环境

## 前言

　　近期在做 vue 单页项目，采用的开发方式是前后端分离的模式。后端只提供接口，前端负责数据获取与展现，接口文档写在 [rap](http://rapapi.org/org/index.do) 上，它是一个可视化接口管理工具 通过分析接口结构，动态生成模拟数据，校验真实接口正确性， 围绕接口定义，通过一系列自动化工具提升我们的协作效率。
  
　　基础的vue项目结构是用 vue-cli 脚手架生成的，在 config 文件夹中新增了一个请求代理配置文件 proxy-config.js 。

　　在 rep_server 文件夹的 config-rap.js 文件中配置项目ID => projectId,rap项目ID获取如下：

![](https://raw.githubusercontent.com/Guoch0526/Guoch0526.github.io/master/images/rap-projectId.png)

## 技术点

　　node + express + vue

## 总体描述

- 接口统一管理
- 支持跨域访问
- mock 数据与测试环境分离


## 项目运行
``` bash
　　git clone https://github.com/Guoch0526/vue-mock-demo.git

　　cd vue-mock-demo

　　npm install

　　// 安装好依赖之后,找到 rap_server 文件夹中的 config-rap.js, 替换为你的rap项目基本配置
  
　　// 接口统一写在 src/api-irls/index.js 中, 接着：

　　npm run start

　　大功告成
```

## 项目总体结构

``` txt
├── build                                       // webpack配置文件
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
```
