<template lang="html">
  <div class="overlay-menu">

    <div class="overlay-menu__contents">
      <nav class="overlay-menu__nav">
        <ul class="overlay-menu__nav-links">
          <li class="overlay-menu__nav-link" @click="goTo('member')">
            <h2>Støtt oss</h2>
          </li>
          <li class="overlay-menu__nav-link" @click="goTo('publications')">
            <h2>Forskning</h2>
          </li>
          <li class="overlay-menu__nav-link" @click="goTo('testkits')">
            <h2>Testkits</h2>
          </li>
          <li class="overlay-menu__nav-link" @click="goTo('media')">
            <h2>Media</h2>
          </li>
          <li class="overlay-menu__nav-link" @click="goTo('about-us')">
            <h2>Om oss</h2>
          </li>
          <li class="overlay-menu__nav-link">
            <h3 style="margin-top: 80px;">
              <a href="https://tryggtripp.no" target="_blank">
                Tryggtripp.no
                <i class="fas fa-external-link-alt"></i>
              </a>
            </h3>
          </li>
        </ul>
      </nav>
    </div>

  </div>

</template>

<script>
export default {
  props: {
    toggleOverlay: Function
  },
  methods: {
    goTo(link) {
      this.toggleOverlay();
      this.$router.push({ name: link });
    }
  }
};
</script>
