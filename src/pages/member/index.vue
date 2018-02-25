<style lang="scss">
</style>

<template lang="html">

  <main v-show="!loading">

    <div class="hero">
      <div class="hero__background" />
        <div class="hero__wrapper">
          <div class="col --half">
            <div class="hero__title">
              <h1>Støtt arbeidet vårt</h1>
            </div>
            <div class="hero__intro">
              <h3>{{page.subtitle}}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="block --pb-larger --pt-large">
      <div class="container">

        <div class="grid --space-between">

          <div class="grid__item --s-12 --m-12 --l-6">
            <div class="block --full --bg-white --mb-larger">
              <h3>Bli medlem</h3>
              <radio-tabs name="Member" :default="memberChoice" :options="['Med kort','Via SMS']" :updateValue="updateMemberChoice.bind(this)" />
              <div class="block --full --mt-large" v-if="memberChoice === 'Med kort'">
                <MemberForm />
              </div>
              <div class="block --full --mt-large" v-if="memberChoice === 'Via SMS'">
                <by-SMS />
              </div>
            </div>
          </div>

          <div class="grid__item --s-12 --m-12 --l-5">
            <div class="block --bg-light --pb --pt">
              <donations />
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
import axios from 'axios'

import db from '@/database';

import bySMS from '@/components/member/sms';
import MemberForm from '@/components/member/member-form'
import Donations from '@/components/cards/donations'
import RadioTabs from '@/components/filters/radio-tabs';

export default {
  store: ['loading'],
  components: { bySMS, MemberForm, Donations, RadioTabs },
  data () {
    return {
      memberChoice: 'Med kort',
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
  methods: {
    updateMemberChoice(e) {
      this.memberChoice = e.target.value;
    }
  }
}

</script>
