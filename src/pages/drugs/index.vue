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

    <section class="container --wide">

      <div class="block --mt">
        <div class="row">
            <div class="col-xs-12 col-md-4" v-for="drug in drugs">
              <article>
                <drug :drug="drug" />
              </article>
            </div>
        </div>
      </div>

    </section>
  </main>

</template>

<script>

import db from '@/database'

import Filters from '@/components/global/filters';
import Drug from '@/components/cards/drug';

export default {
  store: ['loading'],
  components: { Filters, Drug },
  mounted() {
    this.getPageDetails();
    this.getAllEvents();
  },
  data() {
    return {
      drugs: [],
      page: {},
    }
  },
  methods: {
    getPageDetails() {
      db.getEntryById('7uwxBTxh5uUIkGU6466Ism')
        .then(response => {
          this.loading = false;
          this.page = response;
        });
    },
    getAllEvents() {
      this.loading = true;
      db.getEntries('drug', 10, 0)
        .then(response => {
          this.loading = false;
          this.drugs = response;
        });
    },
  },
}
</script>
