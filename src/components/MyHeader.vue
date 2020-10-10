<template>
  <header>
    <div>chika's page.</div>
    <div>
      <ol>
        <li v-for="(item, index) in items" :key="index">
          <router-link v-bind:to="item.path">
            {{ item.title }}
          </router-link>
        </li>
      </ol>
    </div>
  </header>
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
header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #8197a6;
  color: #ffffff;
  padding: 10px 0 0 30px;
  margin-bottom: 0;
  font-size: 23px;
}

ol {
  display: flex;
  /* align-items: center; */
  padding: 0 40px 0 0;
  margin: 0 0 0 15px;
  list-style: none;
}

li {
  padding: 0 10px;
  text-align: center;
  height: 0 20px;
  font-size: 17px;
  /* font-family: Arial, Helvetica, sans-serif; */
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
