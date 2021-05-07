<!--
 * @Author: your name
 * @Date: 2021-05-07 12:03:17
 * @LastEditTime: 2021-05-07 18:19:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-beautiful-template-master/packages/fly-img-swiper/src/index.vue
-->
<template>
  <div class="img-swiper">
    <div ref="imgsContent" class="imgs-content">
      <div v-for="(img,index) in imgList" ref="imgs" :key="index" class="img-wrap" @click="handelClick(img, index)">
        <img class="img" :src="img.src">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'

export default {
  name: 'FlyImgSwiper',
  props: {
    imgList: {
      type: Array,
      default: () => []
    },
    perspective: {
      type: Number,
      default: 1000
    },
    randomNum: {
      type: Number,
      default: 40
    },
    row: {
      type: Number,
      default: 5
    },
    column: {
      type: Number,
      default: 5
    },
    baseZ: {
      type: Number,
      default: -400
    },
    overZ: {
      type: Number,
      default: 600
    },
    speed: {
      type: Number,
      default: 10000
    }
  },
  data() {
    return {
      pageTimer: {}
    }
  },
  computed: {
    imgs() {
      return Array.from(this.$refs.imgs)
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.setImgsSwiper()
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    setImgsSwiper() {
      this.setImgPosition()
      this.move()
    },
    clearTimeout() {
      for (var each in this.pageTimer) {
        clearInterval(this.pageTimer[each])
      }
    },
    stop() {
      this.clearTimeout()
    },
    start() {
      this.stop()
      this.move()
    },
    handelClick(item, index) {
      this.$emit('handelClick', item)
    },
    move() {
      for (let i = 0, len = this.imgs.length; i < len; i++) {
        const el = this.imgs[i]
        const delay = Math.floor(Math.random() * this.speed)

        anime({
          targets: el,
          translateZ: this.overZ,
          delay: delay,
          loop: false,
          duration: this.speed,
          direction: 'alternate',
          easing: 'easeInOutSine',
          opacity: [
            { value: 1, duration: 100, delay: this.speed, easing: 'easeOutExpo' },
            { value: 0, duration: 100 }
          ],
          update: function(anim) {
            console.log(anim.progress)
          },
          loopComplete: function(anim) {
            anim.completed && anim.restart()
          }
        })
      }
    },

    setImgPosition() {
      const parent = this.$refs.imgsContent
      const width = this.$refs.imgsContent.clientWidth
      const height = this.$refs.imgsContent.clientHeight
      parent.style.perspective = this.perspective + 'px'
      for (let i = 0, len = this.imgs.length; i < len; i++) {
        const el = this.imgs[i]
        el.style.top = this.getTop(height, i, this.row) + 'px'
        el.style.left = this.getLeft(width, i, this.column) + 'px'
        i % 2 === 0 && (el.style.transform = `translateZ(${this.baseZ / 2}px)`)
      }
    },
    getTop(size, i, num) {
      const a = size / num
      const b = Math.max(Math.floor((i - 1) / num), 0)
      const c = a * b
      const randomNum = Math.floor(Math.random() * this.randomNum)
      return c + randomNum
    },
    getLeft(size, i, num) {
      const a = size / num
      const b = Math.floor((i) % (num + 1))
      const c = a * b
      const randomNum = Math.floor(Math.random() * this.randomNum)
      return c + randomNum
    }
  }
}
</script>

<style scoped lang="scss">
.img-swiper {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  .imgs-content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%,-50%);
    transform-style: preserve-3d;
    perspective-origin: center 30vh;
    perspective: 10000px;
  }
  .stop {
    position: absolute;
    z-index: 1111;
  }
  .start {
    position: absolute;
    margin-left: 100px;
    z-index: 1111;
  }
  .img-wrap {
    width: 160px;
    height: 90px;
    position: absolute;
    transform-origin: center;
    transition: opacity .5s linear;

    @keyframes imgOpacity {
      from {opacity: 1;}
      to {opacity: 0}
    }
    &.img_opacity {
      animation-name: imgOpacity;
      animation-duration: 1s;
    }

    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 1;
    }
  }
}
</style>
