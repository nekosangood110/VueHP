<template>
  <!-- ダイアログボタン -->
  <v-dialog v-model="dialog" hide-overlay fullscreen max-width="auto">
    <template v-slot:activator="{ on, attrs }">
      <v-layout justify-center>
        <v-btn
          class="mt-7"
          color="blue-grey lighten-2 white--text"
          dark
          v-bind="attrs"
          v-on="on"
        >
          more
        </v-btn>
      </v-layout>
      <!-- 開いたときの内容 -->
    </template>
    <v-card>
      <v-card-title>Mysite</v-card-title>
      <v-divider></v-divider>
      <v-container>
        <v-card-text style="height: auto">
          <!-- ここからウィンドウの内容  -->
          <v-row>
            <v-col>
              <v-layout>
                <img
                  src="@/assets/work-mysite1.jpg"
                  min-width="600px"
                  width="300px"
                />
              </v-layout>
              <p class="font-weight-bold">使用言語</p>
              <p >Vue-cli/Vue-router/Vuetify/Firebase(Functions)</p>
              <p>
                Vue-routerを使ったSPA(Single Page Application)のポートフォリオです。<br>
                お問い合わせフォームはFirebaseのfunctionsで構築しています。ライブラリにVuetifyを使用しており、レスポンシブ対応です。SVGアニメーションがお気に入りです！
              </p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-container>

      <!-- closeボタン -->
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue-grey lighten-2" text @click="dialog = false">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>
.v-card-text {
  color: #90a4ae;
}
</style>