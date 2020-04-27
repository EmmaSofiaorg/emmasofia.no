<style lang="scss"></style>

<template lang="html">
  <main v-show="!loading">
    <div class="hero">
      <div class="hero__background" />
      <div class="hero__wrapper">
        <div class="col --half">
          <div class="hero__title">
            <h1>{{ page.title }}</h1>
          </div>
          <div class="hero__intro">
            <h3>{{ page.subtitle }}</h3>
          </div>
        </div>
      </div>
    </div>

    <section class="block --pb-larger --pt-large">
      <div class="container --wide">
        <div class="grid --space-between">
          <div class="grid__item --s-12 --m-12 --l-6">
            <div class="block --bg-light --mb-larger --pb --pt">
              <donations />
            </div>

            <div class="block --full --bg-white --mb-larger">
              <p
                v-if="page.body"
                class="markdown"
                v-html="renderMarkDown(page.body)"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
//  this component receives a token on mount
//  when the user has filled out the form successfully

import db from "@/database";

import bySMS from "@/components/member/sms";
import Donations from "@/components/cards/donations";
import RadioTabs from "@/components/filters/radio-tabs";

export default {
  store: ["loading"],
  components: { bySMS, Donations, RadioTabs },
  data() {
    return {
      memberChoice: "Med kort",
      page: {}
    };
  },
  created() {
    db.getEntryById("57DlUIQlM4IKwWUKk4SUe6").then(response => {
      console.log(response);
      this.loading = false;
      this.page = response;
    });
  },
  methods: {
    updateMemberChoice(e) {
      this.memberChoice = e.target.value;
    }
  }
};
</script>
