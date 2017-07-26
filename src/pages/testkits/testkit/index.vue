<style lang="css">

</style>

<template lang="html">

  <main class="container --wide">
    <section class="block --mt">
      {{topic.title}}
    </section>
  </main>

</template>

<script>

import db from '@/database'

export default {
  name: 'topic',
  mounted() {
    db.getEntryBySlug('topic', this.$route.params.slug)
      .then(response => this.topic = response); // Map fields from response and set av events
  },
  data() {
    return {
      topic: []
    }
  }
}
</script>
