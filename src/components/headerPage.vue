<template>
  <header class="header">
    <div class="container header__inner">
      <a href="/" class="header__logo"> <img src="../assets/logo.png" /></a>
      <ul class="navigation">
        <li
          class="navigation__item"
          v-for="item in getNavigation"
          :key="item.id"
        >
          <router-link class="navigation__link" :to="item.link">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
      <CartPage />
      <router-link
        to="/admin"
        class="header__out"
        v-if="admin"
        title="Управление"
      >
        <Icon icon="gravity-ui:gear" />
      </router-link>
      <div class="header__out" v-if="admin" title="Выход" @click="logout">
        <Icon icon="gravity-ui:arrow-right-from-square" />
      </div>
    </div>
  </header>
</template>

<script>
import { Icon } from "@iconify/vue";
import { mapGetters, mapActions } from "vuex";
import CartPage from "../components/cartPage.vue";
export default {
  data() {
    return {
      admin: false,
    };
  },
  methods: {
    ...mapActions(["setNavigation"]),
    logout() {
      delete localStorage.isAdmin;
      this.admin = false;
      this.$router.push({ name: "home" });
    },
  },
  beforeMount() {
    this.setNavigation();
    if (localStorage.isAdmin) {
      this.admin = true;
    }
  },
  computed: {
    ...mapGetters(["getNavigation"]),
  },
  components: { CartPage, Icon },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 10;
  &__inner {
    display: flex;
    align-items: center;
  }
  &__logo {
    transition: 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
  .navigation {
    display: flex;
    align-items: center;
    margin-left: auto;
    list-style: none;
    &__item {
      padding: 50px 0;
    }
    &__link {
      font-family: "Montserrat";
      text-transform: uppercase;
      margin-left: 30px;
      font-size: 20px;
      font-weight: bold;
      position: relative;
      color: #333;
      &::before {
        position: absolute;
        left: 50%;
        bottom: -5px;
        content: "";
        height: 2px;
        width: 0;
        background: #333;
        transition: 0.2s;
      }
      &:hover {
        &::before {
          left: 0;
          width: 100%;
        }
      }
      &.router-link-exact-active {
        &::before {
          left: 0;
          width: 100%;
        }
      }
    }
  }
  .cart {
    font-size: 24px;
    margin-left: 50px;
    transition: 0.2s;
    &:hover {
      svg path {
        fill: $red;
      }
    }
  }
  &__out {
    position: relative;
    font-size: 20px;
    transition: 0.2s;
    margin-left: 30px;
    &:hover {
      path {
        fill: $red;
      }
    }
  }
}
</style>
