<template lang="html">
  <div class="overlay-menu">

    <div class="overlay-menu__contents">
      <nav class="overlay-menu__nav">
        <ul class="overlay-menu__nav-links">
          <li class="overlay-menu__nav-link" @click="goTo('front-page')">
            <h2>Forside</h2>
          </li>
          <li class="overlay-menu__nav-link" @click="goTo('events')">
            <h2>Arrangementer</h2>
          </li>
          <li class="overlay-menu__nav-link" @click="goTo('publications')">
            <h2>Forskning</h2>
          </li>
          <li class="overlay-menu__nav-link" @click="goTo('drugs')">
            <h2>Veiledere</h2>
          </li>
          <li class="overlay-menu__nav-link" @click="goTo('testkits')">
            <h2>Testkits</h2>
          </li>
          <li class="overlay-menu__nav-link" @click="goTo('media')">
            <h2>I media</h2>
          </li>
          <li class="overlay-menu__nav-link" @click="goTo('about-us')">
            <h2>Om oss</h2>
          </li>
          <li class="overlay-menu__nav-link" @click="goTo('member')">
            <button class="button --white --large">Bli medlem</button>
          </li>
        </ul>
      </nav>
    </div>

  </div>

</template>

<script>
export default {
  mounted() {
    const navItems = document.querySelectorAll('.overlay-menu__nav-link');
    navItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('--slide');
      }, (index+1) * 100);
    });
  },
  methods: {
    goTo(link) {
      document.getElementById('hamburger-menu').checked = false;
      this.$router.push({ name: link});
    }
  }
}
</script>
