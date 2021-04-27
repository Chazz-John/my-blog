<template>
  <v-app>
    <login></login>
  </v-app>
</template>

<script>
import Login from "@/view/Login";
export default {
  name: 'App',

  components: {
    Login
  },

  data: () => ({
  }),
};
</script>
