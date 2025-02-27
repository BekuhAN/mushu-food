<template>
  <main>
    <HomeSlider />
    <HomeAbout />
    <HomePopular />
    <HomeSteps />
    <HomeComments />
    <HomeContacts />
  </main>
</template>

<script>
import HomeSlider from "../components/homeSlider.vue";
import HomeAbout from "../components/homeAbout.vue";
import HomePopular from "../components/homePopular.vue";
import HomeSteps from "../components/homeSteps.vue";
import HomeComments from "../components/homeComments.vue";
import HomeContacts from "../components/homeContacts.vue";
export default {
  name: "HomeView",
  components: {
    HomeSlider,
    HomeAbout,
    HomePopular,
    HomeSteps,
    HomeComments,
    HomeContacts,
  },
};
</script>
