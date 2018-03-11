<style lang="scss">

.cart__item {
  margin-bottom: $spacing--small;
  padding: $spacing;
  display: flex;
  position: relative;
  justify-content: flex-start;
  border: 1px solid #eee;
}

.cart__item-title {
  overflow: hidden;
  padding: $spacing--small;
  white-space: nowrap;
  text-overflow: ellipsis;

}

.cart__item-delete {
  font-size: 20px;
  text-align: right;
  position: absolute;
  cursor: pointer;
  top: $spacing--small;
  right: $spacing--small;
  color: $color-primary;
}

.cart__item-image {
  align-self: center;

  & img {
    max-width: 80px;

    @media (min-width: $desktop) {
      max-width: 80px;
    }
  }
}

.cart__details {
  display: flex;
  justify-content: space-between;
  height: 30px;
  line-height: 30px;
  margin-top: $spacing--small;
}

.cart__quantity {
  display: flex;
  font-size: 17px;
  height: 30px;
  line-height: 30px;
  padding-right: $spacing;
}

.cart__quantity-button {
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

.cart__quantity-amount {
  padding: 0 $spacing--small;
  font-weight: 700;
}

</style>

<template lang="html">

  <div class="cart__item">

    <div class="cart__item-image">
      <img :src="item.variant.product.images[0].src" />
    </div>

    <div class="cart__item-title">
      {{item.title}}

      <div class="cart__details">
        <div class="cart__quantity">
          <div class="cart__quantity-button" @click="removeItemCount(item.id, item.quantity)">
            -
          </div>
          <div class="cart__quantity-amount">
            {{item.quantity}}
          </div>
          <div class="cart__quantity-button" @click="addItemCount(item.id, item.quantity)">
            +
          </div>
        </div>
        <div class="cart-price">
          {{getItemSubTotal(item.variant.price, item.quantity)}}kr
        </div>
      </div>

    </div>

    <div class="cart__item-delete" @click="deleteItem(item.id)">
      <i class="fa fa-times" aria-hidden="true"></i>
    </div>

  </div>

</template>

<script>

import shop from '@/shopify';

export default {
  props: ['item'],
  store: ['cart', 'cartId'],
  methods: {
    async deleteItem(itemId) {
      this.cart = await shop.client.checkout.removeLineItems(this.cartId, itemId);
    },
    async removeItemCount(itemId, quantity) {
      const minusOne = quantity - 1;
      this.cart = await shop.client.checkout.updateLineItems(this.cartId, [{id: itemId, quantity: minusOne}]);
    },
    async addItemCount(itemId, quantity) {
      const plusOne = quantity + 1;
      this.cart = await shop.client.checkout.updateLineItems(this.cartId, [{id: itemId, quantity: plusOne}]);
    },
    getItemSubTotal (price, quantity) {
      return price*quantity;
    }
  },
}
</script>
