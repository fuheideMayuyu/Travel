<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import DetailList from './components/list'

export default {
  name: 'detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [
        {
          title: '成人票'
        },
        {
          title: '儿童票'
        },
        {
          title: '学生票'
        },
        {
          title: '特惠票'
        }
      ]
    }
  }
}
</script>

<style lang='stylus' scoped>
.content
  height 50rem
</style>
