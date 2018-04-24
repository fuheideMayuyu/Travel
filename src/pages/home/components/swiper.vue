<template>
  <!-- 在轮播图外面加一个div，解决图片未加载时高度塌陷问题 -->
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        // 获取下方焦点
        pagination: '.swiper-pagination',
        // 让轮播图支持循环轮播
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang='stylus' scoped>
// 修改轮播图焦点颜色 .wrapper >>>：可以不受scoped的限制
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
// padding-bottom 31.25%: 表示宽度100%，高度31.25%
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25%
  background #eee
  .swiper-img
    width 100%
</style>
