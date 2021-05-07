/*
 * @Author: your name
 * @Date: 2021-05-06 11:17:26
 * @LastEditTime: 2021-05-07 16:32:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-beautiful-template-master/vue.config.js
 */
module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  },
  css: {
    extract: false // 绑定css样式
  }
}
