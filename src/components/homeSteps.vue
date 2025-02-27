<template>
  <section class="steps">
    <div class="container">
      <div class="row steps__wrapper">
        <div class="col-66 row steps__list left">
          <div class="section_title col-100">Как сделать заказ онлайн</div>
          <div class="col-50 steps__item arrow_right">
            <figure class="steps__item__image">
              <img src="../assets/step-1.png" />
            </figure>
            <div class="steps__item__title">01. Добавьте товары в корзину</div>
            <div class="steps__item__description">
              Выберите желаемое блюдо из нашего меню и добавьте в корзину
              доставки.
            </div>
          </div>
          <div class="col-50 steps__item arrow_down">
            <figure class="steps__item__image">
              <img src="../assets/step-2.png" />
            </figure>
            <div class="steps__item__title">02. Оформить заказ онлайн</div>
            <div class="steps__item__description">
              Перейдите в корзину и оформите заказ онлайн.
            </div>
          </div>
        </div>
        <div class="col-33">
          <figure class="steps__image right">
            <img src="../assets/img-3.jpg" />
          </figure>
        </div>
        <div class="col-33">
          <figure class="steps__image left">
            <img src="../assets/img-4.jpg" />
          </figure>
        </div>
        <div class="col-66 row steps__list right">
          <div class="col-45 steps__item arrow_right">
            <figure class="steps__item__image">
              <img src="../assets/step-3.png" />
            </figure>
            <div class="steps__item__title">03. Ваш заказ уже в пути</div>
            <div class="steps__item__description">
              После оформления заказа, мы подготовим его и доставим до вашей
              двери.
            </div>
          </div>
          <div class="col-45 steps__item">
            <figure class="steps__item__image">
              <img src="../assets/step-4.png" />
            </figure>
            <div class="steps__item__title">04. Наслаждайтесь едой</div>
            <div class="steps__item__description">
              Просто расслабьтесь и наслаждайтесь едой, не выходя из дома.
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
.steps {
  padding-bottom: 200px;
  &__wrapper {
    align-items: center;
    position: relative;
    &::before {
      content: "Только 4 шага";
      font-family: "Montserrat";
      position: absolute;
      transform-origin: left top;
      transform: rotateZ(-90deg);
      left: 15px;
      top: 150px;
      font-size: 14px;
      text-transform: capitalize;
      color: #9c7f4e;
    }
  }
  .section_title {
    padding-left: 15px;
  }
  &__image {
    &.right {
      position: relative;
      &::before {
        content: "";
        background: url("../assets/word-1.png") no-repeat;
        background-position-x: right;
        width: 100%;
        height: 200%;
        position: absolute;
        right: 0;
        bottom: -180%;
        z-index: -1;
      }
      img {
        width: 100%;
      }
    }
    &.left {
      position: relative;
      margin-top: 30px;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 150%;
        background: url("../assets/shape3.png") no-repeat;
        background-position-x: right;
        background-size: contain;
        right: 50px;
        top: -30%;
        z-index: -1;
      }
    }
  }

  &__list {
    &.left {
      padding-left: 105px;
    }
    &.right {
      padding-left: 50px;
    }
  }
  &__item {
    position: relative;
    &:last-child {
      padding-left: 40px;
    }
    &__image {
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
      width: 70%;
    }
    &.arrow_right {
      &::before {
        content: "";
        position: absolute;
        display: block;
        top: 50%;
        right: 0;
        background: url("../assets/arrow-right.png") no-repeat;
        background-size: contain;
        width: 100px;
        height: 50px;
      }
    }
    &.arrow_down {
      &::before {
        content: "";
        position: absolute;
        display: block;
        left: 25%;
        bottom: -60%;
        background: url("../assets/arrow-down.png") no-repeat;
        background-size: contain;
        width: 100px;
        height: 50px;
      }
    }
  }
}
</style>
