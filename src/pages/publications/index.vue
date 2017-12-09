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

      <div class="container">

        <div class="row">
          <div class="col-md-8">
            <div class="block --full --mt">
              <article v-for="publication in filteredPublications">
                <publication :publication="publication" />
              </article>
            </div>
            <div class="block --full --mb" v-if="publications.length < 1">
              <h4>Ingen studier funnet.</h4>
            </div>
          </div>
          <div class="col-md-4">
            <div class="block --full">
              <fieldset>
                <legend>Filtrer på tema</legend>
                <div class="block --full" style="text-transform: capitalize" v-for="tag in allTags">
                  <label class="checkbox">
                    {{tag}}
                    <input type="checkbox" v-model="filterBy" :value="tag" />
                    <i class="checkbox__indicator"></i>
                  </label>
                </div>
              </fieldset>

            </div>
          </div>
        </div>

      </div>

    </section>

  </main>

</template>

<script>

import db from '@/database'

import Filters from '@/components/global/filters';
import Publication from '@/components/cards/publication';

export default {
  store: ['loading'],
  components: { Filters, Publication },
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
      db.getEntries('publication', 10, 0)
        .then(response => {
          this.loading = false;
          this.publications = response;
          console.log(response);
        });
    },
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
      const publications = this.publications;

      if (filterBy.length > 0) {
        return publications.filter(publication => {
          if(publication.tags) return filterBy.every(filter => publication.tags.includes(filter));
          else return false;
        });
      } else {
        return publications;
      }
    }
  }
}
</script>
