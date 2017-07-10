<style lang="css">

</style>

<template lang="html">

  <div class="container --wide">
    <section class="block --mt">
    <h1>Topics</h1>
    <div v-for="topic in topics">
      {{topic.title}}
      <router-link :to="{ name: 'topic', params: { slug: topic.slug }}">Link</router-link>
    </div>
    </section>
  </div>

</template>

<script>

import db from '@/database'

export default {
  mounted() {
    db.getEntries('topic', 10, 0)
      .then(response => this.topics = response); // Map fields from response and set av events
  },
  data() {
    return {
      topics: []
    }
  }
}
</script>
