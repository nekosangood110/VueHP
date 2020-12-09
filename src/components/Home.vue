<template>
  <v-app>
    <div class="TextAnime1">
      <span
        v-for="(t, index) in text"
        :key="index"
        class="item"
        :style="{ animationDelay: index * 100 + 'ms' }"
        v-text="t"
      />
    </div>
    <div class="top-images">
      <img src="@/assets/slide-image1.jpg" />
    </div>
    <!-- 作品はここから -->
    <v-card-text
      style="font-size: 2em"
      class="blue-grey--text text--lighten-2 text-center my-13"
      >My works</v-card-text
    >

    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4" lg="4">
          <p style="font-size: 1.1em" class="text-center mt-3">ねこさんbot</p>
          <v-layout justify-center>
            <img src="@/assets/work-linebot1.jpg" />
          </v-layout>

          <!-- ダイアログボタン -->
          <v-dialog v-model="dialog" hide-overlay fullscreen max-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-layout justify-center>
                <v-btn
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
              <!-- ↑タイトル、白線  -->
              <v-container>
                <v-card-text style="height: auto">
                  <!-- ここからウィンドウの内容  -->
                  <v-row>
                    <v-col>
                      <v-layout>
                        <img
                          src="@/assets/work-linebot1.gif"
                          min-width="600px"
                          width="300px"
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
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="4">
          <p style="font-size: 1.1em" class="text-center mt-3">Todolist</p>
          <v-layout justify-center>
            <img src="@/assets/work-todo1.jpg" />
          </v-layout>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="4">
          <p style="font-size: 1.1em" class="text-center mt-3">Mysite</p>
          <v-layout justify-center>
            <img src="@/assets/work-mysite1.jpg" />
          </v-layout>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      text: "Thank you for visiting this page!",
      dialog: false,
    }
  },
  
}
</script>

<style scoped>
.TextAnime1 {
  color: #8197ab;
  text-align: center;
  padding: 40px 0;
}
@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}
.item {
  display: inline-block;
  min-width: 0.3em;
  font-size: 45px;
  animation: text-in 0.4s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}
/* アニメーションここまで */

.top-images {
  text-align: center;
}
.v-card-text {
  color: #90a4ae;
}


</style>
