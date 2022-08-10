<!--
 * @Author: your name
 * @Date: 2021-05-06 11:18:36
 * @LastEditTime: 2022-08-10 16:41:00
 * @LastEditors: zhengzhangxu 452436275@qq.com
 * @Description: In User Settings Edit
 * @FilePath: /vue-beautiful-template-master/example/App.vue
-->
<template>
  <div id="app">
    <div class="video-wrap">
      <VideoPlayer :options="videoOptions" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      videoOptions: {
        autoplay: true,
        fluid: true,
        // type: 'application/x-mpegURL',
        type: 'video/mp4',
        // mp4
        src: 'https://cdn-play.tmsx.net/access/ffGpu9MDdzMvNs3tMG-mywNbwO6MuHXnUjpx1JAv7Mnkde8vcGDQOroY9_1jaKnRhkaHO3Vtj8T6Vtql-3MxD1B3nH58bVdCFDeg05UWdZxAk37USnTBl-TNltEumnwN.eyJleHAiOjE2NjAxMjIwMDAsImlzcyI6Im1pY3JvX2N1dCJ9.30d624344b041e2ec80c9eddc470df51'
        // src: 'http://tdetect.tm.video/approve/live?channel=CCTV13HD&type=standard'
        // webm
        // src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
      }
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
#app {
  height: 100vh;
  width: 100vw;

  .video-wrap {
    width: 550px;
    height: 640px;
  }
}

</style>
