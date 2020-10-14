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
// import Profile from '@/components/Profile'

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
  }
</style>
  