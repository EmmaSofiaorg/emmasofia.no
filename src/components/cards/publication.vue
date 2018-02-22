<style lang="scss">

</style>

<template lang="html">

  <div class="card-media-clip" >
    <div class="card-media-clip__logo" v-if="publication.publishedAt">
      <img :src="publication.publishedAt.fields.logo.fields.file.url" alt="">
    </div>
    <div class="card-media-clip__contents">
      <div class="card-media-clip__headline">
        <h3>{{publication.title}}</h3>
      </div>
      <div class="card-media-clip__link">
        <a :href="publication.link" target="_blank">
          Les hele studien
          <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
      <div class="block --mt --full">
        <span style="color: #bbbbbb" v-for="tag in publication.tags">
          {{tag}},
        </span>
      </div>
    </div>
  </div>

</template>

<script>

export default {
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
