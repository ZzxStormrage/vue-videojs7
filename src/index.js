/*
 * @Author: your name
 * @Date: 2021-05-06 11:16:17
 * @LastEditTime: 2021-05-06 11:16:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-beautiful-template-master/src/index.js
 */
// 读取packages目录下的文件
const modulesFiles = require.context('./packages', true, /\.js$/)

// 定义 install 方法
const install = function(Vue) {
  if (install.installed) return
  install.installed = true
  // 遍历modulesFiles，并注册到vue实例中，名是组件内default.name
  modulesFiles.keys().reduce((modules, modulePath) => {
    const value = modulesFiles(modulePath)
    Vue.component(value.default.name, value.default || value)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }
