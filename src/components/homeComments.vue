<template>
  <section class="comments">
    <div class="container comments__wrapper">
      <div class="section_title">Отзывы клиентов</div>
      <swiper
        :slidesPerView="2"
        :spaceBetween="100"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="comments__list mySwiper"
      >
        <swiper-slide
          ><div class="comments__list__item">
            <div class="comments__list__item__stars">
              <Icon icon="gravity-ui:star-fill" />
              <Icon icon="gravity-ui:star-fill" />
              <Icon icon="gravity-ui:star-fill" />
              <Icon icon="gravity-ui:star-fill" />
              <Icon icon="gravity-ui:star-fill" />
            </div>
            <div class="comments__list__item__text">
              "Меню очень большое. Помимо китайской и японской кухни, здесь
              можно попробовать индийские, тайские и даже вьетнамские блюда.
              Месту ставлю 10 из 10, я редко так высоко оцениваю рестораны. В
              меню было еще много блюд, которые меня очень заинтересовали."
            </div>
            <div class="comments__list__item__author">
              <div class="comments__list__item__image">
                <img src="../assets/user-2.jpg" alt="" />
              </div>
              <div class="comments__list__item__name">Анна</div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
          ><div class="comments__list__item">
            <div class="comments__list__item__stars">
              <Icon icon="gravity-ui:star-fill" />
              <Icon icon="gravity-ui:star-fill" />
              <Icon icon="gravity-ui:star-fill" />
              <Icon icon="gravity-ui:star-fill" />
              <Icon icon="gravity-ui:star-fill" />
            </div>
            <div class="comments__list__item__text">
              "Что всегда хочется отметить, так это порции, они большие,
              наедаешься до отвала. Впечатление как всегда осталось хорошее от
              посещения. И мы поели в удовольствие, и ребенок (хотя он у нас тот
              еще привереда в еде)."
            </div>
            <div class="comments__list__item__author">
              <div class="comments__list__item__image">
                <img src="../assets/user-3.jpg" alt="" />
              </div>
              <div class="comments__list__item__name">Валерия</div>
            </div>
          </div></swiper-slide
        >
        <swiper-slide
          ><div class="comments__list__item">
            <div class="comments__list__item__stars">
              <Icon icon="gravity-ui:star-fill" />
              <Icon icon="gravity-ui:star-fill" />
              <Icon icon="gravity-ui:star-fill" />
              <Icon icon="gravity-ui:star-fill" />
              <Icon icon="gravity-ui:star-fill" />
            </div>
            <div class="comments__list__item__text">
              "На выбор были предложены палочки или вилки, что меня тоже
              порадовало, так как палочками я не сильно хорошо управляюсь) Блюда
              зашли и мне, и друзьям. Еще приятно то, что цены тут не атомные, я
              совсем не разорился."
            </div>
            <div class="comments__list__item__author">
              <div class="comments__list__item__image">
                <img src="../assets/user-1.jpg" alt="" />
              </div>
              <div class="comments__list__item__name">Иван</div>
            </div>
          </div></swiper-slide
        >
        <swiper-slide>
          <div class="comments__list__item">
            <div class="comments__list__item__stars">
              <Icon icon="gravity-ui:star-fill" />
              <Icon icon="gravity-ui:star-fill" />
              <Icon icon="gravity-ui:star-fill" />
              <Icon icon="gravity-ui:star-fill" />
              <Icon icon="gravity-ui:star-fill" />
            </div>
            <div class="comments__list__item__text">
              "Что еще приятно удивило — лояльные цены. В блюдах этого ресторана
              используются достаточно дорогие продукты, но при этом наценка не
              очень большая и кушать в таком заведении можно несколько раз в
              неделю, получается не накладно."
            </div>
            <div class="comments__list__item__author">
              <div class="comments__list__item__image">
                <img src="../assets/user-4.jpg" alt="" />
              </div>
              <div class="comments__list__item__name">Николай</div>
            </div>
          </div></swiper-slide
        >
      </swiper>
    </div>
  </section>
</template>

<script>
import { Icon } from "@iconify/vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import { Autoplay } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Icon,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.comments {
  background: url("../assets/shape1-3.png") no-repeat;
  background-position-y: 140%;
  padding-bottom: 200px;
  &__wrapper {
    padding-left: 120px;
    position: relative;
    &::before {
      content: "Что другие говорят о нас";
      font-family: "Montserrat";
      position: absolute;
      transform-origin: left top;
      transform: rotateZ(-90deg);
      left: 15px;
      top: 210px;
      font-size: 14px;
      text-transform: capitalize;
      color: #9c7f4e;
    }
  }
  &__list {
    margin: 0px 240px 0 120px;
    &__item {
      &__stars {
        svg path {
          color: #9c7f4e;
        }
      }
      &__text {
        color: $red;
        font-weight: bold;
        font-style: italic;
        line-height: 1.6;
        font-size: 18px;
        margin: 30px 0px;
      }
      &__author {
        display: flex;
        align-items: center;
      }
      &__image {
        width: 50px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      &__name {
        font-size: 20px;
        font-weight: 500;
        font-family: "Montserrat";
        margin-left: 30px;
      }
    }
    .owl-dots {
      margin-top: 50px !important;
      .owl-dot {
        span {
          width: 70px;
          height: 2px;
          transition: 0.3s;
        }
        &.active,
        &:hover {
          span {
            background: $red;
          }
        }
      }
    }
  }
}
</style>
