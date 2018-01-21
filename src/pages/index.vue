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
              <div class="block --full --mt">
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

    <section class="block --mt-minus-largest --pt --pb-larger" style="z-index: 999">
      <div class="container">

        <div class="grid --space-between">
          <div class="grid__item --s-12 --m-6 --l-6">
            <div class="block --full">
                <embed-video height="60%" url="https://www.youtube.com/embed/2w_pC5mtRxs" />
            </div>
          </div>
          <div class="grid__item --s-12 --m-6 --l-5">
            <div class="block --full --mt-larger">
              <h2 class="text-primary">Vi trenger din støtte</h2>
              <p>EmmaSofia er en politisk organisasjon, som arbeider for å få Norge over til en ruspolitikk basert på forskning og respekt for menneskerettighetene.</p>
              <p>Vi jobber for et mer åpent og tolerant samfunn. I et fritt og åpent samfunn bør alle være fri til å følge sin egen samvittighet
                og til å bestemme over sin egen bevissthet, så lenge det ikke er til skade for andre.
              </p>
              <p>Kvalitetskontroll, aldersgrenser og korrekt merking er grunnleggende prinsipper for forbruksvarer som medisiner og mat.
                EmmaSofia arbeider for at disse prinsippene også skal gjelde for MDMA og psykedelika.
              </p>
              <br>
              <donations />
              <!--<router-link :to="{name: 'testkits'}" class="button">Bli medlem</router-link>
              <router-link :to="{name: 'HowTo'}" class="button --white">Donér</router-link>-->
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="block --bg-light --pt-large --pb-large">
      <div class="container">
        <div class="grid --space-between">
          <div class="grid__item --s-12 --m-5">
            <div class="block --full --mb-large">
              <h2 class="text-primary">Vis rusvett</h2>
              <p>
                Psykedelika og MDMA i seg selv er ikke spesielt farlige. I gjentatte ekspertvurderinger har forskere vurdert skadepotensialet i en rekke rusmidler.
                Der havner MDMA og psykedelika konsekvent nederst på listen, med lavest risiko.
              </p>
              <p>
                Men under dagens forbudspolitikk er det et åpent og uregulert marked. Manglende kvalitetskontroll og aldersgrenser er konsekvenser av forbudet.
                Derfor oppfordrer vi alle til å vise rusvett. Les deg opp på hvordan du kan redusere risiko i våre skadereduserende veiledere.
              </p>
              <br>
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

    <section class="block --pt-larger --pb-larger">
      <div class="container">

        <div class="grid --space-between">
          <div class="grid__item --s-12 --m-6">
            <div class="block --mb">
              <img class="img" src="../assets/img/testkits.png" alt="">
            </div>
          </div>
          <div class="grid__item --s-12 --m-5">
            <div class="block --full --mb-large">
              <h2 class="text-primary">Bruk testutstyr</h2>
              <p>Dersom du bruker MDMA eller psykedelika, bør du bruke testutstyr, slik at du faktisk vet hva du tar.</p>
              <p>Frem til godkjente utsalgssteder og kvalitetskontroll er på plass, anbefaler vi bruk av testutstyr som et midlertidig folkehelsetiltak.</p>
              <br>
              <router-link :to="{name: 'testkits'}" class="button">Kjøp testutstyr</router-link>
              <router-link :to="{name: 'HowTo'}" class="button --white">Hvordan bruke testutstyr</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="block --bg-gradient --pt-larger --pb-larger">
      <div class="container">

        <div class="grid --space-between">
          <div class="grid__item --s-12 --m-5">
            <div class="block --full --mb-large">
              <h2 class="text-primary">Forskning</h2>
              <p>I populasjonsstudien av psykedelika og mental helse fant forskerene ingen sammenfall mellom psykedelika og økt risikoen for problemer med mental helse.</p>
              <p>I studien fant de snarere at bruk av psykedelika i større grad var forbundet med færre tilfeller av psykiske helseproblemer.</p>
              <router-link :to="{name: 'testkits'}" class="button">Les hele forskningsartikkelen</router-link>
              <router-link :to="{name: 'HowTo'}" class="button --white">Flere forskningsartikler</router-link>
            </div>
          </div>
          <div class="grid__item --s-12 --m-6">

          </div>
        </div>
      </div>
    </section>


  </main>

</template>

<script>

import db from '@/database';

import Event from '@/components/cards/event';
import Drug from '@/components/cards/drug';
import Publication from '@/components/cards/publication';
import Donations from '@/components/cards/donations';

import Spinner from '@/components/global/spinner';
import EmbedVideo from '@/components/embed/video';
import RadioTabs from '@/components/filters/radio-tabs';


export default {
  components: { Event, Drug, Publication, EmbedVideo, RadioTabs, Donations },
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
