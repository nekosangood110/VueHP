<template>
  <v-app>
    <div class="TextAnime1">
      <span
        v-for="(t, index) in text"
        :key="index"
        class="item"
        :style="{ animationDelay: index * 100 + 'ms' }"
        v-text="t"/>
    </div>
    <div class="top-images">
      <img src="@/assets/slide-image1.jpg" />
    </div>
    <!-- 作品はここから -->
    <h1 class="works-title">My Works</h1>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="4">
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4">

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
  color: #8197a6;
  text-align: center;
  padding: 40px 0 20px 0;
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
.top-images {
  text-align: center;
}
.works-title {
  margin-top: 100px;
  text-align: center;
  color: #8197a6;
  font-weight: 400;
}
/* img {
  max-width: 100%;
  text-align: bottom;
} */
</style>