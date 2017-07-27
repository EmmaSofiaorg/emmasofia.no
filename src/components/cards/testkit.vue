<style lang="scss">

.card-testkit {
  transition: all 0.2s ease;
  margin-bottom: $spacing;
  background: $color-white;
  font-family: $font-secondary;
  margin-bottom: $spacing--large;

  &:hover {
    text-decoration: none;
    transform: translateY(-3px);
    transition: all 0.2s ease;
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
    color: #000;
    margin-bottom: $spacing--small;
  }

  &__price {
    font-size: 20px;
    margin-bottom: $spacing;
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
    <div class="card-testkit__image">
      <img :src="testkit.images[0].src" />
      <div class="card-testkit__tag">
        {{testkit.attrs.tags}}
      </div>
    </div>
    <div class="card-testkit__contents">
      <div class="card-testkit__title">
        {{testkit.title}}
      </div>
      <div class="card-testkit__price">
        {{testkit.variants[0].price}}kr
      </div>
      <div class="card-testkit__add-button">
        <button class="button" @click="addToCart(testkit.variants[0], 1)">
          Legg i handlekurv
        </button>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  props: ['testkit', 'addToCart'],
}
</script>
