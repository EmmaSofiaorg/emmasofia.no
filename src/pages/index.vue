<style lang="css">
</style>

<template lang="html">

  <main v-show="!loading">


    <section class="hero">
      <div class="hero__background --diagonal" />
      <div class="hero__wrapper">

          <div class="col --main">
            <div class="block --full --mb-larger --pb-larger">
              <div class="hero__title">
                <h1>{{page.title}}</h1>
              </div>
              <div class="hero__intro">
                <h3>{{page.subtitle}}</h3>
              </div>
              <div class="block --full --mt-large">
                <router-link
                  :to="{name: 'member'}"
                  class="button"
                  tag="button">
                  Bli medlem
                </router-link>
                <router-link
                  :to="{name: 'testkits'}"
                  class="button --white"
                  tag="button">
                  Kjøp testkits
                </router-link>
              </div>
            </div>
          </div>

        <div class="col --sidebar">
            <div class="block --full --mt" v-if="events[0]">
              <h3>Kommende arrangement:</h3>
              <event :event="events[0]" />
            </div>
          </div>

      </div>
    </section>

    <section class="block --mb-largest --mt-large">
      <div class="container">

        <h2 class="text-primary">Vis rusvett</h2>

        <div class="grid --space-between">
          <div class="grid__item --s-12 --m-5">
            <div class="block --full --mb-large">
              <p>
                Psykedelika og MDMA i seg selv er ikke spesielt farlige. I gjentatte ekspertvurderinger har forskere vurdert skadepotensialet i en rekke rusmidler.
                Der havner MDMA og psykedelika konsekvent nederst på listen, med lavest risiko.
              </p>
              <p>
                Men under dagens forbudspolitikk er det et åpent og uregulert marked. Manglende kvalitetskontroll og aldersgrenser er konsekvenser av forbudet.
                Derfor oppfordrer vi alle til å vise rusvett. Les deg opp på hvordan du kan redusere risiko i våre skadereduserende veiledere.
              </p>
              <br/>
              <a class="button">Besøk tryggtripp.no</a>
            </div>
          </div>
          <div class="grid__item --s-12 --m-6">
            <div class="grid">
              <div class="grid__item --s-12 --m-5 --l-4" v-for="drug in drugs">
                <div class="block --full --mb">
                  <drug :drug="drug" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="block --bg-light --mt-large --pt-larger --pb-larger">
      <div class="container">

        <div class="grid --space-between">
          <div class="grid__item --s-12 --m-6">
            <div class="img">
              <img src="../assets/img/testkits.png" alt="">
            </div>
          </div>
          <div class="grid__item --s-12 --m-5">
            <div class="block --full --mb-large">
              <h2 class="text-primary">Bruk testutstyr</h2>
              <p>Dersom du bruker MDMA eller psykedelika, bør du bruke testutstyr, slik at du faktisk vet hva du tar.</p>
              <p>Frem til godkjente utsalgssteder og kvalitetskontroll er på plass, anbefaler vi bruk av testutstyr som et midlertidig folkehelsetiltak.</p>
              <br/>
              <router-link :to="{name: 'testkits'}" class="button">Kjøp testutstyr</router-link>
              <router-link :to="{name: 'HowTo'}" class="button --white">Hvordan bruke testutstyr</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>


  </main>

</template>

<script>

import db from '@/database';

import Spinner from '@/components/global/spinner';

import Event from '@/components/cards/event';
import Drug from '@/components/cards/drug';
import Publication from '@/components/cards/publication';

export default {
  components: { Event, Drug, Publication },
  store: ['loading'],
  mounted() {
    this.loading = true;
    db.getEntries('drug', 4, 0)
      .then(response => this.drugs = response);
    db.getUpcomingEvents(1, 0)
      .then(response => this.events = response);
    db.getEntries('publication', 1, 0)
      .then(response => this.publications = response);
    db.getEntryById('3QoebEAuKQAKaEus2I8Euq')
      .then((response) => {
        this.loading = false;
        this.page = response
      });
  },
  data() {
    return {
      events: [],
      publications: [],
      drugs: [],
      page: {}
    }
  },
}
</script>
