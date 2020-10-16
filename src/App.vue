<template>
  <div id="app">
    <my-header></my-header>
    <router-view />
    <my-footer></my-footer>
  </div>
</template>


<script>
import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";

// import 'vue-awesome/icons'
// import Icon from 'vue-awesome/components/Icon'
// Vue.component('v-icon', Icon)

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Josefin Slab", serif;
  font-family: "M PLUS 1p", sans-serif;
}
</style>
  