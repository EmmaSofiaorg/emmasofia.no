<template lang="html">

  <div class="block --full --mb --pt-large --pb-large">
    <h3>Donér et beløp</h3>
    <radio-tabs name="Donations" default="Vipps" :options="['Vipps', 'PayPal', 'Bitcoin']" :updateValue="updateValue.bind(this)" />
    <div class="block --full --mt-large" v-if="selected === 'Vipps'">
      <h3>Send til telefon/ID: 11198</h3>
    </div>
    <div class="block --full --mt-large" v-if="selected === 'PayPal'">
      <donation-button />
    </div>
    <div class="block --full --mt-large" v-if="selected === 'Bitcoin'">
      <h4 class="text-uppercase">Adresse:</h4>
      <h3>16CgpgdtXEgqFztVr&shy;2vt28W4Tkdxf49oYn</h3>
    </div>
  </div>

</template>

<script>

import RadioTabs from '@/components/filters/radio-tabs';
import DonationButton from '@/components/global/donation-button';

export default {
  components: {RadioTabs, DonationButton},
  data() {
    return {
      selected: 'Vipps',
    }
  },
  methods: {
    updateValue(e) {
      this.selected = e.target.value;
    }
  }
}
</script>

<style lang="css">
</style>
