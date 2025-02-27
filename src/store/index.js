import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    navigation: [],
    menu: [],
    categories: [],
    cart: [],
  },
  getters: {
    getNavigation(state) {
      return state.navigation;
    },
    getMenu(state) {
      return state.menu;
    },
    getCategories(state) {
      return state.categories;
    },
    getCart(state) {
      return state.cart;
    },
  },
  mutations: {
    updateNavigation(state, payload) {
      state.navigation = payload;
    },
    updateMenu(state, payload) {
      state.menu = payload;
    },
    updateCategories(state, payload) {
      state.categories = payload;
    },
    updateCart(state, payload) {
      state.cart = payload;
    },
  },
  actions: {
    async setNavigation({ commit }) {
      const { data } = await axios.get("http://localhost:3000/navigation");
      commit("updateNavigation", data);
    },
    async setMenu({ commit }, params) {
      const { data } = await axios.get("http://localhost:3000/menu", {
        params,
      });
      commit("updateMenu", data);
    },
    async setCategories({ commit, state }) {
      state.isLoading = true;
      const resp = await axios.get(
        "http://localhost:3000/categories?_embed=menu"
      );
      commit("updateCategories", resp.data);
      state.isLoading = false;
    },
    addCartItem({ state, commit }, item) {
      commit("updateCart", [...state.cart, item]);
      alert("Добавлено!");
    },
    deleteCartItem({ state, commit }, item) {
      const arr = state.cart.filter((e) => e.id !== item.id);
      commit("updateCart", arr);
    },
    clearCart({ commit }) {
      commit("updateCart", []);
    },
  },
});
