<template>
  <div>
    <my-header></my-header>
      <router-view />
      <my-animation></my-animation>
      <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyFooter from '@/components/MyFooter'
import MyAnimation from '@/components/MyAnimation'
export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
    MyAnimation
  },
  data() {
    return {

    }
  }
}
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
