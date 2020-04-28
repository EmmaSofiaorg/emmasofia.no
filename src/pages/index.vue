<style lang="scss" scoped>
.hero__wrapper {
  padding-bottom: $spacing--largest;
}

.hero__wrapper .col.--main {
  text-align: center;

  @media (min-width: $container) {
    text-align: left;
  }
}

main {
  min-height: 100vh;
}
</style>

<template lang="html">
  <main v-show="!loading">
    <section class="hero">
      <div class="hero__background --diagonal" />
      <div class="hero__wrapper">
        <div class="col --main">
          <div class="block --full --mb-large">
            <div class="hero__title">
              <h1>{{ page.title }}</h1>
            </div>

            <div class="hero__intro">
              <h3>{{ page.subtitle }}</h3>
            </div>

            <div class="block --full --mt-large">
              <router-link :to="{ name: 'member' }" class="button" tag="button">
                Støtt oss
              </router-link>
              <!--
              <router-link
                :to="{ name: 'testkits' }"
                class="button --white"
                tag="button"
              >
                Kjøp testkits
              </router-link>
            --></div>
          </div>
        </div>

        <div class="col --sidebar" v-if="this.events.length">
          <div class="block --full --pb-large --pt-large container --narrow">
            <h4>Neste arrangement</h4>
            <div class="block --full --mt">
              <Event :event="events[0]" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="block --mt-minus-largest --pt --pb-larger"
      style="z-index: 999"
    >
      <div class="container --wide">
        <div class="grid --center">
          <div class="grid__item --s-12 --m-12 --l-6">
            <div class="block --full">
              <embed-video
                height="60%"
                url="https://www.youtube.com/embed/zLabi2wjYKo"
              />
            </div>
          </div>
          <div class="grid__item --s-12 --m-1 --l-1"></div>
          <div class="grid__item --s-12 --m-8 --l-5">
            <div class="block --full --mt">
              <h2 class="text-primary">Vår visjon</h2>
              <p>
                EmmaSofia er en politisk og ideell organisasjon, som arbeider
                for å få Norge over til en ruspolitikk basert på forskning og
                respekt for menneskerettighetene.
              </p>
              <p>
                Vi jobber for et mer åpent og tolerant samfunn. I et fritt og
                åpent samfunn bør alle være fri til å følge sin egen
                samvittighet og til å bestemme over sin egen bevissthet, så
                lenge det ikke er til skade for andre.
              </p>
              <p>
                Kvalitetskontroll, aldersgrenser og korrekt merking er
                grunnleggende prinsipper for forbruksvarer som medisiner og mat.
                EmmaSofia arbeider for at disse prinsippene også skal gjelde for
                MDMA og psykedelika.
              </p>
              <router-link :to="{ name: 'about-us' }"
                >Les mer om arbeidet vårt</router-link
              >
              <br />
            </div>
            <div class="block --bg-light --pt --pb --mt">
              <donations />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="block --bg-light --pt-large --pb-large">
      <div class="container --wide">
        <div class="grid --middle --center">
          <div class="grid__item --s-12 --m-8 --l-5">
            <div class="block --full --mb-large">
              <h2 class="text-primary">Vis rusvett</h2>
              <p>
                Psykedelika og MDMA er i seg selv ikke spesielt farlig.
                Gjentatte ekspertvurderinger slår fast at psykedelika og MDMA er
                langt mindre risikofylt enn alkohol, både for den enkelte bruker
                og for folkehelsen.
              </p>
              <p>
                Psykedelika og MDMA fører ofte til dype personlige opplevelser.
                Bruk av psykedelika er for mange en del av en genuin spirituell
                praksis, på linje med meditasjon og yoga. Både psykedelika og
                MDMA har potensiale til å gi varige positive effekter ved
                kontrollert bruk, og har et potensial i behandling av syke.
              </p>
              <p>
                Under dagens forbudspolitikk er det et åpent og uregulert
                marked, der manglende kvalitetskontroll og aldersgrenser er en
                konsekvens. Derfor er det viktig at du tar nødvendige
                forholdsregler, blant annet ved å bruke testutstyr og leser deg
                opp på hvordan du kan legge til rette for sunn bruk.
              </p>
              <br />
            </div>
          </div>

          <div class="grid__item --s-12 --m-8 --l-6">
            <h3 class="block --mb-large --text-center">
              Rusveiledere på rusopplysningen.no
            </h3>
            <div class="grid">
              <div class="grid__item --s-4 --l-4">
                <a
                  class="block"
                  href="https://rusopplysningen.no/mdma"
                  target="_blank"
                >
                  <Blurb title="MDMA" :icon="icons.mdma" />
                </a>
              </div>
              <div class="grid__item --s-4 --l-4">
                <a
                  class="block"
                  href="https://rusopplysningen.no/lsd"
                  target="_blank"
                >
                  <Blurb title="LSD" :icon="icons.lsd" />
                </a>
              </div>
              <div class="grid__item --s-4 --l-4">
                <a
                  class="block"
                  href="https://rusopplysningen.no/psilocybin"
                  target="_blank"
                >
                  <Blurb title="Sopp" :icon="icons.mushroom" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="block --bg-light"
      style="text-align:center; padding-bottom:40px;"
    >
      <button class="button --white">
        <a
          href="https://www.facebook.com/groups/1568179886751957/"
          target="_blank"
          >Bli med i vårt Facebook forum</a
        >
      </button>
      <button class="button --white">
        <a href="https://medium.com/@emmasofia" target="_blank"
          >Følg oss på Medium</a
        >
      </button>
      <button class="button --white">
        <a
          href="https://www.youtube.com/channel/UCJvgq51GdSUJ68fBLPSxB6A"
          target="_blank"
          >Følg oss på Youtube</a
        >
      </button>
    </section>

    <!--
    <section class="block --pt-larger --pb-larger">
      <div class="container --wide">
        <div class="grid --space-between">
          <div class="grid__item --s-12 --m-6">
            <div class="block --mb">
              <img class="img" src="../assets/img/testkits.png" alt="" />
            </div>
          </div>
          <div class="grid__item --s-12 --m-5">
            <div class="block --full --mb-large">
              <h2 class="text-primary">Bruk testutstyr</h2>
              <p>
                Vi anbefaler bruk av testutstyr som et midlertidig
                folkehelsetiltak, frem til godkjente utsalgssteder og
                kvalitetskontroll er på plass.
              </p>
              <p>
                Når du bruker testutstyr har du større kontroll på hva du
                faktisk inntar.
              </p>
              <br />
              <router-link :to="{ name: 'testkits' }" class="button"
                >Kjøp testutstyr</router-link
              >
              <router-link :to="{ name: 'HowTo' }" class="button --white"
                >Hvordan bruke testutstyr</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <section class="block --bg-light --pt-larger --pb-larger">
      <div class="container --wide">
        <div class="grid --space-between">
          <div class="grid__item --s-12 --m-5">
            <div class="block --full --mb-large">
              <h2 class="text-primary">Forskning</h2>
              <p>
                I populasjonsstudien av psykedelika og mental helse fant
                forskerene ingen sammenfall mellom psykedelika og økt risikoen
                for problemer med mental helse.
              </p>
              <p>
                I studien fant de snarere at bruk av psykedelika i større grad
                var forbundet med færre tilfeller av psykiske helseproblemer.
              </p>
            </div>
            <div class="block --full --mt --mb-large">
              <router-link :to="{ name: 'publications' }" class="button"
                >Les flere forskningsartikler</router-link
              >
            </div>
          </div>
          <div class="grid__item --s-12 --m-6">
            <a
              href="http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0063972#s1"
              target="_blank"
              class="card-publication"
            >
              <div
                class="card-publication__image"
                style="background-image: url('https://images.unsplash.com/photo-1514657607234-c314420d6b3b?ixlib=rb-0.3.5&s=1a67000c327183de44a71ca8a03b6a56&auto=format&fit=crop&w=994&q=80')"
              ></div>
              <div class="card-publication__contents">
                <div class="card-publication__title">
                  <h2>Psychedelics and Mental Health: A Population Study</h2>
                </div>
                <div class="card-publication__link">
                  <a
                    href="http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0063972#s1"
                    target="_blank"
                  >
                    Les hele studien
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import db from "@/database";

