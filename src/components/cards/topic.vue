<style lang="scss">
</style>

<template lang="html">
  <router-link :to="{ name: 'topic', params: {slug: topic.slug}}" class="card" >
    <div class="card__image">
      <img
        :style="`background-image: url(${topic.image.fields.file.url})`"
        v-if="topic.image"
      />
    </div>
    <div class="card__title">
      {{topic.title}}
    </div>
  </router-link>

</template>

<script>
export default {
  props: ["topic"]
};
</script>
