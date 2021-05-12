<template>
  <v-app>
    <router-view></router-view>
    <homeFooter></homeFooter>
  </v-app>
</template>

<script>
import homeFooter from './components/homeFooter';
export default {
  components: { homeFooter },
  name: 'App',
  data: () => ({
  }),
};
</script>
