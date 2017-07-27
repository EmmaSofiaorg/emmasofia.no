<style lang="scss">

.cart-overlay {
  width: 80%;
  position: fixed;
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
  padding: $spacing;

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
    color: $color-primary;
    position: relative;

    @media (min-width: $desktop) {
      font-size: 23px;
    }
  }

  &__close {
    cursor: pointer;
    display: inline-block;
    position: absolute;
    right: 0;

    @media (min-width: $desktop) {
      left: 0;
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
    padding-top: $spacing;
    height: calc(100% - #{$spacing--large} - #{$spacing--large} );
  }

  &__bottom {
    text-align: center;
    padding-bottom: $spacing;
  }

  &__buy {
    max-width: 250px;
    display: block;
    margin: 0 auto;
    background: #2cb94b;
    font-family: $font-secondary;

    &:hover {
      color: $color-white;
      background: #3ad15b;
      text-decoration: none;
    }
  }

  &__item {
    margin-bottom: $spacing--small;
    padding: $spacing;
    display: flex;
    position: relative;
    justify-content: flex-start;
    border: 1px solid #eee;
  }

  &__item-title {
    overflow: hidden;
    padding: $spacing--small;
    white-space: nowrap;
    text-overflow: ellipsis;

  }

  &__item-delete {
    font-size: 20px;
    text-align: right;
    position: absolute;
    cursor: pointer;
    top: $spacing--small;
    right: $spacing--small;
    color: $color-primary;
  }

  &__item-image {
    align-self: center;

    & img {
      max-width: 80px;

      @media (min-width: $desktop) {
        max-width: 80px;
      }
    }
  }

  &__details {
    display: flex;
    justify-content: space-between;
    height: 30px;
    line-height: 30px;
    margin-top: $spacing--small;
  }

  &__quantity {
    display: flex;
    font-size: 17px;
    height: 30px;
    line-height: 30px;
    padding-right: $spacing;
  }

  &__quantity-button {
    background: #eee;
    width: 30px;
    height: 30px;
    cursor: pointer;
    line-height: 30px;
    text-align: center;
    border-radius: 300px;

    &:hover {
      background: #d0cfcf;
    }
  }

  &__quantity-amount {
    padding: 0 $spacing--small;
    font-weight: 700;
  }
}


</style>

<template lang="html">

  <div class="cart-overlay">

      <div class="cart-overlay__top" >
        <div class="cart-overlay__close" @click="toggleCart">
          <i class="fa fa-times" aria-hidden="true"></i>
            Lukk
        </div>
        <div class="cart-overlay__title">
          Handlekurv ({{cart.lineItemCount}})
        </div>
      </div>

      <div class="cart-overlay__wrapper">

        <div class="cart-overlay__items">
          <div class="cart-overlay__item" v-for="item in cart.lineItems">
            <div class="cart-overlay__item-image">
              <img :src="item.image.src" />
            </div>
            <div class="cart-overlay__item-title">
              {{item.title}}
              <div class="cart-overlay__details">
                <div class="cart-overlay__quantity">
                  <div class="cart-overlay__quantity-button" @click="removeItemCount(item.id, item.quantity)">
                    -
                  </div>
                  <div class="cart-overlay__quantity-amount">
                    {{item.quantity}}
                  </div>
                  <div class="cart-overlay__quantity-button" @click="addItemCount(item.id, item.quantity)">
                    +
                  </div>
                </div>
                <div class="cart-overlay-price">
                  {{getItemSubTotal(item.price, item.quantity)}}kr
                </div>
              </div>
            </div>
            <div class="cart-overlay__item-delete" @click="deleteItem(item.id)">
              <i class="fa fa-times" aria-hidden="true"></i>
            </div>
          </div>
        </div>

    </div>

    <div class="cart-overlay__bottom">
      <a class="button --full --large cart-overlay__buy" :href="cart.checkoutUrl">Kjøp for <b>{{cart.subtotal}}kr</b></a>
    </div>

  </div>

</template>

<script>
export default {
  props: ['toggleCart'],
  store: ['cart'],
  methods: {
    deleteItem(itemId) {
      this.cart.removeLineItem(itemId);
      console.log(this.cart);
    },
    removeItemCount(itemId, quantity) {
      const minusOne = quantity - 1;
      this.cart.updateLineItem(itemId, minusOne);
    },
    addItemCount(itemId, quantity) {
      const plusOne = quantity + 1;
      this.cart.updateLineItem(itemId, plusOne);
    },
    getItemSubTotal (price, quantity) {
      return price*quantity;
    }
  },
}
</script>
