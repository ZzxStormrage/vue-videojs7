<!--
 * @Author: your name
 * @Date: 2021-02-23 16:48:16
 * @LastEditTime: 2022-08-17 17:09:00
 * @LastEditors: zzx 452436275@qq.com
 * @Description: In User Settings Edit
 * @FilePath: /vue-zzx-ui/packages/VideoPlayer/src/index.vue
-->
<template>
  <div v-if="reseted" class="video-player">
    <video ref="video" class="video-js">
      <track
        v-for="(crtTrack,index) in trackList"
        :key="index"
        :kind="crtTrack.kind"
        :label="crtTrack.label"
        :src="crtTrack.src"
        :srcLang="crtTrack.srcLang"
        :default="crtTrack.default"
      >
    </video>
  </div>
</template>

<script>
// lib
import _videojs from './videojs/video.min.js'
const videojs = window.videojs || _videojs
import './videojs/videojs.css'
import './custom-theme.css'
import './videojs/videojs-offset.js'

// pollfill
if (typeof Object.assign !== 'function') {
  Object.defineProperty(Object, 'assign', {
    value(target, varArgs) {
      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object')
      }
      const to = Object(target)
      for (let index = 1; index < arguments.length; index++) {
        const nextSource = arguments[index]
        if (nextSource != null) {
          for (const nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey]
            }
          }
        }
      }
      return to
    },
    writable: true,
    configurable: true
  })
}

// as of videojs 6.6.0
const DEFAULT_EVENTS = [
  'durationchange',
  'loadeddata',
  'canplay',
  'canplaythrough',
  'play',
  'pause',
  'waiting',
  'playing',
  'ended',
  'error'
]

// export
export default {
  name: 'VideoPlayer',
  props: {
    videoOffset: {
      type: Object,
      default: () => {
        return {
          start: 0,
          end: 0
        }
      }
    },
    crossOrigin: {
      type: String,
      default: ''
    },
    playsinline: {
      type: Boolean,
      default: false
    },
    customEventName: {
      type: String,
      default: 'statechanged'
    },
    options: {
      type: Object,
      required: true
    },
    events: {
      type: Array,
      default: () => []
    },
    globalOptions: {
      type: Object,
      default: () => ({
        autoplay: false,
        controls: true,
        preload: 'auto',
        fluid: true, // ?????????
        // muted: false,
        controlBar: {
          // ???????????????
          volumeMenuButton: {
            inline: false,
            vertical: true
          },
          pictureInPictureToggle: false, // ?????????
          currentTimeDisplay: true, // ????????????
          timeDivider: true, // ???????????????
          durationDisplay: true, // ?????????
          progressControl: true, // ?????????
          customControlSpacer: false, // ??????
          fullscreenToggle: false, // ??????
          remainingTimeDisplay: false
        },
        techOrder: ['html5'],
        plugins: {}
      })
    },
    globalEvents: {
      type: Array,
      default: () => []
    },
    trackList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      player: null,
      reseted: true
    }
  },
  watch: {
    videoOffset: {
      deep: true,
      handler(obj) {
        this.dispose(() => {
          if (obj && obj.end) {
            if (!this.player) {
              this.player.offset({
                start: this.videoOffset.start,
                end: this.videoOffset.end,
                restart_beginning: false // Should the video go to the beginning when it ends
              })
            }
          }
        })
      }
    },
    options: {
      deep: true,
      handler(options, oldOptions) {
        this.dispose(() => {
          if (options && options.src) {
            this.initialize()
          }
        })
      }
    }
  },
  mounted() {
    if (!this.player) {
      this.initialize()
      this.player.on('error', () => {
        this.setErrorStyle()
      })

      if (this.videoOffset.end > 0) {
        this.player.offset({
          start: this.videoOffset.start,
          end: this.videoOffset.end,
          restart_beginning: false // Should the video go to the beginning when it ends
        })
      }
    }
  },
  beforeDestroy() {
    if (this.player) {
      this.dispose()
    }
  },
  methods: {
    initialize() {
      // videojs options
      const videoOptions = Object.assign({}, this.globalOptions, this.options)

      videoOptions.sources = [
        {
          src: this.options.src,
          type: this.options.type || 'video/mp4'
        }
      ]

      // ios fullscreen
      if (this.playsinline) {
        this.$refs.video.setAttribute('playsinline', this.playsinline)
        this.$refs.video.setAttribute('webkit-playsinline', this.playsinline)
        this.$refs.video.setAttribute('x5-playsinline', this.playsinline)
        this.$refs.video.setAttribute('x5-video-player-type', 'h5')
        this.$refs.video.setAttribute('x5-video-player-fullscreen', false)
      }

      // cross origin
      if (this.crossOrigin !== '') {
        this.$refs.video.crossOrigin = this.crossOrigin
        this.$refs.video.setAttribute('crossOrigin', this.crossOrigin)
      }

      // emit event
      const emitPlayerState = (event, value) => {
        if (event) {
          this.$emit(event, this.player)
        }
        if (value) {
          this.$emit(this.customEventName, { [event]: value })
        }
      }

      // avoid error "VIDEOJS: ERROR: Unable to find plugin: __ob__"
      if (videoOptions.plugins) {
        delete videoOptions.plugins.__ob__
      }

      // videoOptions
      // console.log('videoOptions', videoOptions)

      // player
      const self = this
      this.player = videojs(this.$refs.video, videoOptions, function() {
        // events
        const events = DEFAULT_EVENTS.concat(self.events).concat(self.globalEvents)

        // watch events
        const onEdEvents = {}
        for (let i = 0; i < events.length; i++) {
          if (typeof events[i] === 'string' && onEdEvents[events[i]] === undefined) {
            (event => {
              onEdEvents[event] = null
              this.on(event, () => {
                emitPlayerState(event, true)
              })
            })(events[i])
          }
        }

        // watch timeupdate
        this.on('timeupdate', function() {
          emitPlayerState('timeupdate', this.currentTime())
        })

        // player readied
        self.$emit('ready', this)
      })
    },
    dispose(callback) {
      if (this.player && this.player.dispose) {
        if (this.player.techName_ !== 'Flash') {
          this.player.pause && this.player.pause()
        }
        this.player.dispose()
        this.player = null
        this.$nextTick(() => {
          this.reseted = false
          this.$nextTick(() => {
            this.reseted = true
            this.$nextTick(() => {
              callback && callback()
            })
          })
        })
        /*
          if (!this.$el.children.length) {
            const video = document.createElement('video')
            video.className = 'video-js'
            this.$el.appendChild(video)
          }
          */
      }
    },
    setErrorStyle() {
      var dom = document.querySelector('.vjs-modal-dialog-content')
      var btn = document.querySelector('.vjs-big-play-button')
      btn.style.display = 'none'

      var Errordom =
        `<div class="video-custom-error"> ???????????????????????????????????????????????????????????????????????????</div>`
      dom.innerHTML = Errordom
    }
  }
}
</script>
