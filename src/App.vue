<template>
  <v-app>
    <message/>
    <router-view></router-view>
    <homeFooter></homeFooter>
  </v-app>
</template>

<script>
import homeFooter from './components/homeFooter';
import message from "@/components/message.vue";
export default {
  components: { homeFooter,message },
  name: 'App',
  data: () => ({
  }),
};
</script>
