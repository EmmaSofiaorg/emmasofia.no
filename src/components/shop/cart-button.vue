<style lang="scss">

.cart-button {
  width: 60px+$spacing;
  position: absolute;
  margin: 0 auto;
  right: 0;
}

.cart-button-fixed {
  width: 200px;
  position: fixed;
  animation-name: pop-in;
  animation-duration: 0.1s;
  color: $color-primary;
  font-size: 30px;
  text-align: center;
  border-radius: 300px;
  background: $color-white;
  box-shadow: $box-shadow;
  height: 60px;
  width: 60px;
  line-height: 60px;
  z-index: 1000;
  top: $header-height+$spacing--large;
}

</style>

<template lang="html">

  <div class="cart-button">
    <div class="cart-button-fixed" @click="toggleCart">
    <i class="fa fa-shopping-bag" aria-hidden="true"></i>
    Åpne handlekurv
    </div>
  </div>

</template>

<script>
export default {
  props: ['toggleCart']
}
</script>
