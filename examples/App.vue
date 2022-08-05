<!--
 * @Author: your name
 * @Date: 2021-05-06 11:18:36
 * @LastEditTime: 2022-08-05 11:17:16
 * @LastEditors: zhengzhangxu 452436275@qq.com
 * @Description: In User Settings Edit
 * @FilePath: /vue-beautiful-template-master/example/App.vue
-->
<template>
  <div id="app">
    <VideoPlayer :options="videoOptions" />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      videoOptions: {
        src: '',
        type: ''
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
}

</style>
