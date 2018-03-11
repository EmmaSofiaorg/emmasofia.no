<style lang="scss">

.card-testkit {
  transition: all 0.2s ease;
  background: $color-white;
  font-family: $font-secondary;
  margin-bottom: $spacing--large;
  color: $color-black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &:hover {
    text-decoration: none;
    transform: translateY(-3px);
    transition: all 0.2s ease;
    color: $color-primary;
  }

  &__image {
    width: 100%;
    position: relative;

    & img {
      width: 100%;
      border-radius: 5px;
      border: 1px solid #eee;
    }

  }

  &__contents {
    width: 100%;
    text-align: center;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    margin-top: $spacing;
    margin-bottom: $spacing--small;
  }

  &__pre-price {
    text-decoration: line-through;
    color: $color-gray-dark;
  }

  &__price {
    font-size: 20px;
  }

  &__link {
    margin-bottom: $spacing;
  }

  &__tag {
    background: #eee;
    margin-top: -$spacing--large+10px;
    display: inline-block;
    font-size: 12px;
    padding: 8px 20px;
    position: absolute;
    bottom: 10px;
  }

  &__add-button {
    margin: 0 auto;
    display: block;
  }
}


</style>

<template lang="html">

  <div class="card-testkit" >
    <router-link router-link :to="{name: 'testkit', params: {id: testkit.handle}}" class="card-testkit__image">
      <img :src="testkit.images[0].src" />
      <div class="card-testkit__tag">
        {{testkit.tags[0].value}}
      </div>
    </router-link>
    <router-link router-link :to="{name: 'testkit', params: {id: testkit.handle}}" class="card-testkit__contents">
      <div class="card-testkit__title">
        {{testkit.title}}
      </div>
      <div class="card-testkit__pre-price" v-if="testkit.variants[0].compareAtPrice">
        {{testkit.variants[0].compareAtPrice}}
      </div>
      <div class="card-testkit__price">
        {{testkit.variants[0].price}}kr
      </div>
    </router-link>
    <div class="card-testkit__add-button">
      <button class="button --outline --small" @click="addToCart(testkit.variants[0].id, 1)">
        Legg i handlekurv
      </button>
    </div>
  </div>

</template>

<script>

export default {
  props: ['testkit', 'addToCart'],
}
</script>
