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

      <section class="block">

      <div class="container">

        <div class="row">

        <div class="col-xs-12 col-md-6">
          <div class="block --full --mt">
            <h3>Via SMS (300kr)</h3>
            <by-SMS />
          </div>
        </div>

        <div class="col-xs-12 col-md-6">
          <div class="block --full --mt">
            <h3>Med kort</h3>
            <by-card />
          </div>
        </div>

        </div>

      </div>

    </section>
  </main>

</template>

<script>

import db from '@/database';
import bySMS from '@/components/member/sms';
import byCard from '@/components/member/card';

export default {
  store: ['loading'],
  components: { bySMS, byCard },
  mounted() {
    db.getEntryById('57DlUIQlM4IKwWUKk4SUe6')
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
