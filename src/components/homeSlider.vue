<template>
  <section class="slider">
    <div class="container">
      <div class="row slider__inner">
        <div class="col-50">
          <h1 class="slider__title">
            Истиный вкус <br />
            Паназиатской кухни
          </h1>
          <a href="/menu" class="btn">Меню</a>
        </div>
        <div class="col-50">
          <div class="slider__image">
            <img src="../assets/slide1.png" />
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
.slider {
  background: #f8f8f8;
  position: relative;
  &::before {
    content: "Прокрути Вниз";
    font-family: "Montserrat";
    position: absolute;
    transform-origin: left top;
    transform: rotateZ(-90deg);
    text-transform: capitalize;
    left: 70px;
    bottom: 50px;
    font-size: 14px;
  }
  &__inner {
    align-items: center;
    height: 120vh;
  }
  &__title {
    font-size: 72px;
    font-family: "Montserrat";
    font-weight: 300;
    margin-bottom: 50px;
    text-transform: capitalize;
  }
  &__image {
    display: flex;
    justify-content: end;
  }
}
</style>
