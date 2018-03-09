<style lang="css">

</style>

<template lang="html">

  <main>

    <div class="hero">
      <div class="hero__background" />
        <div class="hero__wrapper">
          <div class="col --half">
            <div class="hero__title">
              <h1>{{page.title}}</h1>
            </div>
            <div class="hero__intro">
              <h3>{{page.subtitle}}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="block --mt-large --mb-larger">

      <div class="container --wide">

        <div class="grid --s-reversed --l-normal">
          <div class="grid__item --m-12 --l-8">
            <div class="block --full --mt">
              <article v-for="publication in filteredPublications">
                <publication :publication="publication" />
              </article>
            </div>
            <div class="block --full --mb" v-if="publications.length < 1">
              <h4>Ingen studier funnet.</h4>
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

import db from '@/database'

import FilterByTags from '@/components/filters/filterByTags';
import Filters from '@/components/global/filters';
import Publication from '@/components/cards/publication';

export default {
  store: ['loading'],
  components: { Filters, Publication, FilterByTags },
  mounted() {
    this.getPageDetails();
    this.getAllPublications();
  },
  data() {
    return {
      publications: [],
      page: {},
      filterBy: [],
    }
  },
  methods: {
    getPageDetails() {
      db.getEntryById('Sq3vqEz8MmOAaoGAuGOuU')
        .then(response => {
          this.page = response;
        });
    },
    getAllPublications() {
      this.loading = true;
      db.getEntries('publication', 100, 0)
        .then(response => {
          this.loading = false;
          this.publications = response;
        });
    },
    onFiltered(filters) {
      this.filterBy = filters;
    }
  },
  computed: {
    allTags() {
      // get All tags in an array
      const allTags = this.publications.reduce((acc,publication) => {
        if(publication.tags) return [...acc,...publication.tags]
        else return acc;
      }, []);
      // remove duplicate tags and similar tags with lowercase/uppercase
      const tagsWithoutDuplicates = allTags.filter((tag,index,tags) => {
        return tags.indexOf(tag.toLowerCase()) === index;
      });
      return tagsWithoutDuplicates;
    },
    filteredPublications() {
      const filterBy = this.filterBy;
      const allPublications = this.publications;

      if (filterBy.length > 0) {
        return allPublications.filter(publication => {
          if(publication.tags) return filterBy.every(filter => publication.tags.includes(filter));
          else return false;
        });
      } else {
        return allPublications;
      }
    }
  }
}
</script>
