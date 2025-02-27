<template>
  <section class="home_about">
    <div class="container">
      <div class="row home_about__inner">
        <div class="col-50">
          <div class="section_title">
            Мы объеденяем свежиый вкус и Паназиатскую кухню.
          </div>
          <div class="home_about__description">
            В паназиатской кухне изысканно смешались: морепродукты и мясные
            блюда с овощами и фруктами, различные типы лапши из риса и бобовых,
            ну и конечно, сам рис, Все без исключения блюда удачно дополнены
            широчайшей линейкой разнообразных соусов и множеством экзотических
            специй.
          </div>
          <router-link to="/about" class="home_about__btn"
            >Подробнее о нас <img src="../assets/shrimp.png"
          /></router-link>
        </div>
        <div class="col-50">
          <figure class="home_about__image right">
            <img src="../assets/img-1.jpg" />
          </figure>
        </div>
        <div class="col-50">
          <figure class="home_about__image left">
            <img src="../assets/img-2.jpg" />
          </figure>
        </div>
        <div class="col-50 bottom">
          <div class="home_about__list">
            <div class="home_about__list__item">
              <div class="home_about__list__item__icon">
                <img src="../assets/about-icon-1.png" />
              </div>
              <div class="home_about__list__item__title">
                Натуральный <br />
                Паназиатский
              </div>
              <div class="home_about__list__item__description">
                Мы готовим только натуральные блюда Азиатской кухни.
              </div>
            </div>
            <div class="home_about__list__item">
              <div class="home_about__list__item__icon">
                <img src="../assets/about-icon-2.png" />
              </div>
              <div class="home_about__list__item__title">
                Всегда <br />
                свежиый
              </div>
              <div class="home_about__list__item__description">
                В наших блюдах используется только свежие продукты.
              </div>
            </div>
            <div class="home_about__list__item">
              <div class="home_about__list__item__icon">
                <img src="../assets/about-icon-3.png" />
              </div>
              <div class="home_about__list__item__title">
                Без <br />
                добавок
              </div>
              <div class="home_about__list__item__description">
                Мы спользуем только натуральные продукты.
              </div>
            </div>
            <div class="home_about__list__item">
              <div class="home_about__list__item__icon">
                <img src="../assets/about-icon-4.png" />
              </div>
              <div class="home_about__list__item__title">
                Креативное <br />
                меню
              </div>
              <div class="home_about__list__item__description">
                Мы создаем необычные блюда в Азиатском стиле.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.home_about {
  padding: 200px 0;
  &__inner {
    align-items: center;
  }
  &__description {
    color: #7a7a7a;
    line-height: 2;
    margin-bottom: 30px;
    padding-left: 120px;
  }
  &__btn {
    color: $red;
    font-family: "Montserrat";
    font-size: 24px;
    font-weight: 500;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    transition: 0.3s;
    margin-left: 120px;
    img {
      height: 30px;
      margin-left: 10px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  &__image {
    display: flex;
    position: relative;
    img {
      height: 50vh;
    }
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: cover;
      z-index: -1;
    }
    &.right {
      justify-content: end;
      &::before {
        background: url("../assets/shape1.png") no-repeat;
        top: -100px;
        left: 50px;
      }
    }
    &.left {
      &::before {
        background: url("../assets/shape2.png") no-repeat;
        background-position-x: right;
        background-size: 100% auto;
        bottom: -80px;
        right: -70px;
      }
    }
  }
  .section_title {
    margin-left: 120px;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    padding-left: 150px;
    &__item {
      min-width: 45%;
      max-width: 45%;
      margin: 30px 0 0;
      &__icon {
        margin-bottom: 15px;
        img {
          width: 70px;
        }
      }
      &__title {
        font-size: 18px;
        text-transform: capitalize;
        font-weight: 600;
        margin-bottom: 10px;
        font-family: "Montserrat";
      }
      &__description {
        padding-right: 20px;
        color: #7a7a7a;
        line-height: 1.5;
      }
    }
  }
  .bottom {
    align-self: end;
  }
  .col-50 {
    &:first-child {
      position: relative;
      &::before {
        content: "Кто мы";
        position: absolute;
        transform-origin: left top;
        transform: rotateZ(-90deg);
        left: 15px;
        top: 70px;
        text-transform: capitalize;
        color: #9c7f4e;
        font-size: 14px;
      }
    }
    &:last-child {
      position: relative;
      &::before {
        content: "Почему выбирают нас";
        position: absolute;
        transform-origin: left top;
        transform: rotateZ(90deg);
        right: -140px;
        top: 40px;
        color: #9c7f4e;
        text-transform: capitalize;
        font-size: 14px;
      }
    }
  }
}
</style>
