<!--
 * @Author: your name
 * @Date: 2021-05-06 11:18:36
 * @LastEditTime: 2022-08-11 17:16:43
 * @LastEditors: zzx 452436275@qq.com
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
        type: 'application/x-mpegurl',
        // mp4
        src: 'https://api-cloud.tmsx.net/api/quick-cut/h264-m3u8-data?type=live&channel=GuangXiTV-HZ'
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
