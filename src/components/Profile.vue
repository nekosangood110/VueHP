<template>
  <div class="contents">
    <div class="profile">
      <h1>About</h1>
      <div class="img_wrap">
        <p><img src="@/assets/img1.jpg"/></p>
      </div>
      <div class="about">
        <div class="my-profile">
        <div class="my-profile-title">profile</div>
        <ul>
          <li><span class="profile-space">Name:</span> Chikako Ono</li>
          <li><span class="profile-space">Birthplace:</span> Nara</li>
          <li><span class="profile-space">Birth:</span> 2001-03-14</li>
          <li>
            <span class="profile-space">Hobby:</span> Cafe-hopping, Ride a bike
          </li>
        </ul>
        </div>
        <div class="sns">
          <div class="sns-title">SNS</div>
            <i class="fab fa-github"></i>
            <i class="fab fa-twitter"></i>
        </div>

        <div class="skill-title">skill</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {},
};
</script>

<style scoped>
h1 {
  color: #8197a6;
  border-bottom: solid 2px #8197a6;
  margin: 30px 0 80px 0;
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
  margin-bottom: 50px;
}
.my-profile-title {
  color: #8197a6;
  font-size: 24px;
}
.sns {
  margin-bottom: 20px;
}
.skill-title {
  color: #8197a6;
  font-size: 24px;
}
span.profile-space {
  padding-right: 100px;
}

.sns-title {
  color:  #8197a6;
  font-size: 24px;
}
img:hover {
  transform: rotate(360deg);
  transition-duration: 2s;
  
}
span {
  margin: 0 10px;

}
.fab {
  font-size: 3em;
  color: #8197a6;
  margin: 0 10px;
}

</style>