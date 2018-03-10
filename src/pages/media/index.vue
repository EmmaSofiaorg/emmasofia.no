<style lang="css">

.list-move {
  transition: transform 0.7s;
}

.list-enter-active, .list-leave-active {
  transition: all 0.3s ease;
}

.list-leave-active {
  position: absolute !important;
}

.list-enter, .list-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-50px);
}


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

      <div class="container --wide">

      <div class="block --full --mb" v-if="mediaClips.length < 1">
        <h4>Ingen artikler funnet.</h4>
      </div>

      <div class="grid --s-reversed --l-normal">
        <div class="grid__item --m-12 --l-8">
          <div class="block --full --mt">
              <transition-group class="reservation-list" name="list" tag="div">
              <article v-for="mediaClip, index in mediaClips" :key="index">
                <media-clip :mediaClip="mediaClip" />
              </article>
            </transition-group>
          </div>
        </div>
        <div class="grid__item --m-12 --l-4">
          <div class="block --full">
            <FilterByTags :filters="allTags" :onChange="onFiltered" />
          </div>
        </div>
      </div>

      <div v-if="showMoreButton" class="block">
        <button class="button --large" @click="getMediaClips">Last flere artikler</button>
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
    this.getMediaClips();
    this.getAllMediaClips();
  },
  data() {
    return {
      page: {},
      allMediaClips: [],
      mediaClips: [],
      mediaClipLimit: 15,
      mediaClipStart: 0,
      filterBy: [],
      showMoreButton: true,
    }
  },
  methods: {
    getPageDetails() {
      db.getEntryById('2Cl0VIYGJaI0iwwMCGke0K')
        .then(response => {
          this.page = response;
        });
    },
    getMediaClips() {
      const limit = this.mediaClipLimit;
      const start = this.mediaClipStart;
      const filters = this.filterBy;
      const tags = filters.toString();
      this.loading = true;

      if (filters) {
        db.getMediaByTags(tags, limit , start)
          .then(response => {
            this.showMoreButton = response.length < limit ? false : true;
            this.loading = false;
            this.mediaClipStart = start + limit;
            this.mediaClips.push(...response);
          });
      }  else {
        db.getMediaByDate(limit , start)
          .then(response => {
            this.showMoreButton = response.length < limit ? false : true;
            this.loading = false;
            this.mediaClipStart = start + limit;
            this.mediaClips.push(...response);
          });
      }
    },
    getAllMediaClips() {
      db.getMediaByDate(200 , 0)
        .then(response => {
          this.allMediaClips = response;
        });
    },
    onFiltered(filters) {
      this.filterBy = filters;
      this.mediaClips = [];
      this.mediaClipStart = 0;
      this.getMediaClips();
    }
  },
  computed: {
    allTags() {
      // get All tags in an array
      const allTags = this.allMediaClips.reduce((acc,clip) => {
        if(clip.drugTags) return [...acc,...clip.drugTags]
        else return acc;
      }, []);
      // remove duplicate tags and similar tags with lowercase/uppercase
      const tagsWithoutDuplicates = allTags.filter((tag,index,tags) => {
        return tags.indexOf(tag.toLowerCase()) === index;
      });
      return tagsWithoutDuplicates;
    }
  }
}
</script>
