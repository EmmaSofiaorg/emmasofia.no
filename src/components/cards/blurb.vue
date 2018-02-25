<template lang="html">

<div class="blurb">
  <div class="blurb__icon">
    <component :is="icon" />
  </div>
  <h3 class="blurb__title">{{title}}</h3>
</div>

</template>

<script>
export default {
  props: {
    title: String,
    icon: Object, // svg component
  }
}
</script>

<style lang="scss">

.blurb {
  display: block;
  margin: 0 auto;

  &__icon {
    border-radius: 50%;
    width: 100%;
    padding-bottom: 100%;
    background: $color-gradient;
    position: relative;
    transition: all 0.3s ease;
    transform: translateY(0);

    &:hover {
      box-shadow: $box-shadow;
      transform: translateY(-5px);
    }

    & svg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      display: block;
      margin: 0 auto;
      width: 50%;
      height: 50%;
    }
  }

  &__title {
    margin-top: $spacing;
    text-align: center;
  }
}

</style>
