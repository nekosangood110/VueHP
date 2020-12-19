<template>
  <div>
    <my-header></my-header>
      <router-view />
      <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from '@/components/modules/MyHeader'
import MyFooter from '@/components/modules/MyFooter'
export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
  },
  data() {
    return {

    }
  }
}
</script>

<style>
</style>
