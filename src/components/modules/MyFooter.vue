<template>
<v-app>
    <v-footer>
        <v-col class="white--text" >&copy;  {{ new Date().getFullYear() }} chika</v-col>
    </v-footer>
  </v-app>
</template>


<script>
export default {
  name: "MyFooter",
}
</script>

<style>
.v-footer {
  background: linear-gradient(-100deg, #90A4AE, #FFCDD2);
  margin-top: auto;
  text-align: center;
}
div.v-application--wrap {
    min-height: 100%;
}
</style>