<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <router-link to="/" class="footer__logo"
          ><img src="../assets/logo.png"
        /></router-link>
        <ul class="footer__nav">
          <li
            class="footer__nav__item"
            v-for="item in getNavigation"
            :key="item.id"
          >
            <router-link class="footer__nav__link" :to="item.link">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
        <div class="footer__copyright">
          Copyright © 2025. Все права защищены.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["setNavigation"]),
  },
  beforeMount() {
    this.setNavigation();
  },
  computed: {
    ...mapGetters(["getNavigation"]),
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.footer {
  background: url("../assets/footer1.png") no-repeat;
  background-size: contain;
  &__wrapper {
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 120px;
  }

  &__nav {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 50px 0 20px;
    &__item {
      &:last-child {
        .footer__nav__link::before {
          display: none;
        }
      }
    }
    &__link {
      color: $red;
      font-family: "Montserrat";
      font-weight: 500;
      font-size: 18px;
      transition: 0.3s;
      position: relative;
      margin-right: 30px;
      &::before {
        content: "";
        position: absolute;
        width: 1px;
        height: 50%;
        top: 50%;
        transform: translateY(-50%);
        right: -15px;
        background: #333;
      }
      &:hover {
        color: #333;
      }
    }
  }
  &__copyright {
    color: #7a7a7a;
  }
}
</style>
