<template>
  <div>
    <ol>
      <li v-for="(item, index) in items" :key="index">
        <router-link v-bind:to="item.path">
          {{ item.title }}
        </router-link>
      </li>
    </ol>
  </div>
</template>


<script>
export default {
  name: 'TabMenu',
  data () {
    return {
      items: [
        { title: 'home', path: '/' },
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
  padding: 15px;
  text-align: center;
  margin: 0 30px;
  width: 160px;
  height: 0 20px;
  font-size: 17px;
  border-radius: 9px;
  color: #ffffff;
  background-color: #D99B96;
  
}
li:hover {
  opacity: 0.6;
}
/* router-linkの部分 */
 a {
  text-decoration: none;
  color: #FFFFFF;
}
</style>
