/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'

import './base.css'

// 创建vm
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App}, // 映射组件标签
  template: '<App/>', // 指定需要渲染到页面的模板
  store // 所有的组件对象都多了一个属性: $store(值就是store对象)
})


// new Vue({
//     el: '#app',
//     render: h => h(App),  // 代替 components: {App}, tempalte: '<App/>'
//     store
// })

// new Vue({
//     el: '#app',
//     render: function(createElement) {  // render: h => h(App) 的原生写法
//         return createElement(App); // 相当于 <App/>
//     },
//     store
// })
