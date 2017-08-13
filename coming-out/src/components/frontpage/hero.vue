<template lang="html">

  <div class="hero">
    <div class="hero__background --diagonal"></div>
    <div class="hero__wrapper">
      <div class="block --full --pb-larger --mt --pt-large --mb-larger text-center">
        <div class="hero__title text-uppercase" style="font-size: 40px">
          <h1>
            <span class="slide-right">Tune in,</span>
            <span class="slide-right" style="opacity: 0; animation-delay: 0.5s;">turn on,</span>
            <span class="slide-right" style="opacity: 0; animation-delay: 1s;">come out.</span>
          </h1>
        </div>
      </div>
        <!-- <div class="hero__intro">
          <h2 style="font-weight: 500">Breaking the silence on the benefits of psychedelics</h2>
        </div> -->
      </div>
    </div>
  </div>

</template>

<script>

import EmbedVideo from '@/components/embed/video';

export default {
  components: {EmbedVideo},
}

</script>
