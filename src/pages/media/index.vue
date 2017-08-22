<style lang="css">

</style>

<template lang="html">

  <main>

    <div class="hero">
      <div class="hero__background" />
        <div class="hero__wrapper">
          <div class="col --half">
            <div class="hero__title">
              <h1>{{page.title}}</h1>
            </div>
            <div class="hero__intro">
              <h3>{{page.subtitle}}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="block --mt-large --mb-largest">

      <div class="container">

      <div class="block --full --mb">
      <filters
        :title="'Filter'"
        :filterBy="'drug'"
        :updateFilters="filterByDrug.bind(this)" />
      </div>

      <div class="row">
        <div class="col-md-9">
          <div class="block --full --mt">
            <article v-for="mediaClip in mediaClips">
              <media-clip :mediaClip="mediaClip" />
            </article>
          </div>
        </div>
        <div class="block --full --mb" v-if="mediaClips.length < 1">
          <h4>Ingen artikler funnet.</h4>
        </div>
      </div>

      </div>

    </section>

  </main>

</template>

<script>

import db from '@/database'

import Filters from '@/components/global/filters';
import MediaClip from '@/components/cards/media-clip';

export default {
  store: ['loading'],
  components: { Filters, MediaClip },
  mounted() {
    this.getPageDetails();
    this.getAllEvents();
  },
  data() {
    return {
      mediaClips: [],
      page: {},
    }
  },
  methods: {
    getPageDetails() {
      db.getEntryById('2Cl0VIYGJaI0iwwMCGke0K')
        .then(response => {
          this.page = response;
        });
    },
    getAllEvents() {
      this.loading = true;
      db.getEntries('mediaClip', 10, 0)
        .then(response => {
          this.loading = false;
          this.mediaClips = response;
        });
    },
    filterByDrug(query) {
      if(query === 'All') {
        this.getAllEvents();
      } else {
        db.getEntriesByDrug('mediaClip', query, 1, 0)
          .then(response => {
            this.mediaClips = response;
          });
      };
    },
  },
}
</script>
