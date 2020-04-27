<style lang="scss"></style>

<template lang="html">
  <main v-show="!loading">
    <div class="hero">
      <div class="hero__background" />
      <div class="hero__wrapper">
        <div class="container --text-center --narrow">
          <div class="block --full --mb-larger">
            <div class="hero__title">
              <h1>Ledige stillinger</h1>
            </div>
            <div class="hero__intro">
              <h3>Her finner du ledige stillinger</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="block --mt-larger">
      <div class="container --narrow">
        <div v-if="jobs.length">
          <router-link
            :to="{ name: 'job', params: { slug: job.slug } }"
            class="card"
            :key="job.id"
            v-for="job in jobs"
          >
            <div class="block --text-center --pt --pb">
              <h2>{{ job.title }}</h2>
              <p class="block --full">{{ job.shortDesc }}</p>
            </div>
          </router-link>
        </div>
        <div v-else class="--text-center">
          <p>Vi har ingen ledige stillinger for øyeblikket.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import db from "@/database";

export default {
  store: ["loading"],
  created() {
    db.getEntries("job", 10, 0).then(response => {
      this.loading = false;
      this.jobs = response;
    });
  },
  data() {
    return {
      jobs: []
    };
  }
};
</script>
