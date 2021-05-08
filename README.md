<!--
 * @Author: your name
 * @Date: 2021-05-07 16:29:33
 * @LastEditTime: 2021-05-08 16:43:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fly-img-swiper/README.md
-->
# 飞翔的图片

# Use 
```
cnpm i fly-img-swiper --S

import FlyImgSwiper from 'fly-img-swiper'
Vue.component('FlyImgSwiper', FlyImgSwiper)


<fly-img-swiper ref="flyImgSwiper" :img-list="imgList" @handelClick="handelClick"/>

imgList = [
  {
    src: require(`./img/${i + 1}.jpg`),
  }
]

// 内置方法
// type 可选 'pause', 'play', 'restart', 'reverse'

  this.$refs.flyImgSwiper.setStatus(type)

```


### Atributos
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| imgList | 基础图片数据 | Object | {src:""} 必填项 | - |
| perspective | 视距 | Number | - | 1000 |
| randomNum | 随机位置参数 | Number | - | 40 |
| row | 行 | Number | - | 5 |
| column | 列 | Number | - | 5 |
| baseZ | 初始视距 Z轴 | Number | - | -400 |
| overZ | 消失视距 Z轴 | Number | - | 600 |
| speed | 速度 | Number | - | 10000 |

