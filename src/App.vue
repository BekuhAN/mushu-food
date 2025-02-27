<template>
  <Header v-if="['login'].indexOf($route.name)" />
  <router-view />
  <Footer v-if="['login'].indexOf($route.name)" />
</template>

<script>
import Header from "./components/headerPage.vue";
import Footer from "./components/footerPage.vue";
export default {
  components: { Header, Footer },
};
</script>

<style lang="scss">
@import "./styles/global.scss";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: #333;
  text-decoration: none;
  transition: inherit;
  &:hover {
    text-decoration: none;
  }
  &::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: #f8f8f8;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f8f8f8;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: $red;
  }
}
#app {
  position: relative;
}

body {
  overflow-x: hidden;
  font-family: "Roboto", sans-serif;
}

.btn {
  border: 2px solid $red;
  font-family: "Montserrat";
  font-weight: 500;
  padding: 15px 50px;
  font-size: 24px;
  transition: 0.3s;
  &:hover {
    background: $red;
    color: #fff;
  }
}

.section_title {
  font-size: 42px;
  font-family: "Montserrat";
  margin-bottom: 50px;
  text-transform: capitalize;
}
</style>
