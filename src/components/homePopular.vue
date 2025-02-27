<template>
  <section class="popular">
    <div class="container">
      <div class="section_title">Популярное из нашего меню</div>
      <div class="row popular__list" v-if="getMenu.length > 0">
        <div class="col-20" v-for="item in getMenu" :key="item.id">
          <MenuItem :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MenuItem from "./menuItem.vue";
export default {
  data() {
    return {
      params: {
        popular: true,
        _limit: 5,
      },
    };
  },
  methods: {
    ...mapActions(["setMenu"]),
  },
  async beforeMount() {
    await this.setMenu(this.params);
  },
  computed: {
    ...mapGetters(["getMenu"]),
  },
  components: {
    MenuItem,
  },
};
</script>

<style lang="scss">
.popular {
  padding-bottom: 200px;
  position: relative;
  .container {
    padding-left: 120px;
    &::before {
      content: "Прямиком с кухни";
      position: absolute;
      transform-origin: left top;
      transform: rotateZ(-90deg) translateX(-100%);
      left: 70px;
      top: 15px;
      text-transform: capitalize;
      color: #9c7f4e;
      font-size: 14px;
    }
  }
}
</style>
