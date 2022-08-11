<!--
 * @Author: zhengzhangxu 452436275@qq.com
 * @Date: 2021-05-08 15:51:34
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2022-08-11 11:11:36
 * @FilePath: /vue-video-play-7/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

## Install 安装
```shell
npm i vue-video-paly-7 -S
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