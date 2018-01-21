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

    <section class="block --mt-large --mb-largest">

      <div class="container">

      <div class="block --full --mb" v-if="filteredMedia.length < 1">
        <h4>Ingen artikler funnet.</h4>
      </div>

      <div class="row">
        <div class="col-md-9">
          <div class="block --full --mt">
            <article v-for="mediaClip in filteredMedia">
              <media-clip :mediaClip="mediaClip" />
            </article>
          </div>
        </div>
        <div class="col-md-3">
          <div class="block --full">
            <fieldset>
              <legend>Filtrer på tema</legend>
              <div class="block --full --mt-smaller --mb-smaller" style="text-transform: capitalize" v-for="tag in allTags">
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

import FilterByTags from '@/components/filters/filterByTags';
import MediaClip from '@/components/cards/media-clip';

export default {
  store: ['loading'],
  components: { FilterByTags, MediaClip },
  mounted() {
    this.getPageDetails();
    this.getAllEvents();
  },
  data() {
    return {
      page: {},
      mediaClips: [],
      filterBy: [],
    }
  },
  methods: {
    getPageDetails() {
      db.getEntryById('2Cl0VIYGJaI0iwwMCGke0K')
        .then(response => {
          this.page = response;
        });
    },
    getAllEvents() {
      this.loading = true;
      db.getEntries('mediaClip', 200, 0)
        .then(response => {
          this.loading = false;
          console.log(response);
          this.mediaClips = response;
        });
    },
  },
  computed: {
    allTags() {
      // get All tags in an array
      const allTags = this.mediaClips.reduce((acc,clip) => {
        if(clip.drugTags) return [...acc,...clip.drugTags]
        else return acc;
      }, []);
      // remove duplicate tags and similar tags with lowercase/uppercase
      const tagsWithoutDuplicates = allTags.filter((tag,index,tags) => {
        return tags.indexOf(tag.toLowerCase()) === index;
      });
      return tagsWithoutDuplicates;
    },
    filteredMedia() {
      const filterBy = this.filterBy;
      const mediaClips = this.mediaClips;

      if (filterBy.length > 0) {
        return mediaClips.filter(mediaClip => {
          if(mediaClip.drugTags) return filterBy.every(filter => mediaClip.drugTags.includes(filter));
          else return false;
        });
      } else {
        return mediaClips;
      }
    }
  }
}
</script>
