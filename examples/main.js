/*
 * @Author: your name
 * @Date: 2021-05-06 11:18:22
 * @LastEditTime: 2021-05-28 18:50:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-beautiful-template-master/example/main.js
 */

import Vue from 'vue'
import vueConfig from '../vue.config'
import App from './App.vue'
import videoPlayer from '../packages/VideoPlayer/index.js'

Vue.component('VideoPlayer', videoPlayer)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
