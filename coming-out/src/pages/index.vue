<template lang="html">

  <main>

    <hero />

    <section class="block --mb --mt-minus-largest">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-4" style="display: flex">
            <div class="block --link --pb --pt --mb --bg-white --border-radius --box-shadow">
              <svg class="lnr lnr-film-play"><use xlink:href="#lnr-film-play"></use></svg>
              <h3 class="text-center text-primary">Browse stories</h3>
              <p>
                See and hear people's stories about positive psychedelic episodes blabla.
              </p>
            </div>
          </div>

          <div class="col-xs-12 col-md-4" style="display: flex">
            <div class="block --link --pb --pt --mb --bg-white --border-radius --box-shadow">
              <svg class="lnr lnr-question-circle"><use xlink:href="#lnr-question-circle"></use></svg>
              <h3 class="text-center text-primary">Why come out?</h3>
              <p>
                Many people don’t dare to stand up and speak about the benefits of psychedelics.
              </p>
            </div>
          </div>

          <div class="col-xs-12 col-md-4" style="display: flex">
            <div class="block --link --pb --pt --mb --bg-white --border-radius --box-shadow">
              <svg class="lnr lnr-bubble"><use xlink:href="#lnr-bubble"></use></svg>
              <h3 class="text-center text-primary">Share your story</h3>
              <p>
                Share you story together with others here.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="block --bg-light --pt-larger --pb-large --mt-largest">
      <div class="container --narrow">
        <h1>Breaking the silence</h1>
        <p class="ingress">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>

    <section class="block --full --pb --mt-larger">
      <div class="container --narrow">
        <h1>Nina Solstice</h1>
        <p>Yogainstruktør og billedkunstner</p>
      </div>
      <div class="container">
        <div class="block --full --pt --pb">
          <embed-video :url="'https://www.youtube.com/embed/GBx-HMPoado'" />
        </div>
      </div>
      <div class="container --narrow">
        <p class="ingress">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>

  </main>

</template>

<script>

import EmbedVideo from '@/components/embed/video';
import Logo from '@/assets/logo';
import Hero from '@/components/frontpage/hero';

export default {
  components: { EmbedVideo, Logo, Hero },
}
</script>

<style lang="css">
</style>
