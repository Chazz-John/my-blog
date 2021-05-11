<template>
  <v-app>
    <router-view></router-view>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from './components/footer';
export default {
  components: { Footer },
  name: 'App',
  data: () => ({
  }),
};
</script>
