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
          <div class="col --main">
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

      <cart-button v-show="cart.lineItemCount" :toggleCart="toggleCart.bind(this)" />

      <cart-overlay :cart="cart" :class="{'--hidden': !cartShown}" />

      <div class="block --mt">
        <div class="row" v-if="testkits.length > 0">
            <div class="col-xs-12 col-md-3" v-for="testkit in testkits">
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
import Hero from '@/components/global/hero';
import Testkit from '@/components/cards/testkit';
import CartOverlay from '@/components/shop/cart';
import CartButton from '@/components/shop/cart-button';

export default {
  store: ['loading'],
  components: { Filters, Hero, Testkit, CartOverlay, CartButton },
  mounted() {
    this.getPageDetails();
    this.getAllEvents();
    shop.initCart().then(newCart => {
      this.cart = newCart;
      console.log(this.cart);
    });
    this.getAllProducts();
  },
  data() {
    return {
      testkits: [],
      cartShown: false,
      cart: {},
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
    getAllEvents() {
      this.loading = true;
      db.getEntries('drug', 10, 0)
        .then(response => {
          this.loading = false;
          this.drugs = response;
        });
    },
    getAllProducts() {
      shop.getAllProducts()
        .then(products => {
          this.testkits = products;
        });
    },
    addToCart(variant, quantity) {
      console.log(variant);
      this.cart.createLineItemsFromVariants({variant, quantity});
      console.log('newcart', this.cart);
    },
    toggleCart() {
      this.cartShown = !this.cartShow;
    },
  },
}
</script>