import Event from "@/components/cards/event";
import Drug from "@/components/cards/drug";
import Publication from "@/components/cards/publication";
import Donations from "@/components/cards/donations";

import EmbedVideo from "@/components/embed/video";
import RadioTabs from "@/components/filters/radio-tabs";
import Blurb from "@/components/cards/blurb";

import LsdIcon from "@/assets/icons/lsd.svg";
import MdmaIcon from "@/assets/icons/mdma.svg";
import MushroomIcon from "@/assets/icons/mushroom.svg";

export default {
  components: {
    Event,
    Drug,
    Publication,
    EmbedVideo,
    RadioTabs,
    Donations,
    Blurb
  },
  store: ["loading"],
  created() {
    db.getEntryById("3QoebEAuKQAKaEus2I8Euq").then(response => {
      this.page = response;
    });
    db.getEntries("drug", 4, 0).then(response => (this.drugs = response));
    db.getUpcomingEvents(1, 0).then(response => (this.events = response));
    db.getEntries("publication", 1, 0).then(
      response => (this.publications = response)
    );
  },
  data() {
    return {
      icons: {
        lsd: LsdIcon,
        mdma: MdmaIcon,
        mushroom: MushroomIcon
      },
      events: [],
      publications: [],
      drugs: [],
      page: {}
    };
  }
};
</script>
