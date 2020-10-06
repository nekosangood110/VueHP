<template>
  <div>
    <ol>
      <li v-for="(item, index) in items" :key="index">
        <roter-link v-bind:to="item.path">
          {{ item.title }}
        </roter-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'TavMenu',
  data () {
    return {
      items: [
        { title: 'top', path: '/' },
        { title: 'profile', path: '/profile' },
        { title: 'contact', path: '/contact' }
      ]
    }
  }
}
</script>

<style scoped>
ol {
  
  display: flex;
  justify-content: center;
  padding: 0px;
  list-style: none;
}

li {
  padding: 20px;
  text-align: center;
  margin: 0 30px;
  width: 480px;
  font-size: 25px;
  /* font-family: Arial, Helvetica, sans-serif; */
  border-radius: 9px;
  color: #ffffff;
  background-color: #99aabf;
}
li:hover {
  opacity: 0.8;
}
/* router-linkの部分 */
/* a {
  color: #757575;
} */
</style>
