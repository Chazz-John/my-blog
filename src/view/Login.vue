<template>

  <v-app>
    <v-main>
      <v-container
          fill-height>
        <v-card
            class="mx-auto"
            width="600px"
            elevation="5"
        >
          <div style="background-color: #2196F3 ;font-size: 22px;line-height: 50px;color:white;padding:10px">登录</div>
          <v-card-text>
            <div>
              <v-text-field
                  label="账号"
                  hide-details="auto"
              ></v-text-field>
              <v-text-field label="密码">

              </v-text-field>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
                dark
                class="mx-2"
                :loading="false"
                :disabled=false
                color="blue"
                @click="loader = 'loading'"
            >
              登录
            </v-btn>
            <v-btn
              class="mx-2"
              dark
              color="grey"
          >
             重置
          </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>

</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "Login",
  components: {
    Footer
  },
  data() {
    return {

    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>
