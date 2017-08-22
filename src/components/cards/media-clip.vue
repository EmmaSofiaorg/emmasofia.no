<template lang="html">

  <div class="card-media-clip">
    <div class="card-media-clip__logo">
      <img :src="mediaClip.mediaChannel.fields.logo.fields.file.url" />
    </div>
    <div class="card-media-clip__contents">
      <div class="card-media-clip__date">
        {{getDay}}. {{getMonth}} {{getYear}}
      </div>
      <div class="card-media-clip__headline">
        <h2>{{mediaClip.headline}}</h2>
      </div>
      <div class="card-media-clip__ingress">
        {{mediaClip.ingress}}
      </div>
      <div class="block --full --mt">
        <a :href="mediaClip.url" target="_blank">Les here saken
          <i class="fa fa-external-link" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>

</template>

<script>

import getDate from 'date-fns/get_date'
import format from 'date-fns/format'
import noLocale from 'date-fns/locale/nb'

export default {
  props: ['mediaClip'],
  computed: {
    getDay() {
      return getDate(this.mediaClip.publishedDate)
    },
    getMonth() {
      return format(
        this.mediaClip.publishedDate,
        'MMMM',
        {locale: noLocale}
      );
    },
    getYear() {
      return format(
        this.mediaClip.publishedDate,
        'YYYY',
        {locale: noLocale}
      );
    }
  }
}
</script>
