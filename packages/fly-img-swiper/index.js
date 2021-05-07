/*
 * @Author: your name
 * @Date: 2021-05-07 12:03:09
 * @LastEditTime: 2021-05-07 12:03:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-beautiful-template-master/packages/fly-img-swiper/src/index.js
 */
// 导入组件，组件必须声明 name
import flyImgSwiper from './index.vue'

// 为组件提供 install 安装方法，供按需引入
flyImgSwiper.install = function(Vue) {
  Vue.component(flyImgSwiper.name, flyImgSwiper)
}

// 默认导出组件
export default flyImgSwiper
