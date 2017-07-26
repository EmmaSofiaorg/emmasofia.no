<style lang="scss">

.card-event {
  transition: all 0.2s ease;
  margin-bottom: $spacing;
  border: 1px solid #eee;
  background: $color-white;
  border-radius: 3px;
  padding: $spacing;
  font-family: $font-secondary;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 2px 1px rgba(#000000, 0.1);

  &:hover {
    text-decoration: none;
    transform: translateY(-3px);
    transition: all 0.2s ease;
    box-shadow: $box-shadow;
  }

  &__date {
    width: 100px;
    height: 100px;
    background: $color-primary;
    border-radius: 3px;
    color: $color-white;
    margin-right: $spacing--small;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__month {
    text-transform: uppercase;
    text-align: center;
  }

  &__day {
    text-align: center;
    font-size: 40px;
  }

  &__title {
    font-size: 20px;
    color: #000;
    margin-bottom: $spacing--small;
  }

  &__place {
    display: inline-block;
    margin-right: $spacing--small;
  }

  &__facebook {
    display: inline-block;
  }
}


</style>

<template lang="html">

  <div class="card-event" >
    <div class="card-event__date">
      <div class="card-event__month">
        {{getStartMonth}}
      </div>
      <div class="card-event__day">
        {{getStartDay}}
      </div>
    </div>
    <div class="card-event__contents">
      <div class="card-event__title">
        <router-link :to="{name: 'topic'}">{{event.title}}</router-link>
      </div>
      <div class="card-event__place">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
        <a target="_blank" :href="`http://maps.google.com/maps?q=${event.place.lat},${event.place.lon}`">Sted</a>
      </div>
      <div class="card-event__facebook">
        <i class="fa fa-facebook-official" aria-hidden="true"></i>
        <a target="_blank" href="hello">Facebook</a>
      </div>
    </div>
  </div>

</template>

<script>

import getDate from 'date-fns/get_date'
import format from 'date-fns/format'
import noLocale from 'date-fns/locale/nb'

export default {
  props: ['event'],
  computed: {
    getStartDay() {
      return getDate(this.event.start)
    },
    getStartMonth() {
      return format(
        this.event.start,
        'MMMM',
        {locale: noLocale}
      );
    }
  }
}
</script>
