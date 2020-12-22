<template>
  <v-app-bar height="90px">
  <h1><i class="fas fa-heart faa-pulse animated"></i>&nbsp;Chika's page.</h1>
    <nav>
      <ol>
        <li v-for="(item, index) in items" :key="index">
          <router-link v-bind:to="item.path">
            {{ item.title }}
          </router-link>
        </li>
      </ol>
    </nav>
  </v-app-bar>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
      items: [
        { title: "home", path: "/" },
        { title: "profile", path: "/profile" },
        { title: "contact", path: "/contact" },
      ],
    }
  }
}
</script>

<style scoped>
.v-app-bar { 
  background: linear-gradient(-100deg, #90A4AE, #FFCDD2);
}
h1 {
  font-weight: 100;
  letter-spacing: 2px;
  color: #ffffff;
}
nav {
  margin-left: auto;
}
ol {
  list-style: none;
  margin: auto 40px auto  0;
  padding: 10px 0;
}

li {
  font-size: 18px;
}
li:hover {
  opacity: 0.6;
}
/* リンクの部分 */
a {
  text-decoration: none;
  color: #ffffff;
}
</style>
