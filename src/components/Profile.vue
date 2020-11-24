<template>
  <div class="contents">
    <div class="profile">
      <h1>About</h1>
      <div class="img_wrap">
        <p><img src="@/assets/img1.jpg" /></p>
      </div>
      <div class="about">
        <div class="my-profile">
          <div class="my-profile-title">profile</div>
          <ul>
            <li><span class="profile-space">Name:</span> Chikako Ono</li>
            <li><span class="profile-space">Birthplace:</span> Nara</li>
            <li><span class="profile-space">Birth:</span> 2001-03-14</li>
            <li><span class="profile-space">Hobby:</span> Cafe-hopping, Ride a bike</li>
          </ul>
              <p>フロントエンジニア志望です！</p>
              <p>最近はPhotoshopやVueが楽しくてお気に入り...</p>
        </div>
        <div class="sns">
          <div class="sns-title">SNS</div>
            <a href="https://twitter.com/?lang=ja" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://github.com/nekosangood110" target="_blank"><i class="fab fa-github"></i></a>
        </div>
        <div class="skill">
          <div class="skill-title">skill</div>
          <i class="fab fa-html5"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-sass"></i>
          <i class="fab fa-js-square"></i>
          <i class="fab fa-vuejs"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style scoped>
h1 {
  color: #8197a6;
  border-bottom: solid 2px #8197a6;
  margin: 30px;
  font-weight: 400;
}
.contents {
  margin-left: 250px;
}
.profile {
  margin-bottom: 20px;
}
img {
  margin-left: 50px;
  width: 250px;
  height: 250px;
  cursor: pointer;
  border-radius: 50%;
}
ul {
  list-style: none;
  margin-bottom: 30px;
}
.my-profile-title {
  color: #8197a6;
  font-size: 24px;
}
.sns {
  margin: 20px 0 20px 0;
}
.skill {
  margin-bottom: 80px;
}
.skill-title {
  color: #8197a6;
  font-size: 24px;
}
span.profile-space {
  padding-right: 100px;
}

.sns-title {
  color: #8197a6;
  font-size: 24px;
}
span {
  margin: 0 10px;
}
.fab {
  font-size: 3em;
  color: #8197a6;
  margin: 0 10px;
}
.far {
  font-size: 60px;
  color: #463e44;
}
</style>
