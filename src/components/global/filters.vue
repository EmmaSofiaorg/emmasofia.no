<template lang="html">

  <section class="filter">

    <div class="filter__list">
      <label class="radio">
        <input
          type="radio"
          class="radio__input"
          v-model="picked"
          value="All"
        />
        <div class="radio__text">Alle</div>
      </label>
      <label v-for="item in list" class="radio">
        <input
          type="radio"
          class="radio__input"
          v-model="picked"
          :value="item.name"
        />
        <!-- <div class="radio__image" :style="`background-image: url(${item.image.fields.file.url})`" /> -->
        <div class="radio__text">{{item.name}}</div>
      </label>
    </div>
  </section>

</template>

<script>

import db from '@/database';

export default {
  props: ['updateFilters', 'filterBy', 'title'],
  mounted() {
    db.getEntries(this.filterBy, 10, 0)
      .then(response => {
        this.list = response;
      });
  },
  data () {
    return {
      picked: 'All',
      list: [],
      expanded: false,
    }
  },
  watch: {
    picked: function (newArray) {
      this.updateFilters(newArray);
    }
  }
}
</script>
