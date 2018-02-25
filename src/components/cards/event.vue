<style lang="scss">

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
        <a href="#">{{event.title}}</a>
      </div>
      <div class="card-event__place">
        <i class="fas fa-map-marker-alt"></i>
        <a target="_blank" :href="`http://maps.google.com/maps?q=${event.place.lat},${event.place.lon}`">Sted</a>
      </div>
      <div class="card-event__facebook">
        <i class="fab fa-facebook-f"></i>
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
