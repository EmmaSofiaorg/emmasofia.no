<style lang="css">
</style>

<template lang="html">

  <main>

    <div class="hero" v-if="product">
      <div class="hero__background --diagonal" />
      <div class="hero__wrapper">
        <div class="container --narrow">
          <div class="block --full --mb-larger">
            <div class="hero__title">
              <h1>{{product.title}}</h1>
            </div>
            <div class="hero__intro">
              <!--<h3>{{page.subtitle}}</h3>-->
            </div>
            <div class="grid">
              <div class="grid__item --s-12 --m-6">
                <div class="block --mt --full --border-radius --box-shadow"
                    :style="`width: 100%;
                           height: 250px;
                           background-color: #fff;
                           background-position: center center;
                           background-size: contain;
                           background-image: url(${product.images[0].src});`"
                />
              </div>
              <div class="grid__item --s-12 --m-6">
                <div class="block --full --mt">
                  <h3 style="text-decoration: line-through" v-if="product.variants[0].compareAtPrice">
                    Førpris: {{product.variants[0].compareAtPrice}} kr
                  </h3>
                  <h2>Pris: {{product.variants[0].price}} kr</h2>
                  <button class="button" @click="addToCart(product.variants[0].id, 1)">Legg til i handlekurv</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section v-if="product" class="block --mt --mb-largest">
      <div class="container --narrow">
        <div class="block --full">
          <div v-html="product.descriptionHtml"></div>
        </div>
      </div>
    </section>

    <section v-if="product" class="block --mt --mb-larger">
      <div class="container --narrow">
        <div class="block --full">
          <h3>Relaterte produkter</h3>
          <div class="grid --equal">
            <div class="grid__item --s-12 --m-6 --l-4" v-if="relatedProducts.length" :key="testkit.id" v-for="testkit in relatedProducts">
              <div class="block --full --mt-large">
                <singleTestkit :testkit="testkit" :addToCart="addToCart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

</template>

<script>
import shop from "@/shopify";

import singleTestkit from "@/components/cards/testkit";

export default {
  name: "testkit",
  components: { singleTestkit },
  store: ["cart", "cartId", "cartShown"],
  data() {
    return {
      handle: "",
      relatedProducts: []
    };
  },
  asyncComputed: {
    async product() {
      this.handle = this.$route.params.id;
      const product = await shop.client.product.fetchByHandle(this.handle);
      this.relatedProducts = await shop.client.product.fetchQuery({
        query: `tag:[${product.tags[0].value}]"`
      });
      return product;
    }
  },
  methods: {
    async addToCart(variantId, quantity) {
      this.cartShown = true;
      this.cart = await shop.client.checkout.addLineItems(this.cartId, [
        { variantId, quantity }
      ]);
      const cartButton = document.getElementsByClassName(
        "cart-button-fixed"
      )[0];
      cartButton.style.webkitAnimationName = "";
      cartButton.style.animationName = "";
      setTimeout(function() {
        cartButton.style.animationName = "pop-border";
        cartButton.style.webkitAnimationName = "pop-border";
      }, 0);
    }
  }
};
</script>
