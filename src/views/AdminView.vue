<template>
  <main class="admin">
    <div class="container">
      <div class="row">
        <div class="section_title col-100">Управление меню</div>
        <div class="admin__header col-100">
          <div class="add_menu_item">
            <span @click="showAddModal">Добавить в меню</span>
          </div>
          <div class="add_category">
            <span @click="showNewCategory">Добавить категорию</span>
            <div
              class="add_category__wrapper"
              :class="{ active: isNewCategory }"
            >
              <input
                type="text"
                placeholder="Наименование"
                v-model="newCategory"
                required
              />
              <Icon
                icon="gravity-ui:circle-plus"
                class="add_category__icon"
                @click="addedCategory"
              />
            </div>
          </div>
        </div>
        <div class="admin__categories col-20">
          <div
            class="admin__categories__item"
            v-for="cat in getCategories"
            :key="cat.id"
            :class="{ active: cat.id === activeCategory }"
            @click="setActiveCategory(cat)"
          >
            {{ cat.name }}

            <Icon
              icon="gravity-ui:trash-bin"
              class="admin__categories__item__icon"
              @click="deleteCategoryItem(cat)"
            />
          </div>
        </div>
        <div class="admin__menu col-80 row">
          <div class="col-50" v-for="item in getMenu" :key="item.id">
            <div class="admin__menu__item">
              <div class="admin__menu__item__image">
                <img :src="require('../assets/' + item.image)" />
              </div>
              <div class="admin__menu__item__content">
                <div class="admin__menu__item__title">{{ item.title }}</div>
                <div class="admin__menu__item__description">
                  {{ item.description }}
                </div>
                <div class="admin__menu__item__control">
                  <div
                    class="admin__menu__item__control__item edit"
                    @click="changeItem(item)"
                  >
                    Изменить
                  </div>
                  <div
                    class="admin__menu__item__control__item delete"
                    @click="deleteMenuItem(item)"
                  >
                    Удалить
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="change_modal" v-if="changeModal && changeMenuItem">
            <div class="change_modal__wrapper">
              <div @click="closeItem" class="change_modal__close">
                <Icon icon="gravity-ui:circle-xmark" />
              </div>
              <div class="change_modal__image">
                <img
                  v-if="changeMenuItem.image"
                  :src="require('../assets/' + changeMenuItem.image)"
                  alt=""
                />
                <img v-else :src="require('../assets/not.png')" alt="" />
                <label form="input_file" class="input_file">
                  <input type="file" id="input_file" @change="changeFile" />
                  <Icon icon="gravity-ui:arrow-shape-up-from-line" />
                  Выбрать изображение</label
                >
              </div>
              <div class="change_modal__content">
                <div class="change_modal__title">
                  <div class="change_modal__content__title">Наименование:</div>
                  <input
                    type="text"
                    name="menu_title"
                    v-model="changeMenuItem.title"
                  />
                </div>
                <div class="change_modal__description">
                  <div class="change_modal__content__title">Описание:</div>
                  <textarea
                    name="menu_description"
                    id=""
                    cols="30"
                    rows="10"
                    v-model="changeMenuItem.description"
                  ></textarea>
                </div>
                <div class="change_modal__info">
                  <div class="change_modal__info__item">
                    <div class="change_modal__info__item__title">
                      {{ changeMenuItem.info[0].name }}
                    </div>
                    <div class="change_modal__info__item__value">
                      <input
                        type="text"
                        v-model="changeMenuItem.info[0].value"
                      />
                    </div>
                  </div>
                  <div class="change_modal__info__item">
                    <div class="change_modal__info__item__title">
                      {{ changeMenuItem.info[1].name }}
                    </div>
                    <div class="change_modal__info__item__value">
                      <input
                        type="text"
                        v-model="changeMenuItem.info[1].value"
                      />
                    </div>
                  </div>
                  <div class="change_modal__info__item">
                    <div class="change_modal__info__item__title">
                      {{ changeMenuItem.info[2].name }}
                    </div>
                    <div class="change_modal__info__item__value">
                      <input
                        type="text"
                        v-model="changeMenuItem.info[2].value"
                      />
                    </div>
                  </div>
                  <div class="change_modal__info__item">
                    <div class="change_modal__info__item__title">
                      {{ changeMenuItem.info[3].name }}
                    </div>
                    <div class="change_modal__info__item__value">
                      <input
                        type="text"
                        v-model="changeMenuItem.info[3].value"
                      />
                    </div>
                  </div>
                  <div class="change_modal__info__item">
                    <div class="change_modal__info__item__title">
                      {{ changeMenuItem.info[4].name }}
                    </div>
                    <div class="change_modal__info__item__value">
                      <input
                        type="text"
                        v-model="changeMenuItem.info[4].value"
                      />
                    </div>
                  </div>
                </div>
                <div class="change_modal__price">
                  <div class="change_modal__content__title">Цена:</div>
                  <input
                    type="text"
                    name="menu_price"
                    v-model="changeMenuItem.price"
                  />
                  ₽
                </div>
                <div class="change_modal__category">
                  <div class="change_modal__content__title">Категория:</div>
                  <select
                    name="menu_category"
                    v-model="changeMenuItem.categoryId"
                  >
                    <option
                      :value="cat.id"
                      v-for="cat in getCategories"
                      :key="cat.id"
                    >
                      {{ cat.name }}
                    </option>
                  </select>
                </div>
                <div class="change_modal__control">
                  <div
                    class="change_modal__save change_modal__control__item"
                    @click="changedItem"
                  >
                    Сохранить
                  </div>
                  <div class="change_modal__cancel change_modal__control__item">
                    Отмена
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="add_modal" v-if="addModal">
            <div class="add_modal__wrapper">
              <div @click="showAddModal" class="add_modal__close">
                <Icon icon="gravity-ui:circle-xmark" />
              </div>
              <div class="add_modal__image">
                <img
                  v-if="addMenuItem.image"
                  :src="require('../assets/' + addMenuItem.image)"
                  alt=""
                />
                <img v-else :src="require('../assets/not.png')" alt="" />
                <label form="input_file" class="input_file">
                  <input type="file" id="input_file" @change="addFile" />
                  <Icon icon="gravity-ui:arrow-shape-up-from-line" />
                  Выбрать изображение</label
                >
              </div>
              <div class="add_modal__content">
                <div class="add_modal__title">
                  <div class="add_modal__content__title">Наименование:</div>
                  <input
                    type="text"
                    name="menu_title"
                    v-model="addMenuItem.title"
                  />
                </div>
                <div class="add_modal__description">
                  <div class="add_modal__content__title">Описание:</div>
                  <textarea
                    name="menu_description"
                    id=""
                    cols="30"
                    rows="10"
                    v-model="addMenuItem.description"
                  ></textarea>
                </div>
                <div class="add_modal__info">
                  <div class="add_modal__info__item">
                    <div class="add_modal__info__item__title">
                      {{ addMenuItem.info[0].name }}
                    </div>
                    <div class="add_modal__info__item__value">
                      <input type="text" v-model="addMenuItem.info[0].value" />
                    </div>
                  </div>
                  <div class="add_modal__info__item">
                    <div class="add_modal__info__item__title">
                      {{ addMenuItem.info[1].name }}
                    </div>
                    <div class="add_modal__info__item__value">
                      <input type="text" v-model="addMenuItem.info[1].value" />
                    </div>
                  </div>
                  <div class="add_modal__info__item">
                    <div class="add_modal__info__item__title">
                      {{ addMenuItem.info[2].name }}
                    </div>
                    <div class="add_modal__info__item__value">
                      <input type="text" v-model="addMenuItem.info[2].value" />
                    </div>
                  </div>
                  <div class="add_modal__info__item">
                    <div class="add_modal__info__item__title">
                      {{ addMenuItem.info[3].name }}
                    </div>
                    <div class="add_modal__info__item__value">
                      <input type="text" v-model="addMenuItem.info[3].value" />
                    </div>
                  </div>
                  <div class="add_modal__info__item">
                    <div class="add_modal__info__item__title">
                      {{ addMenuItem.info[4].name }}
                    </div>
                    <div class="add_modal__info__item__value">
                      <input type="text" v-model="addMenuItem.info[4].value" />
                    </div>
                  </div>
                </div>
                <div class="add_modal__price">
                  <div class="add_modal__content__title">Цена:</div>
                  <input
                    type="text"
                    name="menu_price"
                    v-model="addMenuItem.price"
                  />
                  ₽
                </div>
                <div class="add_modal__category">
                  <div class="add_modal__content__title">Категория:</div>
                  <select name="menu_category" v-model="addMenuItem.categoryId">
                    <option
                      :value="cat.id"
                      v-for="cat in getCategories"
                      :key="cat.id"
                    >
                      {{ cat.name }}
                    </option>
                  </select>
                </div>
                <div class="add_modal__control">
                  <div
                    class="add_modal__save add_modal__control__item"
                    @click="addItem"
                  >
                    Добавить
                  </div>
                  <div
                    class="add_modal__cancel add_modal__control__item"
                    @click="showAddModal"
                  >
                    Отмена
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Icon } from "@iconify/vue";
import axios from "axios";
export default {
  data() {
    return {
      activeCategory: 1,
      newCategory: "",
      isNewCategory: false,
      params: {
        categoryId: 1,
      },
      changeMenuItem: 0,
      addMenuItem: {
        title: "",
        image: "",
        description: "",
        price: "",
        categoryId: 1,
        popular: false,
        info: [
          {
            name: "Вес",
            value: "г",
          },
          {
            name: "Белки, г",
            value: "",
          },
          {
            name: "Жиры, г",
            value: "",
          },
          {
            name: "Углеводы, г",
            value: "",
          },
          {
            name: "Калории, ккал",
            value: "",
          },
        ],
      },
      changeModal: false,
      addModal: false,
      newImage: 0,
    };
  },
  methods: {
    ...mapActions(["setMenu", "setCategories"]),
    changeFile(e) {
      this.changeMenuItem.image = e.target.files[0].name;
    },
    addFile(e) {
      this.addMenuItem.image = e.target.files[0].name;
    },
    setActiveCategory(cat) {
      this.activeCategory = cat.id;
      this.params.categoryId = cat.id;
      this.setMenu(this.params);
    },
    async deleteMenuItem(item) {
      try {
        await axios.delete("http://localhost:3000/menu/" + item.id);
        await this.setMenu(this.params);
        alert("Удалено!");
      } catch (error) {
        alert(error);
      }
    },
    async deleteCategoryItem(cat) {
      try {
        await axios.delete("http://localhost:3000/categories/" + cat.id);
        await this.setCategories();
        this.activeCategory = 1;
        this.params.categoryId = 1;
        this.setMenu(this.params);
        alert("Удалено!");
      } catch (error) {
        alert(error);
      }
    },
    async changedItem() {
      await axios.patch(
        "http://localhost:3000/menu/" + this.changeMenuItem.id,
        this.changeMenuItem
      );
      this.closeItem();
      this.setMenu(this.params);
    },
    async addItem() {
      if (this.addMenuItem.image == "") {
        this.addMenuItem.image = "not.png";
      }
      await axios.post("http://localhost:3000/menu", this.addMenuItem);
      this.showAddModal();
      this.setMenu(this.params);
    },
    async addedCategory() {
      if (this.newCategory != "") {
        await axios.post("http://localhost:3000/categories", {
          name: this.newCategory,
        });
        this.showNewCategory();
        this.setCategories();
      } else {
        alert("Не введено название");
      }
    },
    changeItem(item) {
      this.changeMenuItem = item;
      this.changeModal = true;
    },
    closeItem() {
      this.changeMenuItem = 0;
      this.changeModal = false;
    },
    showAddModal() {
      this.addModal = !this.addModal;
    },
    showNewCategory() {
      this.isNewCategory = !this.isNewCategory;
    },
  },
  async beforeMount() {
    if (!localStorage.getItem("isAdmin")) {
      this.$router.push({ name: "login" });
    }
    await this.setCategories();
    await this.setMenu(this.params);
  },
  computed: {
    ...mapGetters(["getMenu", "getCategories"]),
  },
  components: { Icon },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.admin {
  padding-top: 125px;
  &__categories {
    &__item {
      font-size: 24px;
      font-family: "Montserrat";
      margin-bottom: 20px;
      cursor: pointer;
      &.active {
        color: $red;
        text-decoration: underline;
      }
      &:hover {
        .admin__categories__item__icon {
          transform: scale(1);
        }
      }
      &__icon {
        font-size: 18px;
        margin-left: 20px;
        transform: scale(0);
        transition: 0.3s;
        &:hover {
          path {
            fill: $red;
          }
        }
      }
    }
  }
  &__menu {
    &__item {
      display: flex;
      margin-bottom: 30px;
      &__image {
        min-width: 300px;
        max-width: 300px;
        margin-right: 30px;
        img {
          width: 100%;
        }
      }
      &__content {
        position: relative;
      }
      &__title {
        font-size: 24px;
        font-weight: bold;
        font-family: "Montserrat";
        margin-bottom: 20px;
      }
      &__description {
        color: #7a7a7a;
        line-height: 1.6;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      &__control {
        position: absolute;
        display: flex;
        left: 0;
        bottom: 5px;
        &__item {
          padding: 10px 30px;
          margin-right: 30px;
          border: 2px solid transparent;
          cursor: pointer;
          transition: 0.3s;
          font-family: "Montserrat";
          &.edit {
            border-color: #ffc107;
            &:hover {
              color: #fff;
              background: #ffc107;
            }
          }
          &.delete {
            border-color: #f44336;
            &:hover {
              color: #fff;
              background: #f44336;
            }
          }
        }
      }
    }
  }
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    padding-bottom: 25px;
    border-bottom: 1px solid #333;
    .add_menu_item,
    .add_category {
      margin-right: 30px;
      span {
        display: block;
        padding: 10px 30px;
        border: 2px solid #009688;
        background: #fff;
        cursor: pointer;
        transition: 0.3s;
        font-family: "Montserrat";
        &:hover {
          background: #009688;
          color: #fff;
        }
      }
    }
    .add_category {
      position: relative;
      &__wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 2px solid #009688;
        z-index: -1;
        transition: 0.3s;
        input {
          height: 100%;
          border: none;
          margin-right: 10px;
          outline: none;
          padding-left: 10px;
          &::placeholder {
            font-family: "Montserrat";
          }
        }
        &.active {
          transform: translateX(calc(100% - 2px));
          z-index: 1;
        }
      }
      &__icon {
        font-size: 20px;
        margin-right: 10px;
        border-radius: 50%;
        &:hover {
          background: #009688;
          display: block;
          path {
            fill: #fff;
          }
        }
      }
    }
  }
}

