<template>
  <v-app>
    <v-card-text
      style="font-size: 2em"
      class="blue-grey--text text--lighten-2 text-center my-10"
      >About</v-card-text
    >
    <v-layout justify-center>
      <img src="@/assets/img1.jpg" />
    </v-layout>

    <v-card-text
      style="font-size: 1.5em"
      class="blue-grey--text text--lighten-2 text-center my-10"
      >profile</v-card-text
    >
    <ul>
      <li><span class="profile-space">Name:</span> Chikako Ono</li>
      <li><span class="profile-space">Birthplace:</span> Nara</li>
      <li><span class="profile-space">Birth:</span> 2001-03-14</li>
      <li><span class="profile-space">Hobby:</span>Ride a bike, coffee hop</li>
    </ul>
    <p style="font-size: 1em" class="text-center mt-10">
      フロントエンジニア志望です！<br />
      最近はVueやphotoshopが楽しくてお気に入りです。
    </p>

    <v-card-text
      style="font-size: 1.5em"
      class="blue-grey--text text--lighten-2 text-center my-10"
      >SNS</v-card-text
    >
      <div>
      <a href="https://twitter.com/?lang=ja" target="_blank"
        ><i class="fab fa-twitter"></i
      ></a>
      <a href="https://github.com/nekosangood110" target="_blank"
        ><i class="fab fa-github"></i
      ></a>
      </div>

    
    <v-card-text
      style="font-size: 1.5em"
      class="blue-grey--text text--lighten-2 text-center my-10"
      >Skill</v-card-text
    >
    <div>
      <i class="fab fa-html5"></i>
      <i class="fab fa-css3-alt"></i>
      <i class="fab fa-sass"></i>
      <i class="fab fa-js-square"></i>
      <i class="fab fa-vuejs"></i>
    </div>
    
  </v-app>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style scoped>
/* きいてない！ */
v-app .v-card-text {
  border-bottom: solid 2px #90a4ae;
}
img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
}
ul {
  list-style: none;
  text-align: center;
}
.v-application ul,
.v-application ol {
  padding-left: 0;
}
span {
  margin: 0 20px;
}
div {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}
i {
  padding: 0 8px;
}
.fab {
  font-size: 4em;
  color: #90a4ae;
  margin: 0 auto;
}
</style>
