<style lang="scss">

.cart-overlay {
  width: 100%;
  position: fixed;
  animation-name: slide-right;
  animation-duration: 0.5s;
  z-index: 1000;
  background: $color-white;
  bottom: 0;
  right: 0;
  height: 100vh;
  padding: $spacing;

  &.--hidden {
    display: none;
  }

  @media(min-width: $desktop) {
    width: 420px;
  }

  &__title {
    text-align: center;
  }

  &__buy-button {
    max-width: 250px;
    margin: 0 auto;
    display: block;
  }
}


</style>

<template lang="html">

  <div class="cart-overlay">
    <div class="cart-overlay__title">
      <h3>Handlekurv</h3>
    </div>
    <div class="cart-overlay__items">
      <div class="cart-overlay__item" v-for="item in cart.lineItems">
        {{item.title}}
      </div>
    </div>
    <div class="cart-overlay__buy-button">
      <a class="button --full" :href="cart.checkoutUrl">Kjøp</a>
    </div>
  </div>

</template>

<script>
export default {
  props: ['cart']
}
</script>
