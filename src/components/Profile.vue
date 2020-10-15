<template>
  <div class="contents">
    <div class="profile">
      <h2>About</h2>
      <div class="img_wrap">
      <p><img src="@/assets/img1.jpg" /></p>
      </div>
      <div class="my-profile">
        <p>profile</p>
        <ul>
          <li><span class="">Name:</span> Chikako Ono</li>
          <li><span class="">Birthplace:</span> Nara</li>
          <li><span class="">Birth:</span> 2001-03-14</li>
          <li><span class="">Hobby:</span> Cafe-hopping, Ride a bike</li>
        </ul>
        <div class="skills">
          <p><v-icon name="beer"/></p>
        </div>
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
h2{
  color: #8197A6;
  border-bottom: solid 2px #8197A6;
  margin-bottom: 80px;
  font-weight: 400;
}
.contents {
  margin-left: 250px;
}
ul {
  list-style: none;

}
p {
  font-size: 24px;
  color: #8197A6;
}
img {
  margin-left: 50px;
  width: 200px;
  height: 200px;
  cursor: pointer;
  border-radius: 50%;
}
img:hover {
  transform:rotate(360deg);
  transition-duration: 2s;
}
span {
  margin: 0 10pxa;
}
</style>