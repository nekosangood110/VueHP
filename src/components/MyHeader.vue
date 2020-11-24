<template>
  <div class="header">
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

@media screen and (max-width: 896px) {
  .header {
    padding: 48px 0;
    height: 50px;
  }
}
@media screen and (max-width: 480px) {
  .header {
    padding: 48px 0;
    height: 120px;
  }
}
  h1 {
    padding-left: 0px;
  }

* {
  margin: 0;
  padding: 0;
}
.header {
  display: flex;
  align-items: center;
  padding: 48px 0;
  height: 50px;
  background: linear-gradient(-100deg, #8197a6, #f2d1c9);
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.3);

  color: #ffffff;
}
h1 {
  padding-left: 40px;
  font-weight: 100;
  letter-spacing: 2px;
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
