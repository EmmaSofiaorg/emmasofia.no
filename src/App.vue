<template>
  <div id="app">
    <spinner v-if="loading" />
    <main-header />
      <transition name="fade">
        <keep-alive exclude="testkit">
          <router-view></router-view>
        </keep-alive>
      </transition>
    <main-footer />

    <cart-button
      v-show="cart.lineItems.length && !cartShown"
      :toggleCart="toggleCart.bind(this)" />

    <cart-overlay
      v-show="cart.lineItems.length"
      :class="{'--hidden': !cartShown}"
      :toggleCart="toggleCart.bind(this)" />

  </div>
</template>

<script>

require('emmasofia/main.css');

import MainHeader from '@/components/global/header';
import MainFooter from '@/components/global/footer';
import Spinner from '@/components/global/spinner';

import shop from '@/shopify';

import CartOverlay from '@/components/cart/cart';
import CartButton from '@/components/cart/cart-button';

export default {
  components: { MainHeader, MainFooter, Spinner, CartOverlay, CartButton },
  store: ['loading', 'cart', 'cartShown','cartId'],
  name: 'app',
  async created() {
    const cart = await shop.initCart();
    this.cart = cart;
    this.cartId = cart.id;
  },
  methods: {
    toggleCart() {
      const cartButton = document.getElementsByClassName('cart-button-fixed')[0];
      cartButton.style.webkitAnimationName = '';
      cartButton.style.animationName = '';
      this.cartShown = !this.cartShown;
    },
  }
};
</script>

<style lang="scss">

main {
  min-height: 100vh;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

.fieldset {
  background: #fafafa;
  border: 2px solid #eee;
}

.fieldset__legend {
  color: $color-primary;
  text-transform: uppercase;
  font-weight: 600;
}

</style>
