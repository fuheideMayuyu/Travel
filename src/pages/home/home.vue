<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script type='text/ecmascript-6'>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>

</style>
