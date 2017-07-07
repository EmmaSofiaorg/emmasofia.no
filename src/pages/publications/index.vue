<style lang="css">

</style>

<template lang="html">

  <div>
    <h1>Publications</h1>
    <div v-for="publication in publications">
      {{publication.title}}
    </div>
  </div>

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
