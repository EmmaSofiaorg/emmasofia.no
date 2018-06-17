<style lang="scss">
</style>

<template lang="html">

  <main v-show="!loading">

      <div class="hero">
        <div class="hero__background" />
          <div class="hero__wrapper">
            <div class="container --text-center --narrow">
              <div class="block --full --mb-larger">
                <div class="hero__title">
                  <h1>{{job.title}}</h1>
                </div>
                <div class="hero__intro">
                  <h3>{{job.shortDesc}}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="block --mt-larger --mb-largest">

        <div class="container --narrow">
          <div v-if="job.desc">
            <div class="block --full --mb-largest">
              <p class="block --full --pb" v-html="renderMarkDown(job.desc)" />
              <h3>Arbeidsoppgaver</h3>
              <ul class="list">
                <li v-for="task in job.tasks">{{task}}</li>
              </ul>
              <h3>Kvalifikasjoner</h3>
              <ul class="list">
                <li v-for="qualification in job.qualifications">{{qualification}}</li>
              </ul>
              <h3>Personlige egenskaper</h3>
              <ul class="list">
                <li v-for="strength in job.personalCars">{{strength}}</li>
              </ul>
            </div>
          </div>
        </div>

      </section>

  </main>

</template>

<script>

import db from '@/database';

export default {
  store: ['loading'],
  created() {
    db.getEntryBySlug('job', this.$route.params.slug)
      .then((response) => {
        this.loading = false;
        this.job = response
      });
  },
  data () {
    return {
      job: {}
    }
  }
}
</script>
