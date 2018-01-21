<template lang="html">

  <div class="radio-tabs">
    <label class="radio-tabs__item" v-for="option, index in options">
      <input type="radio"
        :name="name"
        :value="option"
        v-model="picked"
        @change="updateValue" />
      <div class="radio-tabs__label">{{option}}</div>
    </label>
  </div>

</template>

<script>
export default {
  props: {
    options: Array,
    name: String,
    updateValue: Function,
  },
  data() {
    return {
      picked: this.options[0]
    }
  }
}
</script>
