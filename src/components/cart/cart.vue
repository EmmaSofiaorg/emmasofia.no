<style lang="scss">

.cart {
  width: 80%;
  position: fixed;
  display: block;
  box-shadow: -2px 0px 10px 1px rgba(#000000, 0.1);
  animation-name: slide-right;
  animation-duration: 0.5s;
  z-index: 1000;
  background: $color-white;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  border-radius: 5px;

  &.--hidden {
    display: none;
  }

  @media(min-width: $desktop) {
    width: 500px;
    height: 80%;
    top: $header-height+$spacing;
    border-radius: 5px;

  }

  &__top {
    border-bottom: 1px solid #eee;
    padding-bottom: $spacing--small;
    font-size: 20px;
    height: 78px;
    box-shadow: 0px 10px 8px -5px rgba(#000000, 0.02);
    z-index: 999;
    color: $color-primary;
    position: relative;
    padding: $spacing;

    @media (min-width: $desktop) {
      font-size: 23px;
    }
  }

  &__close {
    cursor: pointer;
    display: inline-block;
    position: absolute;
    right: $spacing;

    @media (min-width: $desktop) {
      left: $spacing;
    }
  }

  &__title {
    text-align: center;
    color: $color-primary;
    margin: 0 auto;
    font-weight: 700;
  }

  &__wrapper {
    max-width: $container;
    margin: 0 auto;
    overflow-x: scroll;
    height: calc(100% - 78px - 78px );
  }

  &__items {
    padding: $spacing;
  }

  &__bottom {
    text-align: center;
    padding-bottom: $spacing;
  }

  &__buy {
    max-width: 250px;
    display: inline-block !important;
    margin: 0 auto;
    background: #2cb94b;
    font-family: $font-secondary;

    &:hover {
      color: $color-white;
      background: #3ad15b;
      text-decoration: none;
    }
  }
}


</style>

<template lang="html">

  <div class="cart">

    <div class="cart__top">
      <div class="cart__close" @click="toggleCart">

          Lukk
      </div>
      <div class="cart__title">
        Handlekurv ({{itemsInCart}})
      </div>
    </div>

    <div class="cart__wrapper">
      <div class="cart__items">
        <cart-item
          v-for="item in cart.lineItems"
          :key="item.id"
          :item="item" />
      </div>
    </div>

    <div class="cart__bottom">
      <a class="button --full --large cart__buy" :href="cart.webUrl">
        Kjøp for <b>{{cart.totalPrice}}kr</b>
      </a>
    </div>

  </div>

</template>

<script>

import CartItem from '@/components/cart/cart-item';

export default {
  components: { CartItem },
  props: ['toggleCart'],
  store: ['cart'],
  computed: {
    itemsInCart() {
      return this.cart.lineItems.reduce((acc, item) => {
        return item.quantity + acc
      }, 0)
    }
  }
}
</script>
