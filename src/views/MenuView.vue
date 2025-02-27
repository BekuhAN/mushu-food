<template>
  <main class="menu">
    <Title :title="'Меню'" />
    <div class="container">
      <div class="row menu__wrapper">
        <div class="col-20 categories">
          <div
            class="categories__item"
            @click="setActiveCategory(0)"
            :class="{ active: activeCategory === 0 }"
          >
            Популярное
          </div>
          <div
            class="categories__item"
            v-for="cat in getCategories"
            :key="cat.id"
            @click="setActiveCategory(cat)"
            :class="{ active: activeCategory === cat.id }"
          >
            {{ cat.name }}
          </div>
        </div>
        <div class="col-80 menu__list row">
          <div class="col-25 menu__item" v-for="item in getMenu" :key="item.id">
            <MenuItem :item="item" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Title from "../components/titlePage.vue";
import MenuItem from "../components/menuItem.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      activeCategory: 0,
      params: {
        popular: true,
      },
    };
  },
  components: {
    Title,
    MenuItem,
  },
  async beforeMount() {
    await this.setMenu(this.params);
    await this.setCategories();
  },
  methods: {
    ...mapActions(["setMenu", "setCategories"]),
    setActiveCategory(cat) {
      if (cat === 0) {
        this.params.popular = true;
        delete this.params.categoryId;
        this.activeCategory = 0;
      } else {
        this.params.categoryId = cat.id;
        delete this.params.popular;
        this.activeCategory = cat.id;
      }
      this.setMenu(this.params);
    },
  },
  computed: {
    ...mapGetters(["getMenu", "getCategories"]),
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.menu {
  &__wrapper {
    padding: 100px 0;
  }
  &__item {
    margin-bottom: 30px;
  }
  .categories {
    &__item {
      font-size: 24px;
      font-family: "Montserrat";
      margin-bottom: 30px;
      color: $red;
      cursor: pointer;
      &.active {
        color: #333;
        text-decoration: underline;
      }
    }
  }
}
</style>
