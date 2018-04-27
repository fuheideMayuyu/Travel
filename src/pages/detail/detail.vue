<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script type='text/ecmascript-6'>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'

export default {
  name: 'detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang='stylus' scoped>
.content
  height 50rem
</style>
