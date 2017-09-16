<style lang="css">
</style>

<template lang="html">

  <main v-show="!loading">


    <section class="hero">
      <div class="hero__background --diagonal" />
      <div class="hero__wrapper">

          <div class="col --main">
            <div class="block --full --mb --pb-larger">
              <div class="hero__title">
                <h1>{{page.title}}</h1>
              </div>
              <div class="hero__intro">
                <h3>{{page.subtitle}}</h3>
              </div>
              <div class="block --full">
                <router-link
                  :to="{name: 'member'}"
                  class="button"
                  tag="button">
                  Bli medlem
                </router-link>
                <router-link
                  :to="{name: 'testkits'}"
                  class="button --white"
                  tag="button">
                  Kjøp testkits
                </router-link>
              </div>
            </div>
          </div>

          <div class="col --sidebar">
            <div class="block --full --mt" v-if="events[0]">
              <h3>Neste arrangement:</h3>
              <event :event="events[0]" />
            </div>
          </div>

      </div>
    </section>

    <section class="block --mb-larger --mt-larger">
      <div class="container">
        <h3>Skadereduserende rusveiledere</h3>
        <div class="row">
          <div class="col-xs-12 col-sm-4" v-for="drug in drugs">
            <drug :drug="drug" />
          </div>
        </div>
      </div>
    </section>

    <section class="block --mb">
      <div class="container">
        <h3>Siste studier</h3>
        <div class="row">
          <div class="col-xs-12 col-md-6" v-for="publication in publications">
            <publication :publication="publication" />
          </div>
        </div>
      </div>
    </section>


  </main>

</template>

<script>

import db from '@/database';

import Spinner from '@/components/global/spinner';

import Event from '@/components/cards/event';
import Drug from '@/components/cards/drug';
import Publication from '@/components/cards/publication';

export default {
  components: { Event, Drug, Publication },
  store: ['loading'],
  mounted() {
    this.loading = true;
    db.getEntries('drug', 4, 0)
      .then(response => this.drugs = response);
    db.getEntries('event', 4, 0)
      .then(response => this.events = response);
    db.getEntries('publication', 1, 0)
      .then(response => this.publications = response);
    db.getEntryById('3QoebEAuKQAKaEus2I8Euq')
      .then((response) => {
        this.loading = false;
        this.page = response
      });
  },
  data() {
    return {
      events: [],
      publications: [],
      drugs: [],
      page: {}
    }
  }
}
</script>
