<!--
 * @Author: your name
 * @Date: 2021-05-07 12:03:17
 * @LastEditTime: 2021-05-08 19:47:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-beautiful-template-master/packages/fly-img-swiper/src/index.vue
-->
<template>
  <div class="img-swiper">
    <div ref="imgsContent" class="imgs-content">
      <div v-for="(img,index) in imgList" ref="imgs" :key="index" class="img-wrap" @click="handelClick(img, index)">
        <img class="img" :src="img.src">
        <slot name="item" :item="img" :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
import anime from './anime.es.js'

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
    autoPlay: {
      type: Boolean,
      default: true
    },
    column: {
      type: Number,
      default: 5
    },
    baseZ: {
      type: Number,
      default: -300
    },
    overZ: {
      type: Number,
      default: 700
    },
    speed: {
      type: Number,
      default: 5000
    }
  },
  data() {
    return {
      animations: []
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

      if (this.autoPlay) {
        this.move()
      }
    },
    setStatus(type) {
      const statusArr = ['pause', 'play', 'restart', 'reverse']
      if (!statusArr.includes(type)) {
        console.error('请传入正确的值', statusArr)
        return
      }
      this.animations.forEach(item => {
        item[type]()
      })
    },
    handelClick(item, index) {
      this.$emit('handelClick', item)
    },
    move() {
      for (let i = 0, len = this.imgs.length; i < len; i++) {
        const el = this.imgs[i]
        const delay = Math.floor(Math.random() * this.speed)
        const animations = anime({
          targets: el,
          translateZ: this.overZ,
          delay: delay,
          loop: false,
          duration: this.speed,
          direction: 'alternate',
          easing: 'easeInOutSine',
          opacity: [
            { value: 1, duration: 200, delay: (this.speed + delay) * 0.85, easing: 'easeInOutExpo' },
            { value: 0, duration: 0 }
          ],
          loopComplete: function(anim) {
            anim.completed && anim.restart()
          }
        })
        this.animations.push(animations)
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
        i % 2 === 0 && (el.style.transform = `translateZ(${this.baseZ / 4}px)`)
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
    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12);

    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 1;
      border-radius: 3px;
    }
  }
}
</style>
