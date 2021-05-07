/*
 * @Author: your name
 * @Date: 2021-05-06 11:18:22
 * @LastEditTime: 2021-05-06 11:22:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-beautiful-template-master/example/main.js
 */

import Vue from 'vue'
import vueConfig from '../vue.config'
import App from './App.vue'
import ImgSwiper from '../packages/fly-img-swiper/src/index.vue'

Vue.component('img-swiper', ImgSwiper)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
