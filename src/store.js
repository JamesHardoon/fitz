import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: []
  },
  mutations: {
    addItem(state, value) { // 执行此方法就是往lists数组里面添加一条数据
      state.lists.push(value)
    }
  },
  actions: {

  }
})
