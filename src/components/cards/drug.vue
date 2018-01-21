<style lang="scss">

.card-drug {

  &__image {
    background: #eee;
    height: 120px;
    width: 100%;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.2s ease;
    background-position: center;
    background-size: auto 230%;
    background-repeat: repeat;

    @media(min-width: $desktop) {
      height: 200px;
    }
  }

  &__overlay {
    spacing: $spacing;
    text-align: center;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,.35);
    color: $color-white;
    font-size: 18px;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(#481165, 0.2);
      transition: all 0.2s ease;
    }
  }
}

</style>

<template lang="html">
  <router-link :to="{ name: 'drug', params: {slug: drug.slug}}" class="card" >
    <div
      class="card-drug__image"
      :style="`background-image: url(${drug.image.fields.file.url})`">
      <div class="card-drug__overlay">
        <h3>{{drug.name}}</h3>
      </div>
    </div>

  </router-link>

</template>

<script>
export default {
  props: ['drug']
}
</script>
