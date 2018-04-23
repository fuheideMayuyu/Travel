<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl" />
            </div>
            <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconsList: [
        {
          id: '001',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
          desc: '景点门票'
        },
        {
          id: '002',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
          desc: '滑雪季'
        },
        {
          id: '003',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
          desc: '泡温泉'
        },
        {
          id: '004',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
          desc: '动植园'
        },
        {
          id: '005',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
          desc: '景点门票'
        },
        {
          id: '006',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
          desc: '滑雪季'
        },
        {
          id: '007',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
          desc: '泡温泉'
        },
        {
          id: '008',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
          desc: '动植园'
        },
        {
          id: '009',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
          desc: '一日游'
        },
        {
          id: '010',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
          desc: '一日游'
        }
      ]
    }
  },
  // 解决无法滑动到第二页的问题
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'

.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icons
  margin-top 0.1rem
  .icon
    position relative
    overflow hidden
    float left
    width 25%
    height 0
    padding-bottom 25%
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom 0.44rem
      box-sizing border-box
      padding 0.1rem
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      height 0.44rem
      line-height 0.44rem
      text-align center
      color $darkTextColor
      ellipsis()
</style>
