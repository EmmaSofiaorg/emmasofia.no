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

    <div class="block">
      <div class="container">

        <div class="row">
          <div class="col-xs-12 col-md-5">
            <div class="block --full --mt">
              <h3>Via SMS (300kr)</h3>
              <by-SMS />
            </div>
          </div>
          <div class="col-xs-12 col-md-7">
            <div class="block --full --mt">
              <h3>Med kort</h3>
              <div class="block --pb --pt --box-shadow">
                <MemberForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>

//  this component receives a token on mount
//  when the user has filled out the form successfully
import axios from 'axios'

import db from '@/database';

import bySMS from '@/components/member/sms';
import MemberForm from '@/components/member/member-form'

export default {
  store: ['loading'],
  components: { bySMS, MemberForm },
  data () {
    return {
      page: {},
    }
  },
  mounted () {
    db.getEntryById('57DlUIQlM4IKwWUKk4SUe6')
      .then((response) => {
        this.loading = false;
        this.page = response
      });
  },
}

</script>
