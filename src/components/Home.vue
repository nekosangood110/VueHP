<template>
<div>
    <section>
        <div id="container">
            <div class="home-title">Welcome</div>
            <div class="cover-slide inview">
                <img src="@/assets/img2.jpg"/>
            </div>
                <div class="home-text">
                    <p>ここに文字をいれる</p>
                    <p>ここに文字をいれる</p>
                    <p>ここに文字をいれる</p>
                    <p>ここに文字をいれる</p>
                    <p>ここに文字をいれる</p>
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
/* .container {
    display: flex;
} */
.home-title {
    color: #8197A6;
    font-size: 38px;
    text-align: center;
    padding: 40px 0 20px 0;
}
img {
    max-width: 100%;
    text-align: bottom;
    padding-left: 270px;
    

}
.cover-slide {
  position: relative;
  overflow: hidden;
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

.cover-slide.inview::after {
  opacity: 1;
  -webkit-animation-name: kf-cover-slide;
          animation-name: kf-cover-slide;
  -webkit-animation-duration: 1.6s;
          animation-duration: 1.6s;
  -webkit-animation-timing-function: ease-in-out;
          animation-timing-function: ease-in-out;
  -webkit-animation-delay: 0s;
          animation-delay: 0s;
  -webkit-animation-iteration-count: 1;
          animation-iteration-count: 1;
  -webkit-animation-direction: normal;
          animation-direction: normal;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

@-webkit-keyframes kf-cover-slide {
  0% {
    -webkit-transform-origin: left;
            transform-origin: left;
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
  }
  50% {
    -webkit-transform-origin: left;
            transform-origin: left;
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
  }
  50.1% {
    -webkit-transform-origin: right;
            transform-origin: right;
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
  }
  100% {
    -webkit-transform-origin: right;
            transform-origin: right;
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
  }
}

@keyframes kf-cover-slide {
  0% {
    -webkit-transform-origin: left;
            transform-origin: left;
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
  }
  50% {
    -webkit-transform-origin: left;
            transform-origin: left;
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
  }
  50.1% {
    -webkit-transform-origin: right;
            transform-origin: right;
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
  }
  100% {
      opacity: 1;
    -webkit-transform-origin: right;
            transform-origin: right;
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
  }
}
</style>