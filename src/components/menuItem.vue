<template>
  <div class="menu_item">
    <figure @click="showModal" class="menu_item__image">
      <img :src="require('../assets/' + item.image)" alt="" />
    </figure>
    <div @click="showModal" class="menu_item__title">{{ item.title }}</div>
    <div class="menu_item__weight" v-if="item.info[0]">
      {{ item.info[0].value }}
    </div>
    <div class="menu_item__description">{{ item.description }}</div>
    <div class="menu_item__buy">
      <div class="menu_item__price">{{ item.price }} ₽</div>
      <div class="menu_item__btn" @click="addCartItem(item)">
        <Icon icon="gravity-ui:shopping-cart" />
      </div>
    </div>
    <div class="menu_item__modal" v-if="modalVisible">
      <div class="menu_item__modal__wrapper">
        <div @click="showModal" class="menu_item__modal__close">
          <Icon icon="gravity-ui:circle-xmark" />
        </div>
        <figure class="menu_item__modal__image">
          <img :src="require('../assets/' + item.image)" alt="" />
        </figure>
        <div class="menu_item__modal__content">
          <div class="menu_item__modal__title">{{ item.title }}</div>
          <div class="menu_item__modal__description">
            {{ item.description }}
          </div>
          <div class="menu_item__modal__info" v-if="item.info.length > 0">
            <div
              class="menu_item__modal__info__item"
              v-for="(itemInfo, index) in item.info"
              :key="itemInfo.value + index"
            >
              <div class="menu_item__modal__info__item__title">
                {{ itemInfo.name }}
              </div>
              <div class="menu_item__modal__info__item__value">
                {{ itemInfo.value }}
              </div>
            </div>
          </div>
          <div class="menu_item__modal__buy">
            <div class="menu_item__modal__price">{{ item.price }} ₽</div>
            <div class="menu_item__modal__btn" @click="addCartItem(item)">
              В корзину
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { mapActions } from "vuex";
export default {
  props: ["item"],
  data() {
    return {
      modalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.modalVisible = !this.modalVisible;
    },
    ...mapActions(["addCartItem"]),
  },
  components: {
    Icon,
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.menu_item {
  padding: 24px;
  border: 2px solid #f1f1f1;
  height: 500px;
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  &:hover {
    border-color: #333;
  }
  &__image {
    overflow: hidden;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 100%;
    }
  }
  &__title {
    font-family: "Montserrat";
    font-size: 18px;
    font-weight: 600;
    margin: 15px 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1;
  }
  &__weight {
    color: #a8a7a8;
    font-family: "Montserrat";
    margin-bottom: 15px;
    font-size: 14px;
  }
  &__description {
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 30px;
    color: #7a7a7a;
  }
  &__buy {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
  }
  &__price {
    font-size: 28px;
    font-family: "Montserrat";
    font-weight: 200;
  }
  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid $red;
    height: 40px;
    width: 40px;
    transition: 0.3s;
    &:hover {
      background: $red;
      svg path {
        fill: #fff;
      }
    }
  }
  &__modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 16;
    background: rgba(#000, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    &__wrapper {
      width: 50vw;
      min-height: 260px;
      max-height: 400px;
      position: relative;
      background: #f1f1f1;
      padding: 30px;
      display: flex;
    }
    &__close {
      position: absolute;
      right: -30px;
      top: -40px;
      font-size: 32px;
      cursor: pointer;
      &:hover {
        svg path {
          fill: $red;
        }
      }
      svg path {
        fill: #fff;
      }
    }
    &__image {
      max-width: 280px;
      min-width: 280px;
      height: 200px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 100%;
      }
    }
    &__content {
      margin-left: 50px;
    }
    &__title {
      font-family: "Montserrat";
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    &__description {
      color: #7a7a7a;
      margin-bottom: 20px;
    }
    &__info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      &__item {
        &__title {
          font-family: "Montserrat";
          font-weight: bold;
        }
        &__value {
          font-family: "Montserrat";
        }
      }
    }
    &__buy {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__price {
      font-size: 24px;
      font-family: "Montserrat";
      font-weight: 200;
    }
    &__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid $red;
      height: 40px;
      width: 120px;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        background: $red;
        color: #fff;
      }
    }
  }
}
</style>
