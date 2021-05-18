<!-- 博客首页 -->
<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <v-sheet v-if="!token" class="ma-2">
			<v-btn to="login" block elevation="3">登录/注册<v-icon class="ma-2">mdi-account-plus</v-icon></v-btn>
        </v-sheet>
        <v-sheet v-if="token">
          <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>
          <div>chazz0504@qq.com</div>
        </v-sheet>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="[icon, text] in links" :key="icon" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
      <v-container class="py-8 px-6" fluid v-if="isArticle">
        <v-row>
          <v-col v-for="card in cards" :key="card" cols="12" @click="isArticle = !isArticle">
            <v-card hover to="ArticleInfo">
              <v-subheader>{{ card }}</v-subheader>
              <v-list two-line>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import api from '@/utils/http.js';
export default {
  name: "index",
  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: null,
    links: [
      ["mdi-home-circle", "首页"],
      ["mdi-send", "分类"],
      ["mdi-alert-octagon", "关于"],
    ],
    token: "",
    isArticle:true,
  }),
  mounted() {
    this.isArticle = true;
    this.token = localStorage.getItem("token");
    api.get('/nacos-consumer/consumer')
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.error(err); 
    })
  },
};
</script>

<style scoped></style>
