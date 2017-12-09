<style lang="scss">

.card-publication {
  transition: all 0.2s ease;
  margin-bottom: $spacing;
  background: $color-white;
  font-family: $font-secondary;
  display: flex;

  &:hover {
    text-decoration: none;
    transform: translateY(-3px);
    transition: all 0.2s ease;
  }

  &__image {
    width: 120px;
    height: 120px;
    margin-right: $spacing;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 5px;

  }

  &__contents {
    width: 100%;
    margin-top: $spacing;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    color: #000;
    margin-bottom: $spacing--small;
  }

  &__link {
    margin-bottom: $spacing;
  }

  &__tags {
    text-align: left;
  }

  &__tag {
    background: #eee;
    border-radius: 300px;
    margin-right: $spacing--small;
    display: inline-block;
    font-size: 12px;
    margin-bottom: $spacing--smaller;
    padding: 8px 20px;
  }
}


</style>

<template lang="html">

  <div class="card-publication" >
    <div
      class="card-publication__image"
      :style="`background-image: url(${publication.publishedAt.fields.logo.fields.file.url})`"
    />
    <div class="card-publication__contents">
      <div class="card-publication__title">
        {{publication.title}}
      </div>
      <div class="card-publication__link">
        <a :href="publication.link" target="_blank">
          Les hele studien
          <i class="fa fa-external-link" aria-hidden="true"></i>
        </a>
      </div>
      <div class="card-publication__tags">
        <div class="card-publication__tag" v-for="tag in publication.tags">
          {{tag}}
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  mounted() {
    console.log(this.publication);
  },
  props: ['publication'],
  computed: {
    getStartDay() {
      return getDate(this.publication.start)
    },
    getStartMonth() {
      return format(
        this.publication.start,
        'MMMM',
        {locale: noLocale}
      );
    }
  }
}
</script>
