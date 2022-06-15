<!-- 博客首页 -->
<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <v-sheet v-if="!token" class="ma-2">
			<v-btn to="login" target="_blank" block elevation="3">登录/注册<v-icon class="ma-2">mdi-account-plus</v-icon></v-btn>
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

    <v-main z-index="99">
      <router-view></router-view>
      <v-container class="py-8 px-6" fluid v-if="isArticle">
        <v-row>
          <v-col v-for="card in cards" :key="card" cols="12">
            <v-card hover to="ArticleInfo">
              <v-subheader>{{ card }}</v-subheader>
              <v-list two-line>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
        <v-text-field v-model="id"></v-text-field>
        <v-text-field v-model="time"></v-text-field>
<!--        <v-btn @click="startDispatch()">开始任务</v-btn>-->
<!--        <v-btn @click="stopDispatch()">结束任务</v-btn>-->
        <v-btn @click="success()">success</v-btn>
        <v-btn @click="info()">info</v-btn>
        <v-btn @click="error()">error</v-btn>

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
    id:'',
    time:''
  }),
  mounted() {
    this.isArticle = true;
    this.token = localStorage.getItem("token");
    // api.get('/nacos-consumer/getUserInfo')
    // .then((res) => {
    //     console.log(res.data)
    // })
    // .catch((err) => {
    //     console.error(err);
    // })
  },
  methods: {
    startDispatch() {
      api.get("http://localhost:8084/nacos-consumer/startDispatch",{
        params:{
          dispatchId:this.id,
          time:this.time
        }
      }).then(res=>{
        console.log(res.data)
      })
    },
    stopDispatch(){
      api.get("http://localhost:8084/nacos-consumer/stopDispatch",{
        params:{
          dispatchId:this.id
        }
      }).then(res=>{
        console.log(res.data)
      })
    },
    success(){
      this.$message.success({
        message:'成功!',
        time:3000,
      })
    },
    info(){
      this.$message.info({
        message: "这是一个massage",
      })
    },
    error() {
      this.$message.error("错误信息")
    }
  },
};
</script>

<style scoped></style>
