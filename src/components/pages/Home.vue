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
    <v-row justify-center>
    <v-col cols="12" sm="12" md="12" lg="12">
    <v-layout justify-center wrap>
      <img src="@/assets/home-image.jpg" 
      width="80%"
      height="auto"
      />
    </v-layout>
    </v-col>
    </v-row>
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
          <line-dialog></line-dialog>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="4">
          <p style="font-size: 1.1em" class="text-center mt-3">Todolist</p>
          <v-layout justify-center>
            <img src="@/assets/work-todo1.jpg" />
          </v-layout>
          <todo-dialog></todo-dialog>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="4">
          <p style="font-size: 1.1em" class="text-center mt-3">Mysite</p>
          <v-layout justify-center>
            <img src="@/assets/work-mysite1.jpg" />
          </v-layout>
          <site-dialog></site-dialog>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import LineDialog from "@/components/modules/LineDialog.vue"
import TodoDialog from "@/components/modules/TodoDialog.vue"
import SiteDialog from "@/components/modules/SiteDialog.vue"
export default {
  name: "Home",
  components: {
    LineDialog,
    TodoDialog,
    SiteDialog
  },
  data() {
    TodoDialog
    return {
      text: "Thank you for visiting this page!",
    }
  }
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


.top-images {
  text-align: center;
}

</style>
