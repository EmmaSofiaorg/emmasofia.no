<style lang="scss"></style>

<template lang="html">
  <main v-show="!loading">
    <div class="hero">
      <div class="hero__background" />
      <div class="hero__wrapper">
        <div class="container">
          <div class="block --full --mb-larger">
            <div class="hero__title">
              <h1>{{ test.title }}</h1>
            </div>
            <div class="hero__intro">
              <h3>{{ test.ingress }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="block --mt-larger --mb-largest">
      <div class="container">
        <p
          v-if="test.body"
          class="markdown"
          v-html="renderMarkDown(test.body)"
        ></p>
      </div>
    </section>
  </main>
</template>

<script>
import db from "@/database";

export default {
  store: ["loading"],
  created() {
    db.getEntryBySlug("test", this.$route.params.slug).then(response => {
      this.loading = false;
      this.test = response;
    });
  },
  data() {
    return {
      test: {}
    };
  }
};
</script>
