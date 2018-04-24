<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script type='text/ecmascript-6'>
import CityHeader from './components/header'
import CitySearch from './components/search'

export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style lang='stylus' scoped>
</style>
