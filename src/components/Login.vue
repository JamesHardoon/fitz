<template>
  <div>
    <form v-if="!isReg">
      <div>用户名：</div>
      <input type="text" v-model="name">
      <div>密码：</div>
      <input type="password" v-model="password">
      <div>
        <button type="button" @click="login()">登录</button>
        <button type="button" @click="reg()">注册</button>
      </div>
    </form>
    <form v-else>
      <div>用户名：</div>
      <input type="text" v-model="name">
      <div>密码：</div>
      <input type="password" v-model="password">
      <div>确认密码:</div>
      <input type="password" v-model="repeat">
      <div>
        <button type="button" @click="addUser()">确定</button>
        <button type="button" @click="cancel()">取消</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isReg: false,
      name: '',
      password: '',
      repeat: '',
    };
  },
  methods: {
    login() {
      // 登录校验
      if (localStorage.getItem("name") === this.name && localStorage.getItem("password") === this.password) {
        // 输入前清空name和password  
        this.$router.push('/home/list')
      } else {
          alert('用户名或密码不正确！')
      }
    },
    reg() {
      this.isReg = true;
    },
    addUser() {
      if (this.password === this.repeat) {
        // 由于没有后台数据库,故直接localStorage
        localStorage.setItem("name",this.name)
        localStorage.setItem("password",this.password)
        localStorage.setItem("repeat",this.repeat)
        // 点击确认清空输入框中的内容,并回到登录页面
        this.name = '';
        this.password = '';
        this.repeat = '';
        // 回到登录页面
        this.isReg = false;
      } else {
        alert('两次密码输入不一致！')
      }
    },
    cancel() {
        this.isReg = false; // 回到登录页面
    }
  }
};
</script>

<style scoped lang="scss">
</style>

