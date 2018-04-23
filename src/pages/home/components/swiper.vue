<template>
  <!-- 在轮播图外面加一个div，解决图片未加载时高度塌陷问题 -->
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data () {
    return {
      swiperOption: {
        // 获取下方焦点
        pagination: '.swiper-pagination',
        // 让轮播图支持循环轮播
        loop: true
      },
      // 解决轮播图不能循环问题
      swiperList: [
        {
          id: '001',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1802/e3/62ce7362ca051d02.jpg_640x200_6db551b7.jpg'
        },
        {
          id: '002',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1801/93/ce59d182aca07102.jpg_640x200_ba03d44c.jpg'
        }
      ]
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
