<template>
<div id="app">
  <my-header></my-header>
  <router-view/>
</div>
</template>


<script>
import MyHeader from '@/components/MyHeader'
// import Profile from '@/components/Profile'

export default {
  name: 'App',
  components: {
    MyHeader,
  }
}
</script>

<style>
body {
  margin: 0;
  padding:0;
  box-sizing: border-box;
   /* font-family: ; */
}
</style>
