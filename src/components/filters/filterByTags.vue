<template lang="html">

    <fieldset class="checkbox-filter" :class="toggleClass">
      <legend class="checkbox-filter__legend">Filtrer på tema</legend>
      <ul class="checkbox-filter__list">
        <li class="checkbox-filter__list-item" :key="filter" v-for="filter in filters">
          <label class="checkbox" style="text-transform: capitalize">
            <input v-model="selected" :value="filter" type="checkbox" />
            <i class="checkbox__indicator"></i>
            {{filter}}
          </label>
        </li>
      </ul>
      <button class="checkbox-filter__toggle" @click="open = !open">
        <span class="checkbox-filter__toggle-icon"></span>
      </button>
    </fieldset>

</template>

<script>
export default {
  props: {
    filters: Array,
    onChange: Function
  },
  data() {
    return {
      open: false,
      selected: []
    };
  },
  computed: {
    toggleClass() {
      return this.open ? "--open" : "";
    }
  },
  watch: {
    selected: function(val) {
      this.onChange(val);
    }
  }
};
</script>

<style lang="scss">
</style>
