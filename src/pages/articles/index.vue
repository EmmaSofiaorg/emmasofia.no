<style lang="css"></style>

<template lang="html">
  <main>
    <div class="hero">
      <div class="hero__background" />
      <div class="hero__wrapper">
        <div class="col --half">
          <div class="hero__title">
            <h1>{{ page.title }}</h1>
          </div>
          <div class="hero__intro">
            <h3>{{ page.subtitle }}</h3>
          </div>
        </div>
      </div>
    </div>

    <section class="block --mt-large --mb-larger">
      <div class="container --wide">
        <div class="grid --s-reversed --l-normal">
          <div class="grid__item --m-12 --l-8">
            <div class="block --full --mt">
              <article :key="test.id" v-for="test in filteredTests">
                <test :test="test" />
              </article>
            </div>
            <div class="block --full --mb" v-if="tests.length < 1">
              <h4>Ingen artikler funnet.</h4>
            </div>
          </div>
          <div class="grid__item --m-12 --l-4">
            <div class="block --full">
              <FilterByTags :filters="allTags" :onChange="onFiltered" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import db from "@/database";

import FilterByTags from "@/components/filters/filterByTags";
import Filters from "@/components/global/filters";
import Test from "@/components/cards/article";

export default {
  store: ["loading"],
  components: { Filters, Test, FilterByTags },
  created() {
    this.getPageDetails();
    this.getAllTests();
  },
  data() {
    return {
      tests: [],
      page: {},
      filterBy: []
    };
  },
  methods: {
    getPageDetails() {
      db.getEntryById("2W9ORNkntIdxYZnOBTpySo").then(response => {
        this.page = response;
      });
    },
    getAllTests() {
      this.loading = true;
      db.getEntries("test", 100, 0).then(response => {
        this.loading = false;
        this.tests = response;
      });
    },
    onFiltered(filters) {
      this.filterBy = filters;
    }
  },
  computed: {
    allTags() {
      // get All tags in an array
      const allTags = this.tests.reduce((acc, test) => {
        if (test.tags) return [...acc, ...test.tags];
        else return acc;
      }, []);
      // remove duplicate tags and similar tags with lowercase/uppercase
      const tagsWithoutDuplicates = allTags.filter((tag, index, tags) => {
        return tags.indexOf(tag.toLowerCase()) === index;
      });
      return tagsWithoutDuplicates;
    },
    filteredTests() {
      const filterBy = this.filterBy;
      const allTests = this.tests;

      if (filterBy.length > 0) {
        return allTests.filter(test => {
          if (test.tags)
            return filterBy.every(filter => test.tags.includes(filter));
          else return false;
        });
      } else {
        return allTests;
      }
    }
  }
};
</script>
