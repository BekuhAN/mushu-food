<template>
  <section class="form">
    <div class="container form__wrapper">
      <div class="section_title">Связаться с нами</div>
      <form class="form__inner row" @submit.prevent="sendEmail">
        <label for="contacts_name" class="form__inner__item col-50"
          ><Icon icon="gravity-ui:person" class="form__inner__icon" /><input
            required
            name="contacts_name"
            placeholder="Ваше имя"
            type="text" /></label
        ><label for="contacts_phone" class="form__inner__item col-50">
          <Icon icon="gravity-ui:smartphone" class="form__inner__icon" />
          <MaskInput
            mask="+7 (###) ###-##-##"
            required
            type="phone"
            id="contacts_phone"
            placeholder="Ваш номер"
            name="contacts_phone"
          /> </label
        ><label for="contacts_email" class="form__inner__item col-50"
          ><Icon icon="gravity-ui:envelope" class="form__inner__icon" /><input
            name="contacts_email"
            type="email"
            placeholder="Ваша почта" /></label
        ><label for="contacts_theme" class="form__inner__item col-50"
          ><Icon
            icon="gravity-ui:circle-info"
            class="form__inner__icon" /><input
            name="contacts_theme"
            type="text"
            placeholder="Темя письма"
        /></label>
        <label class="form__inner__item message col-100"
          ><Icon icon="gravity-ui:pencil" class="form__inner__icon" />
          <textarea
            name="contacts_message"
            required
            placeholder="Сообщение"
          ></textarea>
        </label>
        <input class="form__inner__send btn" type="submit" value="Отправить" />
        <div class="form__inner__success" v-if="isSuccess">
          <img src="../assets/success.png" />
        </div>
        <div class="form__inner__error" v-if="isError">
          <img src="../assets/error.png" />
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { Icon } from "@iconify/vue";
import { MaskInput } from "vue-3-mask";
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      isSuccess: false,
      isError: false,
    };
  },
  components: {
    MaskInput,
    Icon,
  },
  methods: {
    sendEmail(e) {
      //webfok@bvioc.vip
      const self = this;
      emailjs
        .sendForm(
          "service_huxonpn",
          "template_ysuxde5",
          e.target,
          "S8ew4eaMpCJLGSm9O"
        )
        .then(
          (result) => {
            self.isSuccess = true;
            e.target.reset();
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            self.isError = true;
            e.target.reset();
            console.log("FAILED...", error);
          }
        );
    },
  },
  watch: {
    isSuccess: function () {
      const self = this;
      setTimeout(() => {
        self.isSuccess = false;
      }, 2000);
    },
    isError: function () {
      const self = this;
      setTimeout(() => {
        self.isError = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.form {
  width: 50vw;
  margin: 100px auto;
  &__inner {
    position: relative;
    &__item {
      position: relative;
      height: 50px;
      margin-bottom: 30px;
      input,
      textarea {
        padding-left: 70px;
        line-height: 1;
        width: 100%;
        max-width: 100%;
        min-width: 100%;
        height: 100%;
        font-family: "Montserrat";
        border: none;
        outline-color: $red;
      }
      textarea {
        height: 100px;
        max-height: 100px;
        min-height: 100px;
        padding-top: 20px;
      }
      &::placeholder {
        color: #ded6d4;
      }
      &.message {
        height: 100px;
      }
      &:hover,
      &:focus {
        &::after {
          width: calc(100% - 30px);
        }
      }
      &::before,
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 15px;
        height: 1px;
        transition: 0.5s ease-in-out;
      }
      &::before {
        width: calc(100% - 30px);
        background: #ded6d4;
      }
      &::after {
        width: 0;
        background: $red;
      }
    }
    &__icon {
      position: absolute;
      font-size: 20px;
      top: 0;
      left: 30px;
      transform: translateY(75%);
      path {
        fill: #9c7f4e;
      }
    }
    &__send {
      margin-left: 15px;
      background: none;
    }
    &__success,
    &__error {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(#fff, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100px;
      }
    }
  }
}
</style>
