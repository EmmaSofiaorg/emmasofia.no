<style lang="scss">

.sms {
  border: 1px solid $color-gray;
  padding: $spacing;
  box-shadow: 0px 3px 6px 0px rgba(#000000, 0.06);
  overflow: auto;
  text-align: center;

  &__mobile {
    text-align: center;
    width: 100%;
  }

  &__or {
    text-align: center;
    margin: $spacing 0;
    display: block;
    width: 100%;
    color: $color-primary;
    background: $color-white;
    position: relative;

    &:after {
      width: 40%;
      height: 1px;
      top: 10px;
      left: 0;
      content: '';
      position: absolute;
      background-color: #eee;
    }

    &:before {
      width: 40%;
      height: 1px;
      top: 10px;
      right: 0;
      content: '';
      position: absolute;
      background-color: #eee;
    }
  }

  &__input {
    width: 100%;
    display: block;
    text-align: center;
    padding: $spacing--small;
    margin-top: $spacing--small;
    margin-bottom: $spacing--small;
  }
}

</style>

<template lang="html">

  <div class="sms">
    <div class="sms__title">
      Send "<b>EMMASOFIA + E-POST</b>" til <b>2090</b>. </p>
      Det koster <b>300kr</b> å bli medlem.
    </div>
    <div class="sms__mobile" v-if="currentDevice">
      <div class="sms__or"><b>Eller</b></div>
      <label for="email" class="sms___input-label">Ferdigutfylt SMS fra din {{currentDevice}}:</label>
      <input class="sms__input" id="email" v-model="email" placeholder="E-postadresse">
      <a
        v-if="currentDevice === 'Android'"
        class="button --full sms__send"
        :disabled="!validateEmail"
        :href="`sms:2090&body=EmmaSofia ${email}`">Åpne ferdigutfylt SMS</a>
      <a
        v-if="currentDevice === 'iPhone'"
        class="button --full sms__send"
        :href="`sms:2090&body=EmmaSofia ${email}`">Åpne ferdigutfylt SMS</a>
    </div>
  </div>

</template>

<script>

import { isMobileDevice } from '@/utils/checkDevice';
import { validateEmail } from '@/utils/validation';

export default {
  name: 'sms',
  mounted() {
    this.currentDevice = isMobileDevice();
    console.log('currentDevice', this.currentDevice);
  },
  data () {
    return {
      currentDevice: '',
      email: '',
    }
  },
  computed: {
    validateEmail () {
      const email = this.email;
      return validateEmail(email);
    }
  }
}
</script>
