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
              <router-link :to="{name: 'HowTo'}" tag="button" class="button">Hvordan bruke testkits</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="block" style="position: relative">

      <div class="container --wide">

        <div class="block --full --mt --mb-largest">
          <div class="grid --equal" v-if="testkits.length > 0">
              <div class="grid__item --s-6 --m-4 --l-3" v-for="testkit in testkits">
                <article class="block --full --mt-large">
                  <testkit :testkit="testkit" :addToCart="addToCart.bind(this)" />
                </article>
              </div>
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

export default {
  store: ['loading', 'cart', 'cartShown'],
  components: { Filters, Testkit },
  mounted() {
    this.getPageDetails();
    this.getAllProducts();
  },
  data() {
    return {
      testkits: [],
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
        cartButton.style.animationName = 'pop-border';
        cartButton.style.webkitAnimationName = 'pop-border';
      }, 0);
    }
  }
}
</script>
