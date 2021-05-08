<!--
 * @Author: your name
 * @Date: 2021-05-06 11:18:36
 * @LastEditTime: 2021-05-08 16:06:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-beautiful-template-master/example/App.vue
-->
<template>
  <div id="app">
    <div class="img-swiper-wrap">
      <fly-img-swiper ref="flyImgSwiper" :img-list="imgList" />
      <div>
        <button @click="setFlyImgStatus('pause')">暂停</button>
        <button @click="setFlyImgStatus('play')">开始</button>
        <button @click="setFlyImgStatus('restart')">重置</button>
        <button @click="setFlyImgStatus('reverse')">倒转</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      imgList: []
    }
  },
  created() {
    for (let i = 0; i < 17; i++) {
      this.imgList.push(
        {
          src: require(`./img/${i + 1}.jpg`),
          id: 'img' + i
        }
      )
    }
  },
  methods: {
    setFlyImgStatus(type) {
      this.$refs.flyImgSwiper.setStatus(type)
    }
  }
}
</script>

<style scoped lang="scss">
#app {
  height: 100vh;
  width: 100vw;
}
.img-swiper-wrap {
  width: 800px;
  height: 600px;
  margin: 100px auto;
}

</style>
