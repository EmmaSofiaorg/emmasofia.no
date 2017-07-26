<style lang="css">

</style>

<template lang="html">

  <main v-show="!loading">

      <div class="hero">
        <div class="hero__background" />
          <div class="hero__wrapper">
            <div class="col --main">
              <div class="hero__title">
                <h1>{{drug.name}}</h1>
              </div>
              <div class="hero__intro">
                <h3>{{drug.subtitle}}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="container --wide">

      <div class="col --main">
        <div class="block">
          <p v-if="drug.desc" v-html="renderMarkDown(drug.desc)"></p>
        </div>
      </div>

    </section>
  </main>

</template>

<script>

import db from '@/database'

export default {
  name: 'drug',
  store: ['loading'],
  mounted() {
    this.loading = true;
    db.getEntryBySlug('drug', this.$route.params.slug)
      .then((response) => {
        this.loading = false;
        this.drug = response;
      }); // Map fields from response and set av events
  },
  data() {
    return {
      drug: {},
    }
  },
}
</script>
