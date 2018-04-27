<template>
  <ul class="list">
    <li class="item"
        v-for="item of letters"
        :ref="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        :key="item" @click="handleLetterClick">
      {{item}}
    </li>
  </ul>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'cityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      // 定义一个标识位,判断是否还在滑动
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    // 获取A元素距离顶部的高度
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('changeA', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      // 点击字母获取对应位置
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 获取滑动位置距离顶部的高度 74为顶部状态栏高度
          const touchY = e.touches[0].clientY - 74
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('changeA', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.68rem
  right 0
  bottom 0
  width 0.4rem
  .item
    line-height 0.4rem
    text-align center
    color $bgColor
</style>
