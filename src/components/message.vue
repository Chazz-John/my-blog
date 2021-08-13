<!--消息提醒全局消息提醒组件-->
<template>
  <div class="message">
      <template  v-for="(item, index) in $store.state.msgPool">
        <div class="d-flex justify-center in" :key="index" :id=index>
          <v-alert :value="item.light === false" min-width="300" dense :type="item.type" dismissible transition="slide-y-transition">{{ item.message }}</v-alert>
          <v-alert :value="item.light ===true" min-width="300" :type="item.type" outlined dismissible transition="slide-y-transition">{{item.message}}</v-alert>
        </div>
      </template>
  </div>
</template>

<script>
export default {
  name: "message",
}
</script>

<style scoped>
.message {
  left: 50%;
  z-index: 9999;
  display: flex;
  position: fixed;
  top: 5vh;
  min-width: 300px;
  max-width: 460px;
  flex-direction: column;
  transform: translateX(-50%);
}
.out{
  animation-name: out;
  animation-timing-function: ease-in;
  animation-duration: 0.4s;
  animation-iteration-count: 1;
}
.in{
  animation-name: in;
  animation-timing-function: ease-in;
  animation-duration: 0.4s;
  animation-iteration-count: 1;
}
@keyframes in {
  from{
    opacity: 0;
    transform : translateY(-40%)
  }
  to{
    opacity :1;
    transform :translateY(0);
  }
}
@keyframes out {
  from{
    opacity: 1;
    transform : translateY(0)
  }
  to{
    opacity :0;
    transform :translateY(-40%);
  }
}
</style>