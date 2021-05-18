<template>
  <v-app>
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
export default {

}
</script>

<style>

</style>