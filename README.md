<!--
 * @Author: your name
 * @Date: 2021-05-07 16:29:33
 * @LastEditTime: 2021-05-07 17:06:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fly-img-swiper/README.md
-->
# 飞翔的图片

# Use 

```
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
```

### Atributos
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| imgList | 基础图片数据 | Object | {src:"",id:1} 必填项 | - |
| perspective | 视距 | Number | - | 1000 |
| randomNum | 随机位置参数 | Number | - | 40 |
| row | 行 | Number | - | 5 |
| column | 列 | Number | - | 5 |
| baseZ | 初始视距 Z轴 | Number | - | -400 |
| overZ | 消失视距 Z轴 | Number | - | 600 |
| speed | 速度 | Number | - | 10000 |

