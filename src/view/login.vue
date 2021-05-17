<template>
  <div class="container" :class="{ 'sign-up-mode': signUpMode }">
    <!-- form表单容器 -->
    <div class="forms-container">
      <div class="signin-signup">
        <v-container width="80%">
          <!-- 登录 -->
          <v-form v-if="showForm">
            <p>登录</p>
            <v-text-field label="Solo" solo dense></v-text-field>
          </v-form>

          <!-- 注册 -->
          <v-form v-if="!showForm">
            <p>注册</p>
            <v-text-field label="Solo" solo dense></v-text-field>
          </v-form>
        </v-container>
      </div>
    </div>
    <!-- 左右切换动画 -->
    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h2>学习是为了有更多的选择,让生活变的更美好!</h2>
          <p>何以解忧,唯有自修</p>
          <v-btn
            rounded
            outlined
            color="#fff"
            @click="toLogin"
            class="ma-2"
            width="100"
          >
            注册
          </v-btn>
        </div>
        <img src="@/assets/img/log.svg" class="image" />
      </div>

      <div class="panel right-panel">
        <div class="content">
          <h2>以人为镜,可明得失, 以代码为镜,可通逻辑!</h2>
          <p>学习编程,让你的生活更有趣</p>
          <v-btn
            rounded
            outlined
            color="#fff"
            @click="toLogin"
            class="ma-2"
            width="100"
          >
            登录
          </v-btn>
        </div>
        <img src="@/assets/img/register.svg" class="image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  props: {},
  data() {
    return {
      name: "",
      password: "",
      signUpMode: "",
      showForm: true,
    };
  },
  mounted() {},
  methods: {
    toLogin() {
      this.signUpMode = !this.signUpMode;
      setTimeout(() => {
        this.showForm = !this.showForm;
      }, 800);
    },
  },
};
</script>

<style scoped>
@import "../assets/css/style.css";
</style>
