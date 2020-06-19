<style lang="css"></style>

<template lang="html">
  <main v-show="!loading">
    <div class="hero">
      <div class="hero__background --diagonal" />
      <div class="hero__wrapper">
        <div class="container --narrow">
          <div class="hero__title">
            <h1>{{ drug.name }}</h1>
          </div>
          <div class="hero__intro">
            <h3>{{ drug.intro }}</h3>
          </div>
          <div class="block --full --mt-larger">
            <div
              class="block --full --border-radius --box-shadow"
              style="width: 100%; height: 250px; background-position: center; background-size: cover;"
              :style="`background-image: url(${drug.image.fields.file.url})`"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="block">
      <section class="container --narrow">
        <div class="block --full">
          <nav class="filter">
            <label class="radio">
              <input
                type="radio"
                name="sort"
                class="radio__input"
                value="All"
              />
              <div class="radio__text">Forberedelser</div>
            </label>
            <label class="radio">
              <input
                type="radio"
                name="sort"
                class="radio__input"
                value="LSD"
              />
              <div class="radio__text">Under rusen</div>
            </label>
            <label class="radio">
              <input
                type="radio"
                name="sort"
                class="radio__input"
                value="Psilosybin"
              />
              <div class="radio__text">Etter rusen</div>
            </label>
          </nav>
        </div>

        <div class="block --full --mt-larger">
          <h2>Forberedelser</h2>
          <p v-if="drug.prep" v-html="renderMarkDown(drug.prep)"></p>
        </div>

        <div class="block --full --mt">
          <h2>Under rusen</h2>
          <p v-if="drug.during" v-html="renderMarkDown(drug.during)"></p>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import db from "@/database";

export default {
  name: "drug",
  store: ["loading"],
  mounted() {
    this.loading = true;
    db.getEntryBySlug("drug", this.$route.params.slug).then(response => {
      this.loading = false;
      this.drug = response;
    }); // Map fields from response and set av events
  },
  data() {
    return {
      drug: {}
    };
  }
};
</script>
