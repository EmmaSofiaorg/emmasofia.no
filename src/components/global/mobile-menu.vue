<template lang="html">
  <div class="overlay-menu">

    <div class="overlay-menu__contents">
      <nav class="overlay-menu__nav">
        <ul class="overlay-menu__nav-links">
          <li class="overlay-menu__nav-link" @click="goTo('member')">
            <div class="block --full --mb">
              <button class="button --white --large">Støtt oss</button>
            </div>
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
