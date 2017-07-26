<style lang="scss">

.filter {
  margin-bottom: $spacing--large;
  font-family: $font-secondary;
  color: #b1b1b1;
  font-size: 18px;
  text-transform: uppercase;

  &__list {

  }
}

.radio {
  margin-right: $spacing;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: $spacing;
  text-overflow: ellipsis;

  &:hover {
    color: $color-primary;
  }

  &__input {
    display: none;
  }

  &__text {
  }

  &__image {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
  }

  &>input:checked~.radio__image:after {
    content: '\f00c';
    font-family: 'FontAwesome';
    animation-name: fade-in;
    animation-duration: 0.2s;
    color: $color-white;
    height: 50px;
    text-align: center;
    width: 50px;
    position: absolute;
    line-height: 50px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.29);
  }
}

.radio>input:checked~.radio__text {
  border-bottom: 2px solid $color-primary;
  color: $color-primary;
}

</style>

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
