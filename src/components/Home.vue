<template>
  <v-content>
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
    
  </v-content>
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
    color: #8197A6;
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
img {
  max-width: 100%;
  text-align: bottom;
  
}
</style>