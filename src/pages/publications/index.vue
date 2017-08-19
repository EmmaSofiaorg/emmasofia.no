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

    <section class="block --mt-large --mb-larger">

      <div class="container">

      <filters
        :title="'Filter'"
        :filterBy="'drug'"
        :updateFilters="filterByDrug.bind(this)" />

      <div class="col --main">
        <div class="block --full --mt">
          <article v-for="publication in publications">
            <publication :publication="publication" />
          </article>
        </div>
        <div class="block --full --mb" v-if="publications.length < 1">
          <h4>Ingen studier funnet.</h4>
        </div>
      </div>

      </div>

    </section>

  </main>

</template>

<script>

import db from '@/database'

import Filters from '@/components/global/filters';
import Publication from '@/components/cards/publication';

export default {
  store: ['loading'],
  components: { Filters, Publication },
  mounted() {
    this.getPageDetails();
    this.getAllEvents();
  },
  data() {
    return {
      publications: [],
      page: {},
    }
  },
  methods: {
    getPageDetails() {
      db.getEntryById('Sq3vqEz8MmOAaoGAuGOuU')
        .then(response => {
          this.page = response;
        });
    },
    getAllEvents() {
      this.loading = true;
      db.getEntries('publication', 10, 0)
        .then(response => {
          this.loading = false;
          this.publications = response;
        });
    },
    filterByDrug(query) {
      if(query === 'All') {
        this.getAllEvents();
      } else {
        db.getEntriesByDrug('publication', query, 1, 0)
          .then(response => {
            this.publications = response;
          });
      };
    },
  },
}
</script>
