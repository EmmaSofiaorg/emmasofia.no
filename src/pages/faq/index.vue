<style lang="css">
</style>

<template lang="html">

  <main>

    <div class="hero">
      <div class="hero__background" />
      <div class="hero__wrapper">
        <div class="container">
          <div class="col --main">
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
          <article :key="faq.id" v-for="faq in faqs">
            <div class="block --full --mb">
              <h2>{{faq.question}}</h2>
              <p>{{faq.answer.content[0].content[0].value}}</p>
              <!-- faq :faq="faq" / -->
            </div>
          </article>
          <div class="block --full --mt --mb" v-if="!faqs.length">
            Ingen FAQ spørsmål funnet
          </div>
        </div>
      </div>
    </section>
  </main>

</template>

<script>
import db from "@/database";

import Filters from "@/components/global/filters";
import Faq from "@/components/cards/faq";

export default {
  store: ["loading"],
  components: { Filters, Faq },
  created() {
    this.getPageDetails();
    this.getAll();
  },
  data() {
    return {
      faqs: [],
      page: {}
    };
  },
  methods: {
    getPageDetails() {
      db.getEntryById("4RcOGVSZUAcAkYossCE64E").then(response => {
        this.loading = false;
        this.page = response;
      });
    },
    getAll() {
      this.loading = true;
      db.getEntries("faq", 100, 0).then(response => {
        this.loading = false;
        this.faqs = response;
      });
    }
  }
};
</script>
