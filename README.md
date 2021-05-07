<!--
 * @Author: your name
 * @Date: 2021-05-07 16:29:33
 * @LastEditTime: 2021-05-07 16:52:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fly-img-swiper/README.md
-->
# 飞翔的图片

# Use 

`
npm i fly-img-swiper --S
npm i animejs --D


import FlyImgSwiper from 'fly-img-swiper'

Vue.component('FlyImgSwiper', FlyImgSwiper)


<fly-img-swiper ref="flyImgSwiper" :img-list="imgList" />

imgList = [
  {
    src: require(`./img/${i + 1}.jpg`),
    id: 'img' + i
  }
]

`

