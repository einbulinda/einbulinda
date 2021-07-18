<template>
  <NavbarMenu />
  <router-view />
</template>

<script>
import NavbarMenu from "@/components/NavbarMenu.vue";

export default {
  components: { NavbarMenu },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #eee;
}
a {
  text-decoration: none;
  color: #eee;
}
html {
  font-size: 10px;
  font-family: "Roboto Cn", sans-serif;
}
body {
  height: 100vh;
  background: linear-gradient(
      to top right,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.6)
    ),
    url("./assets/einbulinda2e.png") center no-repeat;
  background-size: cover;
}
</style>