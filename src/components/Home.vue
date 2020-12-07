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
      <img src="@/assets/slide-image1.jpg"  />
    </div>
    <!-- 作品はここから -->
    <v-card-text style="font-size: 2em" class="text-center my-13">My works </v-card-text>

    <v-container>
      <v-row justify="center" align-content="center">
        <v-col cols="12" sm="6" md="4" lg="4">
          <img src="@/assets/work-linebot1.jpg" justify="center" />
          <v-dialog>a</v-dialog>
          <p  style="font-size: 1.5em" class="text-center mt-3">ねこさんbot</p>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="4">
          <img src="@/assets/work-todo1.jpg" justify="center" />
          <p  style="font-size: 1.3em" class="text-center mt-3">Todolist</p>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="4">
          <img src="@/assets/work-mysite1.jpg" justify="center" />
          <p  style="font-size: 1.5em" class="text-center mt-3">Mysite</p>
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
    };
  },
};
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
  color: #90A4AE;
}
</style>