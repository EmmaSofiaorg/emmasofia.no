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

  </main>

</template>

<script>
import db from "@/database";

export default {
  store: ["loading"],
  created() {
    db.getEntryBySlug("job", this.$route.params.slug).then(response => {
      this.loading = false;
      this.job = response;
    });
  },
  data() {
    return {
      job: {}
    };
  }
};
</script>
