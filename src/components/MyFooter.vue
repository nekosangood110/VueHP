<template>
<v-app>
    <v-footer>
        <v-col class="white--text" >&copy; 2020 - {{ new Date().getFullYear() }} chika</v-col>
    </v-footer>
  </v-app>
</template>


<script>
export default {
  name: "MyFooter",
};
</script>

<style>
.v-footer {
  background: linear-gradient(-100deg, #8197A6, #F2D1C9);
  margin-top: auto;
  text-align: center;
}
</style>