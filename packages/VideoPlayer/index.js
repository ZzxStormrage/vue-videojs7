/*
 * @Author: your name
 * @Date: 2021-02-23 16:40:51
 * @LastEditTime: 2022-08-10 18:14:27
 * @LastEditors: zhengzhangxu 452436275@qq.com
 * @Description: In User Settings Edit
 * @FilePath: /vue-zzx-ui/packages/VideoPlayer/index.js
 */
import _videojs from 'video.js'
import videoPlayer from './src/index.vue'

const videojs = window.videojs || _videojs
const install = function(Vue, config) {
  if (config) {
    if (config.options) {
      videoPlayer.props.globalOptions.default = () => config.options
    }
    if (config.events) {
      videoPlayer.props.globalEvents.default = () => config.events
    }
  }
  Vue.component(videoPlayer.name, videoPlayer)
}

const VueVideoPlayer = { videojs, videoPlayer, install }

export default VueVideoPlayer
export { videojs, videoPlayer, install }
