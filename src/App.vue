<template>
<div id="app">
  <tab-menu></tab-menu>
  <router-view/>
</div>
</template>


<script>
import TabMenu from '@/components/TabMenu'

export default {
  name: 'App',
  components: {
    TabMenu
  }
}
</script>

<style>

</style>
