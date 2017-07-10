<style lang="css">

</style>

<template lang="html">

  <main class="container --wide">
    <section class="block --mt">
      <h1>Publications</h1>
      <div v-for="publication in publications">
        {{publication.title}}
        <router-link :to="{ name: 'publication', params: { slug: publication.slug }}">Link</router-link>
      </div>
    </section>
  </main>

</template>

<script>

import db from '@/database'

export default {
  mounted() {
    db.getEntries('publication', 10, 0)
      .then(response => this.publications = response); // Map fields from response and set av events
  },
  data() {
    return {
      publications: []
    }
  }
}
</script>
