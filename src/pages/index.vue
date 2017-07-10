<style lang="css">
</style>

<template lang="html">

  <div>

    <hero :title="homepage.title"
          :intro="homepage.intro" />

    <section class="container --wide">
      <div class="block --mt">
        <h1>Topics</h1>
        <div v-for="topic in topics">
          <router-link :to="{ name: 'topic', params: {slug: topic.slug}}" >{{topic.title}}</router-link>
        </div>
        <router-link :to="{ name: 'topics'}" >See all topics</router-link>
      </div>
    </section>
  </div>

</template>

<script>

import db from '@/database';

import Hero from '@/components/global/hero';

export default {
  components: { Hero },
  mounted() {
    db.getEntries('publication', 3, 0)
      .then(response => this.publications = response); // Map fields from response and set av events
    db.getEntries('topic', 3, 0)
      .then(response => this.topics = response);
    db.getEntryById('4Gxr21PcjSSCieeoGuCiCk')
      .then(response => this.homepage = response);
  },
  data() {
    return {
      publications: [],
      topics: [],
      homepage: {}
    }
  }
}
</script>
