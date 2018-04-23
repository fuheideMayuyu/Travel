// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端点击链接有3s延迟的问题
import fastClick from 'fastclick'
// 在main.js的入口文件中引入初始样式表
import 'styles/reset.css'
// 解决一像素边框在高分辨率手机上显示为多个像素的问题
import 'styles/border.css'
// 下载字体文件，在main.js中引入字体文件，然后使用
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
