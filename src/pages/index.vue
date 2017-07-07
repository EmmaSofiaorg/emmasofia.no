<style lang="css">
</style>

<template lang="html">

  <div class="container --wide">
    <h1>Halla</h1>
    <router-link :to="{ name: 'publications'}" >Se alle publikasjoner</router-link>
    <div v-for="publication in publications">
      {{publication.title}}
    </div>
  </div>

</template>

<script>

import db from '@/database'

export default {
  mounted() {
    db.getEntries('publication', 3, 0)
      .then(response => this.publications = response); // Map fields from response and set av events
  },
  data() {
    return {
      publications: [],
    }
  }
}
</script>
