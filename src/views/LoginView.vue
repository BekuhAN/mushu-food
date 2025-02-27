<template>
  <main class="login">
    <div class="login__wrapper">
      <router-link to="/" class="login__logo">
        <img src="../assets/logo.png" alt="" />
      </router-link>
      <div class="login__inner">
        <label for="name" class="login__item">
          <div class="login__item__title">Логин:</div>
          <input id="name" type="text" v-model="user.login" />
        </label>
        <label for="password" class="login__item">
          <div class="login__item__title">Пароль:</div>
          <input id="password" type="password" v-model="user.password" />
        </label>
        <div class="login__controls">
          <div class="login__controls__item" @click="login">Войти</div>
          <router-link to="/" class="login__controls__item">Отмена</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        login: "",
        password: "",
      },
      users: null,
    };
  },
  methods: {
    async getUsers() {
      const { data } = await axios.get("http://localhost:3000/users");
      this.users = data;
    },
    async login() {
      await this.getUsers();
      for (let i = 0; i < this.users.length; i++) {
        if (
          this.user.login == this.users[i].login &&
          this.user.password == this.users[i].password
        ) {
          localStorage.setItem("isAdmin", true);
          this.$router.push({ name: "admin" });
        } else {
          alert("Не верно введены данные!");
          this.user.login = "";
          this.user.password = "";
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f8f8f8;
  &__inner {
    background: #fff;
    padding: 30px;
    font-family: "Montserrat";
    box-shadow: 0 1px 3px rgb(0 0 0 / 13%);
  }
  &__item {
    display: block;
    margin-bottom: 30px;
    &__title {
      margin-bottom: 10px;
    }
    input {
      background: #f8f8f8;
      border: 1px solid #cacaca;
      height: 30px;
      width: 100%;
      outline: none;
      padding-left: 10px;
      &:focus {
        border-color: $red;
        box-shadow: 0 0 2px rgba($red, 0.8);
      }
    }
  }
  &__logo {
    min-width: 300px;
    max-width: 300px;
    display: block;
    margin-bottom: 30px;
    img {
      width: 100%;
    }
  }
  &__controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__item {
      padding: 10px 20px;
      border: 2px solid $red;
      cursor: pointer;
      transition: 0.3s;
      &:first-child {
        background: $red;
        color: #fff;
        &:hover {
          background: #fff;
          color: #333;
        }
      }
      &:last-child {
        &:hover {
          background: $red;
          color: #fff;
        }
      }
    }
  }
}
</style>
