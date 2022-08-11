<!--
 * @Author: zhengzhangxu 452436275@qq.com
 * @Date: 2021-05-08 15:51:34
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2022-08-11 15:09:03
 * @FilePath: /vue-video-play-7/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

## Install 安装
```shell
npm i vue-video-paly-7 -S
```

## Use 使用
```shell
    <videoPlayer 
    :options="videoOptions"
      :playsinline="true"
      @loadedmetadata="onPlayerLoadedmetadata($event)"
      @durationchange="onPlayerDurationchange($event)"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @seeking="onPlayerSeeking($event)"
      @ended="onPlayerEnded($event)"
      @loadeddata="onPlayerLoadeddata($event)"
      @waiting="onPlayerWaiting($event)"
      @playing="onPlayerPlaying($event)"
      @timeupdate="onPlayerTimeupdate($event)"
      @canplay="onPlayerCanplay($event)"
      @error="onPlayerError($event)"
      @volumechange="onPlayerVolumechange($event)"
      @canplaythrough="onPlayerCanplaythrough($event)"
      @videoStatusChange="videoStatusChange"
     />

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
      },


      // 时长变化。当指定的音频/视频的时长数据发生变化时触发，加载后，时长由 NaN 变为音频/视频的实际时长
    onPlayerDurationchange(player) {
      console.log('提示视频的时长已改变', player.duration)
    },
    // 元数据加载。当指定的音频/视频的元数据已加载时触发，元数据包括：时长、尺寸（仅视频）以及文本轨道
    onPlayerLoadedmetadata(player) {
      console.log('提示视频的元数据已加载')
    },
    // 视频下载监听。当当前帧的数据已加载，但没有足够的数据来播放指定音频/视频的下一帧时触发
    onPlayerLoadeddata(player) {
      console.log('提示当前帧的数据是可用的')
    },
    // 可播放监听。当浏览器能够开始播放指定的音频/视频时触发
    onPlayerCanplay(player) {
      console.log('提示该视频已准备好开始播放')
    },
    // 可流畅播放。当浏览器预计能够在不停下来进行缓冲的情况下持续播放指定的音频/视频时触发
    onPlayerCanplaythrough(player) {
      console.log('提示视频能够不停顿地一直播放')
    },
    // 播放监听
    onPlayerPlay(player) {
      console.log('提示该视频正在播放中')
    },
    // 暂停监听
    onPlayerPause(player) {
      console.log('暂停播放')
    },
    // video 状态发生改变
    videoStatusChange(event) {
      console.log('状态发生改变')
    },
    // 查找开始。当用户开始移动/跳跃到音频/视频中新的位置时触发
    onPlayerSeeking(player) {
      console.log('开始移动进度条')
    },
    // 视频加载等待。当视频由于需要缓冲下一帧而停止，等待时触发
    onPlayerWaiting(player) {
      console.log('视频加载等待')
    },
    // 播放结束
    onPlayerEnded(player) {
      console.log('视频播放完了')
    },
    onPlayerPlaying(player) {
      console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      console.log('timeupdate')
    },
    onPlayerVolumechange(player) {
      console.log('提示当前声音发生改变', player.muted)
    },
    onPlayerError(player, err) {
      console.log('视频出错了')
    },

```
### playerOptions 其他参数
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| videoOffset | 视频裁剪 | Objeect | { startMs: 0, endMs: 0} | — |
| pictureInPictureToggle | 画中画 | boolean | — | — |
| currentTimeDisplay | 当前时间 | boolean | - | - |
| timeDivider | 时间分割线 | boolean | — | — |
| durationDisplay | 总时间 | boolean | — | true |
| progressControl | 进度条 | boolean | — | true |
| customControlSpacer-text | 未知 | boolean | — | — |
| fullscreenToggle | 全屏 | boolean | — | false |
| remainingTimeDisplay | 剩余秒数 | boolean | - | light |