#input_file {
  opacity: 0;
  position: absolute;
}

.input_file {
  display: block;
  margin-top: 30px;
  font-family: "Montserrat";
  text-transform: capitalize;
  transition: 0.3s;
  font-weight: 500;
  &:hover {
    color: $red;
    text-decoration: underline;
    path {
      fill: $red;
    }
  }
  svg {
    margin-right: 10px;
  }
}

.change_modal,
.add_modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(#000, 0.6);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  &__wrapper {
    // height: 60vh;
    background: #fff;
    width: 50vw;
    padding: 30px;
    position: relative;
    display: flex;
  }
  &__close {
    position: absolute;
    right: -30px;
    top: -35px;
    font-size: 30px;
    transition: 0.3s;
    path {
      fill: #fff;
    }
    &:hover {
      path {
        fill: $red;
      }
    }
  }
  &__content {
    width: 100%;
    &__title {
      font-family: "Montserrat";
      line-height: 2;
      font-size: 14px;
      font-weight: 500;
    }
  }
  &__image {
    margin-right: 30px;
    width: 300px;
    min-width: 300px;
    overflow: hidden;
    img {
      width: 300px;
    }
  }
  &__title {
    input {
      width: 100%;
      margin-bottom: 30px;
      height: 30px;
      border: none;
      border-radius: 5px;
      padding-left: 10px;
      outline-color: #9c7f4e;
      border-bottom: 2px solid #9c7f4e;
      font-family: "Montserrat";
      color: #7a7a7a;
    }
  }
  &__description {
    textarea {
      min-width: 100%;
      max-width: 100%;
      margin-bottom: 30px;
      min-height: 60px;
      max-height: 60px;
      border: none;
      border-radius: 5px;
      padding-left: 10px;
      outline-color: #9c7f4e;
      border-bottom: 2px solid #9c7f4e;
      font-family: "Montserrat";
      color: #7a7a7a;
    }
  }
  &__info {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    &__item {
      min-width: 20%;
      &__title {
        font-family: "Montserrat";
        line-height: 2;
        font-size: 14px;
        font-weight: 500;
      }
      &__value {
        input {
          width: 80%;
          height: 30px;
          height: 30px;
          border: none;
          border-radius: 5px;
          padding-left: 10px;
          outline-color: #9c7f4e;
          border-bottom: 2px solid #9c7f4e;
          font-family: "Montserrat";
          color: #7a7a7a;
        }
      }
    }
  }
  &__price {
    margin-bottom: 30px;
    input {
      width: 80px;
      height: 30px;
      height: 30px;
      border: none;
      border-radius: 5px;
      padding-left: 10px;
      outline-color: #9c7f4e;
      border-bottom: 2px solid #9c7f4e;
      font-family: "Montserrat";
      color: #7a7a7a;
    }
  }
  &__category {
    margin-bottom: 30px;
    select {
      width: 200px;
      height: 30px;
      height: 30px;
      border: none;
      border-radius: 5px;
      padding-left: 10px;
      outline-color: #9c7f4e;
      border-bottom: 2px solid #9c7f4e;
      font-family: "Montserrat";
      color: #7a7a7a;
    }
  }
  &__control {
    display: flex;
    align-items: center;
    justify-content: end;
    &__item {
      padding: 10px 30px;
      margin-left: 30px;
      border: 2px solid transparent;
      cursor: pointer;
      transition: 0.3s;
      font-family: "Montserrat";
    }
  }
  &__save {
    border-color: #009688;
    &:hover {
      color: #fff;
      background: #009688;
    }
  }
  &__cancel {
    border-color: #ffc107;
    &:hover {
      color: #fff;
      background: #ffc107;
    }
  }
}
</style>
