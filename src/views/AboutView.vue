<template>
  <main class="about">
    <Title :title="'О нас'" />
    <section class="about__image">
      <img src="../assets/about-image-1.jpg" />
    </section>
    <section class="about__history">
      <div class="about__history__wrapper">
        <div class="section_title">Краткая история</div>
        <p class="about__history__text">
          «Мушу» — сеть ресторанов с 2006 года в Краснодаре и ещё в 8 городах.
          Меню ресторана включает самые популярные блюда стран и регионов, где
          рис выращивают и широко используют в национальной кулинарии: Южной
          Европы, Средней Азии и Дальнего Востока. Сеть ресторанов «Мушу» несет
          культуру потребления качественной и полезной еды, гостеприимство
          разных стран и заботится о каждом госте. Лаконичная презентация блюд,
          высококачественные продукты в их чистом первозданном виде, безупречное
          приготовление, традиционные и фирменные рецепты. Чувство эстетики
          присутствует в подаче каждого блюда. «Мушу» — это идеальное место для
          встречи с друзьями, романтического свидания или обеда с деловыми
          партнерами.
        </p>
      </div>
    </section>
    <section class="about__team">
      <div class="container">
        <div class="section_title">Наша команда</div>
        <div class="about__team__list row">
          <div class="col-50 about__team__list__item">
            <div class="about__team__list__item__image">
              <img src="../assets/team-1-1.jpg" alt="" />
            </div>
            <div class="about__team__list__item__content">
              <div class="about__team__list__item__name">Чан Кай-ши</div>
              <div class="about__team__list__item__description">
                Чан — гордый потомок эмигрантов из материкового Китая,
                приехавших в Россию в 1946 году. С тех пор он и его семья, в том
                числе его двоюродные братья Дао, Сум и Ли, усердно работают,
                чтобы распространять любовь к традиционной китайской кухне!
              </div>
              <div class="about__team__list__item__social">
                <a
                  href="https://telegram.org/"
                  class="about__team__list__item__social__item"
                  ><Icon icon="cib:telegram-plane" /></a
                ><a
                  href="https://ok.ru/"
                  class="about__team__list__item__social__item"
                  ><Icon icon="cib:odnoklassniki" /></a
                ><a
                  href="https://vk.com/"
                  class="about__team__list__item__social__item"
                  ><Icon icon="cib:vk" /></a
                ><a
                  href="https://www.whatsapp.com/"
                  class="about__team__list__item__social__item"
                  ><Icon icon="cib:whatsapp"
                /></a>
              </div>
            </div>
          </div>
          <div class="col-50 about__team__list__item">
            <div class="about__team__list__item__image">
              <img src="../assets/team-6-1.jpg" alt="" />
            </div>
            <div class="about__team__list__item__content">
              <div class="about__team__list__item__name">Дао Вэй</div>
              <div class="about__team__list__item__description">
                Дао — один из наших лучших поваров, который работает в нашем
                ресторане с 2000 года… Его мастерство в приготовлении говядины,
                куриного мяса и свинины принесло ему высокую оценку среди всех
                наших сотрудников и, конечно же, среди клиентов!
              </div>
              <div class="about__team__list__item__social">
                <a
                  href="https://telegram.org/"
                  class="about__team__list__item__social__item"
                  ><Icon icon="cib:telegram-plane" /></a
                ><a
                  href="https://ok.ru/"
                  class="about__team__list__item__social__item"
                  ><Icon icon="cib:odnoklassniki" /></a
                ><a
                  href="https://vk.com/"
                  class="about__team__list__item__social__item"
                  ><Icon icon="cib:vk" /></a
                ><a
                  href="https://www.whatsapp.com/"
                  class="about__team__list__item__social__item"
                  ><Icon icon="cib:whatsapp"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <HomeComments />
  </main>
</template>

<script>
import Title from "../components/titlePage.vue";
import HomeComments from "../components/homeComments.vue";
import { Icon } from "@iconify/vue";
export default {
  components: {
    Title,
    HomeComments,
    Icon,
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.about {
  padding: 0;
  &__history {
    &__wrapper {
      width: 50vw;
      margin: 50px auto;
    }
    &__text {
      line-height: 1.6;
      font-style: italic;
      font-size: 18px;
    }
  }
  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  &__team {
    padding: 100px 0 200px;
    background: url("../assets/shape1-3.png") no-repeat;
    background-position-y: -30%;
    background-position-x: right;
    .section_title {
      padding-left: 120px;
    }
    &__list {
      padding: 0 120px;
      position: relative;
      &::before {
        content: "Шеф-повар";
        font-family: "Montserrat";
        position: absolute;
        transform-origin: left top;
        transform: rotateZ(-90deg);
        left: 15px;
        top: 90px;
        font-size: 14px;
        text-transform: capitalize;
        color: #9c7f4e;
      }
      &::after {
        content: "Су-Шеф";
        font-family: "Montserrat";
        position: absolute;
        transform-origin: left top;
        transform: rotateZ(90deg);
        right: 15px;
        bottom: 50px;
        font-size: 14px;
        text-transform: capitalize;
        color: #9c7f4e;
      }
      &__item {
        display: flex;
        align-items: center;
        &__image {
          width: 350px;
          img {
            width: 350px;
          }
        }
        &__content {
          padding-left: 40px;
        }
        &__name {
          color: $red;
          font-family: "Montserrat";
          font-size: 28px;
          font-style: italic;
          font-weight: 500;
          margin-bottom: 30px;
          line-height: 1;
        }
        &__description {
          color: #7a7a7a;
          line-height: 1.5;
          margin-bottom: 30px;
        }
        &__social {
          &__item {
            font-size: 20px;
            margin-right: 10px;
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
      }
    }
  }
}
</style>
