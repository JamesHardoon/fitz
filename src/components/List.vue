<template>
  <div>
    <div>list</div>
    <ul>
      <li v-for="(item,index) in pageLists" :key="index">
        {{item.title}}-{{item.content}}
      </li>
    </ul>
  </div>
</template>

<script>
// 引入vuex
import store from "@/store";

export default {
  name: "List",
  store,
  computed: {
    // 动态监听数据发生的变化
    pageLists() {
      // 表示从vuex中拿出在Add.vue页面存入的值
      return store.state.lists;
    }
  }
};
</script>

<style scoped lang="scss">
</style>

