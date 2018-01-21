<template lang="html">

  <div class="block --full --mb --pt-large --pb-large  --bg-white">
    <h3>Donér et beløp</h3>
    <radio-tabs name="Donations" :options="['Vipps', 'PayPal', 'Bitcoin']" :updateValue="updateValue.bind(this)" />
    <div class="block --full --mt-large" v-if="selected === 'Vipps'">
      <h3>Send til telefon/ID: 11198</h3>
    </div>
    <div class="block --full --mt-large" v-if="selected === 'PayPal'">
      <h3>Donér knapp</h3>
    </div>
    <div class="block --full --mt-large" v-if="selected === 'Bitcoin'">
      <h3>Adresse: 16CgpgdtXEgqFztVr2vt28W4Tkdxf49oYn</h3>
    </div>
  </div>

</template>

<script>

import RadioTabs from '@/components/filters/radio-tabs';

export default {
  components: {RadioTabs},
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
