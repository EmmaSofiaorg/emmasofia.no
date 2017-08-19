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

    <section class="block --mt-large">

      <div class="container">

        <div class="col --main">
          <div class="block --full --mb">
            <article v-for="event in events">
              <event :event="event" />
            </article>
          </div>
          <div class="block --full --mt --mb">
            <button class="button">Last gamle arrangementer</button>
          </div>
        </div>

      </div>

    </section>
  </main>

</template>

<script>

import db from '@/database'

import Filters from '@/components/global/filters';
import Event from '@/components/cards/event';

export default {
  store: ['loading'],
  components: { Filters, Event },
  mounted() {
    this.getPageDetails();
    this.getAllEvents();
  },
  data() {
    return {
      events: [],
      page: {},
    }
  },
  methods: {
    getPageDetails() {
      db.getEntryById('645Q1Gtp3UiYEsK0Kiys8Q')
        .then(response => {
          this.loading = false;
          this.page = response;
        });
    },
    getAllEvents() {
      this.loading = true;
      db.getEntries('event', 10, 0)
        .then(response => {
          this.loading = false;
          this.events = response;
        });
    },
  },
}
</script>
