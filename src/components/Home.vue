<template>
<div>
    <section>
        <div id="container">
            <div class="home-title">Thank you for visiting this page!</div>
            <div class="cover-slide inview">
                <img src="@/assets/img2.jpg"/>
            </div>
                <div class="home-text">
                        
                </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: "Home",
    data () {
        
    }
};
</script>

<style scoped>
.home-title {
    color: #8197A6;
    font-size: 38px;
    text-align: center;
    padding: 40px 0 20px 0;
}
img {
    max-width: 100%;
    text-align: bottom;
    

}
.cover-slide {
  position: relative;
  overflow: hidden;
  text-align: center;
}

.cover-slide::after {
  content: "";
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eaebe6;
  opacity: 0;
}
</style>