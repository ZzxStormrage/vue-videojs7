<!--
 * @Author: your name
 * @Date: 2021-05-06 11:18:36
 * @LastEditTime: 2022-08-17 11:19:20
 * @LastEditors: zzx 452436275@qq.com
 * @Description: In User Settings Edit
 * @FilePath: /vue-beautiful-template-master/example/App.vue
-->
<template>
  <div id="app">
    <div class="video-wrap">
      <VideoPlayer :options="videoOptions" :video-offset="videoOffset" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      videoOffset: {
        start: 364.8,
        end: 368.9
      },
      videoOptions: {
        autoplay: true,
        fluid: true,
        type: 'application/x-mpegURL',
        // type: 'application/x-mpegurl',
        // mp4
        src: 'https://api-cloud.tmsx.net/api/quick-cut/h264-m3u8-data?type=look_back&channel=GuangXiTV-HZ&starttime=1660494473&endtime=1660496991'
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
