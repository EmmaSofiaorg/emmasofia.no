<style lang="scss"></style>

<template lang="html">
  <div class="card-media-clip">
    <div class="card-media-clip__logo" v-if="test.publishedAt">
      <img :src="test.publishedAt.fields.logo.fields.file.url" alt="" />
    </div>
    <div class="card-media-clip__contents">
      <div class="card-media-clip__date">
        {{ getDay }}. {{ getMonth }} {{ getYear }}
      </div>
      <div class="card-media-clip__headline">
        <h3>{{ test.title }}</h3>
      </div>
      <div class="card-media-clip__ingress">
        {{ test.ingress }}
      </div>
      <div class="card-media-clip__link">
        <a :href="test.link" target="_blank">
          Les hele artikkelen
          <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
      <div class="block --mt --full">
        <span style="color: #bbbbbb" :key="tag.id" v-for="tag in test.tags">
          {{ tag }},
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import getDate from "date-fns/get_date";
import format from "date-fns/format";
import noLocale from "date-fns/locale/nb";

export default {
  props: ["test"],
  computed: {
    getDay() {
      return getDate(this.test.published);
    },
    getMonth() {
      return format(this.test.published, "MMMM", { locale: noLocale });
    },
    getYear() {
      return format(this.test.published, "YYYY", { locale: noLocale });
    }
  }
};
</script>
