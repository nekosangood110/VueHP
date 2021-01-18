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
        > more
        </v-btn>
      </v-layout>
      <!-- 開いたときの内容 -->
    </template>
    <v-card>
      <v-card-title>TODOリスト</v-card-title>
      <v-divider></v-divider>
      <v-container>
        <v-card-text style="height: auto">
          <!-- ここからウィンドウの内容  -->
          <v-row>
            <v-col>
              <v-layout my-10>
                <img
                  src="@/assets/work-todo1.gif"
                  min-width="600px"
                  height="100%"
                  width="50%"
                />
              </v-layout>
              <p>
                Vue.jsで初めて作成したtodoリストです！Vue.jsの基礎を掴むことができました。<br>作成時はAdobeXDで簡易なプロトタイプも作成しました。
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
    }
  }
}
</script>

<style scoped>
.v-card-text {
  color: #90a4ae;
}
</style>
