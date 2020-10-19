<template>
  <div class="footer">
    <div class="copyright">
      <p>&copy;2020 chika</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "MyFooter",
  // data() {

  // }
};
</script>


<style scoped>
.footer {
  background: linear-gradient(-100deg, #8197A6, #F2D1C9);
  box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.3);
  margin-top: auto;
  align-items: flex-end;
  padding: 30px 0;
}
.copyright p {
  margin: 0;
  color: #FFFFFF;
  font-size: 16px;
  text-align: center;

}
</style>