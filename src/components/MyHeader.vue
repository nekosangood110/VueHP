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
@media screen and (min-width:0px){
  /*0px以上で適用する内容*/
    header {
    padding: 48px 0;
    height: 120px;
  }
  h1 {
    font-size: 20px;
  }
  li {
    padding-left: 40px;
    font-size: 16px;
  }
}

@media screen and (min-width:300px){
  /*300px以上で適用する内容*/
   .header {
    padding: 48px 0;
    height: 120px;
  }
  h1 {
    font-size: 16px; 
  }
  li {
    font-size: 15px;
  }
}

@media screen and (min-width:600px){
  /*600px以上で適用する内容*/
  .header {
    padding: 48px 0;
  }
}
body {
  width: 100%;
}
* {
  margin: 0;
  padding: 0;
}
html {
    height: 100%;
    margin: 0;
  }
body {
  height: 100%;
  width: 100%;
}
.header {
  display: flex;
  align-items: center;
  height: 50px; 
  background: linear-gradient(-100deg, #8197a6, #f2d1c9);
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.3);
  color: #ffffff;
}
h1 {
  padding-left: 40px;
  font-size: 26px;
  font-weight: 100;
  letter-spacing: 2px;
  white-space: nowrap;
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
