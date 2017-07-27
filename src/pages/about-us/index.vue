<style lang="scss">
</style>

<template lang="html">

  <main v-show="!loading">

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

      <section class="container --wide">

      <div class="col --main">
        <div class="block --mt">
          <p
            v-if="page.body"
            class="markdown"
            v-html="renderMarkDown(page.body)">
          </p>
        </div>
      </div>

    </section>
  </main>

</template>

<script>

import db from '@/database';

export default {
  store: ['loading'],
  mounted() {
    db.getEntryById('392W1HMEJa2ykAgMGQgicq')
      .then((response) => {
        this.loading = false;
        this.page = response
      });
  },
  data () {
    return {
      page: {},
    }
  }
}
</script>
