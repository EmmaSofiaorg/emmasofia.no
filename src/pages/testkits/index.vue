<style lang="scss" scoped>

.hero {
  min-height: 400px;
}

</style>

<template lang="html">

  <main>

    <div class="hero">
      <div class="hero__background" />
        <div class="hero__wrapper">
          <div class="col --half">
            <div class="hero__title">
              <h1>{{page.title}}</h1>
            </div>
            <div class="hero__intro">
              <h3>{{page.subtitle}}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="container --wide" style="position: relative">

      <cart-button
        v-show="cart.lineItemCount && !cartShown"
        :toggleCart="toggleCart.bind(this)" />

      <cart-overlay
        v-show="cart.lineItemCount"
        :class="{'--hidden': !cartShown}"
        :toggleCart="toggleCart.bind(this)" />

      <div class="block --mt --mb">
        <div class="row" v-if="testkits.length > 0">
            <div class="col-xs-12 col-sm-4 col-md-3" v-for="testkit in testkits">
              <article>
                <testkit :testkit="testkit" :addToCart="addToCart.bind(this)" />
              </article>
            </div>
        </div>
      </div>

    </section>
  </main>

</template>

<script>

import db from '@/database'
import shop from '@/shopify';

import Filters from '@/components/global/filters';
import Testkit from '@/components/cards/testkit';
import CartOverlay from '@/components/cart/cart';
import CartButton from '@/components/cart/cart-button';

export default {
  store: ['loading', 'cart'],
  components: { Filters, Testkit, CartOverlay, CartButton },
  mounted() {
    this.getPageDetails();
    shop.initCart().then(newCart => {
      this.cart = newCart;
    });
    this.getAllProducts();
  },
  data() {
    return {
      testkits: [],
      cartShown: false,
      page: {},
    }
  },
  methods: {
    getPageDetails() {
      db.getEntryById('431fh2s8kM80waG6ugmsIy')
        .then(response => {
          this.loading = false;
          this.page = response;
        });
    },
    getAllProducts() {
      this.loading = true;
      shop.getAllProducts()
        .then(products => {
          this.loading = false;
          this.testkits = products;
        });
    },
    addToCart(variant, quantity) {
      if (this.cart.lineItemCount === 0) {
        this.cartShown = true;
      };
      this.cart.createLineItemsFromVariants({variant, quantity});
      const cartButton = document.getElementsByClassName('cart-button-fixed')[0];
      cartButton.style.webkitAnimationName = '';
      cartButton.style.animationName = '';
      setTimeout(function () {
        cartButton.style.animationName = 'pop-in';
        cartButton.style.webkitAnimationName = 'pop-in';
      }, 0);
    },
    toggleCart() {
      const cartButton = document.getElementsByClassName('cart-button-fixed')[0];
      cartButton.style.webkitAnimationName = '';
      cartButton.style.animationName = '';
      this.cartShown = !this.cartShown;
    },
  },
  watch: {
    cartShown: function (isShown) {
      if (isShown) {
        // document.body.classList.add('--no-scroll');
      }
       else {
         // document.body.classList.remove('--no-scroll');
       }
    }
  }
}
</script>
