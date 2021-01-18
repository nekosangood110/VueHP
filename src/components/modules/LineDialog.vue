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
      <v-card-title>ねこさんbot</v-card-title>
      <v-divider></v-divider>
      <v-container>
        <v-card-text style="height: auto">
          <!-- ここからウィンドウの内容  -->
          <v-row>
            <v-col>
              <v-layout>
                <img
                  src="@/assets/work-linebot1.gif"
                  min-width="600px"
                  height="100%"
                  width="50%"
                />
              </v-layout>
              <!-- line追加ボタン -->
              <v-layout my-10>
                <a
                  href="https://lin.ee/SEmHXMi "
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img
                    height="36"
                    border="0"
                    src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                /></a>
              </v-layout>
              <p>
                GAS(Google Apps Script)×LINE Messaging
                APIで作成したLINEbotアカウントです。<br />
                日付等を返してもらう簡単なものですが会話にとても癒されます！今後も更新してリマインド機能など追加していきたいです。
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
  },
}
</script>

<style scoped>
.v-card-text {
  color: #90a4ae;
}
</style>
