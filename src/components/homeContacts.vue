<template>
  <section class="contacts">
    <div class="container">
      <div class="row">
        <div class="col-45">
          <div class="contacts__list">
            <div class="contacts__list__item">
              <div class="contacts__list__item__icon">
                <Icon icon="gravity-ui:smartphone" />
              </div>
              <div class="contacts__list__item__text">+7 (900) 200-20-10</div>
            </div>
            <div class="contacts__list__item">
              <div class="contacts__list__item__icon">
                <Icon icon="gravity-ui:envelope" />
              </div>
              <div class="contacts__list__item__text">info@mushu.ru</div>
            </div>
            <div class="contacts__list__item">
              <div class="contacts__list__item__icon">
                <Icon icon="gravity-ui:map-pin" />
              </div>
              <div class="contacts__list__item__text">
                г. Краснодар, улица Селезнёва, 102
              </div>
            </div>
            <div class="contacts__list__item time">
              <div class="contacts__list__item__icon">
                <Icon icon="gravity-ui:clock" />
              </div>
              <div class="contacts__list__item__text">
                ПН-ЧТ: 11:00-23:00 <br />
                ПТ-СБ: 11:00 - 01:00 <br />
                ВС: Закрыты
              </div>
            </div>
          </div>
          <div class="contacts__social">
            <a href="https://telegram.org/" class="contacts__social__item"
              ><Icon icon="cib:telegram-plane" /></a
            ><a href="https://ok.ru/" class="contacts__social__item"
              ><Icon icon="cib:odnoklassniki" /></a
            ><a href="https://vk.com/" class="contacts__social__item"
              ><Icon icon="cib:vk" /></a
            ><a href="https://www.whatsapp.com/" class="contacts__social__item"
              ><Icon icon="cib:whatsapp"
            /></a>
          </div>
        </div>
        <div class="col-55">
          <div class="contacts__map" @click="mapActive">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A40a14d11c37f159f2d60820aeec854ee6f61e5d6abcbe48238039dbc5a96273f&amp;source=constructor"
              width="100%"
              height="400"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  data() {
    return {};
  },
  methods: {
    mapActive() {
      const map = document.querySelector(".contacts__map iframe");
      map.style.pointerEvents = "all";
    },
  },
  components: { Icon },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.contacts {
  padding: 100px 0;
  &__list {
    position: relative;
    &::before {
      content: "Контактная информмация";
      position: absolute;
      transform-origin: left top;
      transform: rotateZ(-90deg) translateX(-100%);
      left: 0px;
      top: 15px;
      text-transform: capitalize;
      color: #9c7f4e;
      font-size: 14px;
    }
    &__item {
      display: flex;
      line-height: 3;
      padding-left: 120px;
      &__icon {
        font-size: 24px;
        svg path {
          fill: #9c7f4e;
        }
      }
      &__text {
        align-self: center;
        margin-left: 30px;
      }
      &.time {
        margin-top: 30px;
        position: relative;
        &::before {
          content: "Режим работы";
          position: absolute;
          transform-origin: left top;
          transform: rotateZ(-90deg) translateX(-100%);
          left: -10px;
          top: 15px;
          text-transform: capitalize;
          color: #9c7f4e;
          font-size: 14px;
        }
      }
    }
  }
  &__social {
    margin-top: 50px;
    padding-left: 120px;
    position: relative;
    &::before {
      content: "Наши соц. сети";
      position: absolute;
      transform-origin: left top;
      transform: rotateZ(-90deg) translateX(-100%);
      left: 0px;
      top: -15px;
      text-transform: capitalize;
      color: #9c7f4e;
      font-size: 14px;
    }
    &__item {
      margin-right: 20px;
      font-size: 32px;
      transition: 0.3s;
      svg path {
        fill: #9c7f4e;
      }
      &:hover {
        svg path {
          fill: $red;
        }
      }
    }
  }
  &__map {
    position: relative;
    &::before {
      position: absolute;
      content: "";
      background: url("../assets/shape5.png") no-repeat;
      background-size: 100% auto;
      width: 100%;
      height: 100%;
      left: -50px;
      top: 50px;
      z-index: -1;
    }
  }
}
</style>
