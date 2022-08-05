/*
 * @Author: your name
 * @Date: 2021-05-06 11:18:22
 * @LastEditTime: 2022-08-05 11:21:03
 * @LastEditors: zhengzhangxu 452436275@qq.com
 * @Description: In User Settings Edit
 * @FilePath: /vue-beautiful-template-master/example/main.js
 */

import Vue from 'vue'
import vueConfig from '../vue.config'
import App from './App.vue'
import { videoPlayer } from '../packages/VideoPlayer/index.js'
console.log('🚀 ~ file: main.js ~ line 14 ~ VueVideoPlayer', videoPlayer)

Vue.component('VideoPlayer', videoPlayer)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
