<!--
 * @Author: your name
 * @Date: 2021-05-06 11:18:36
 * @LastEditTime: 2021-05-07 11:32:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-beautiful-template-master/example/App.vue
-->
<template>
  <div id="app">
    <div class="img-swiper-wrap">
      <img-swiper :img-list="imgList" />
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
          src: `./img/${i + 1}.jpg`,
          id: 'img' + i
        }
      )
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
