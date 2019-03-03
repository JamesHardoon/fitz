<template>
  <div>
    <p>标题</p>
    <input type="text" v-model="title">
    <p>内容</p>
    <input type="text" v-model="content">
    <div class="btn" @click="add()">添加</div>
  </div>
</template>

<script>
// 引入vuex
import store from "@/store";

export default {
  name: "Add",
  store,
  data() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    add() {
      // store.commit就是往vuex中当前页面输入的title和content值
      store.commit("addItem", {
        title: this.title,
        content: this.content
      });
      // 输入前清空前面输入的内容
      (this.title = ""), (this.content = "");
      // 点击添加后直接来到list页面
      this.$router.push("home/list");
    }
  }
};
</script>

<style scoped lang="scss">
</style>

