<style lang="scss">
</style>

<template lang="html">

  <main v-show="!loading">

      <div class="hero">
        <div class="hero__background" />
          <div class="hero__wrapper">
            <div class="container --narrow">
              <div class="block --full --mb-larger">
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
      </div>

      <section class="block --mt-minus-large">
        <div class="container">
            <embed-video :url="'https://www.youtube.com/embed/2w_pC5mtRxs'" />
        </div>
      </section>

      <section class="block --mt-larger">

        <div class="container --narrow">
          <p
            v-if="page.body"
            class="markdown"
            v-html="renderMarkDown(page.body)">
          </p>
        </div>

    </section>
  </main>

</template>

<script>

import db from '@/database';
import EmbedVideo from '@/components/embed/video.vue';

export default {
  store: ['loading'],
  components: {EmbedVideo},
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
