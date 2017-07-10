<style lang="scss">

@import '../../global/variables.scss';

.hero {
  min-height: 40vh;
  position: relative;
  background-color: #f7fbfb;
  transition: background-image 0.2s ease;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  margin: 0 auto;
  align-items: center;
  color: $color-black;

  &__overlay {
    // background-color: rgba(#000000, 0.35);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  &__wrapper {
    max-width: $container--wide;
    margin: 0 auto;
    padding: $spacing;
    z-index: 2;
  }

  &__title {
  }

  &intro {

  }

}

</style>

<template>

  <div class="hero">
    <div class="hero__overlay" />
    <div class="hero__wrapper">
      <div class="hero__title">
        <h1>{{title}}</h1>
      </div>
      <div class="hero__intro">
        {{intro}}
      </div>
    </div>
  </div>

</template>

<script>

export default {
  props: ['title', 'intro', 'imageUrl'],
}

</script>
