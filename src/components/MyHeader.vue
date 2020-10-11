<template>
  <div class="header">
    <h1>Chika's page.</h1>
    <nav>
      <ol>
        <li v-for="(item, index) in items" :key="index">
          <router-link v-bind:to="item.path">
            {{ item.title }}
          </router-link>
        </li>
      </ol>
    </nav>
  </div>
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
    };
  },
};
</script>

<style scoped>
 * {
   margin: 0;
   padding: 0;
}
.header {
  display: flex;
  height: 60px;
  align-items: center;
  padding: 30px 0;
  background-color: #8197a6;
  color: #ffffff;
}
h1 {
  padding-left: 40px;
}
nav {
  margin-left: auto;
}
ol {
  list-style: none;
  margin: auto 40px auto 0;
  padding: 10px 0;

}

li {
  font-size: 18px;
  color: #ffffff;

}
li:hover {
  opacity: 0.6;
}
/* router-linkの部分 */
a {
  text-decoration: none;
  color: #ffffff;
}
</style>
