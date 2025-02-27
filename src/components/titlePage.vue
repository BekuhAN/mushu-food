<template>
  <section class="title_page">
    <h1 class="title">
      <router-link to="/">Главная</router-link>&nbsp; / {{ title }}
    </h1>
  </section>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="scss">
.title_page {
  padding-top: 125px;
  .title {
    height: 90px;
    display: flex;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    font-family: "Montserrat";
    text-transform: capitalize;
    background: #e1c0ac;
    font-weight: 500;
  }
}
</style>
