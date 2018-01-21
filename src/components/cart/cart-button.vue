<style lang="scss">

.cart-button {
  width: 280px+$spacing;
  position: absolute;
  margin: 0 auto;
  right: 0;
  z-index: 200;
  font-family: $font-secondary;
}

.cart-button-fixed {
  position: fixed;
  cursor: pointer;
  outline: 0;
  border: 0;
  width: 280px;
  animation-duration: 0.55s;
  color: $color-primary;
  font-size: 20px;
  text-align: center;
  border-radius: 300px;
  background: $color-white;
  box-shadow: $box-shadow;
  height: 60px;
  line-height: 60px;
  bottom: $spacing;

  @media(min-width: $desktop) {
    top: $header-height+$spacing--large;
  }
}

.fa-shopping-bag {
  margin-right: $spacing--small;
}

@keyframes pop-border {
  0% {
    box-shadow: $box-shadow;
    transform: scale(1);
  }

  65% {
    box-shadow: 0px 0px 0px 10px $color-primary--light;
    transform: scale(1.05);
  }

  100% {
    box-shadow: $box-shadow;
    transform: scale(1);
  }
}

</style>

<template lang="html">

  <div class="cart-button">
    <button class="cart-button-fixed" @click="toggleCart">
      <i class="fa fa-shopping-bag" aria-hidden="true"></i>
      Åpne handlekurv ({{cart.lineItemCount}})
    </button>
  </div>

</template>

<script>
export default {
  props: ['toggleCart'],
  store: ['cart']
}
</script>
