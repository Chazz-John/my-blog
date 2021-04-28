<template>
  <v-app>
    <router-view></router-view>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue';
export default {
  components: { Footer },
  name: 'App',
  data: () => ({
  }),
};
</script>
