<style lang="scss"></style>

<template lang="html">
  <main v-show="!loading">
    <div class="hero">
      <div class="hero__background" />
      <div class="hero__wrapper">
        <div class="container">
          <div class="block --full --mb-larger">
            <div class="hero__title">
              <h1>{{ page.title }}</h1>
            </div>
            <div class="hero__intro">
              <h3>{{ page.subtitle }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="block --mt-larger --mb-largest">
      <div class="container">
        <p
          v-if="page.body"
          class="markdown"
          v-html="renderMarkDown(page.body)"
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
    db.getEntryById("5qz2trB9GOxTEPXttljgCL").then(response => {
      this.loading = false;
      this.page = response;
    });
  },
  data() {
    return {
      page: {}
    };
  }
};
</script>
