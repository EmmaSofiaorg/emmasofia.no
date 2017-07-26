<style lang="scss">

.overlay-menu {
  position: fixed;
  overflow-x: hidden;
  overflow-y: scroll;
  background: $color-primary;
  color: $color-white;
  padding: $spacing;
  text-align: center;
  animation-name: fade-in;
  animation-duration: 0.5s;
  transition: ease;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;

  &.--hidden {
    display: none;
  }

  &__top {
    text-align: right;
    width: 100%;
    height: 30px;
  }

  &__contents {
    margin-top: $spacing;

  }

  &__nav {
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &__nav-links {
    margin: 0;
    padding: 0;
  }

  &__nav-link {
    display: none;

    &.--slide {
      animation-name: slide-down;
      animation-duration: 0.05s;
      transition-timing-function: ease;
      display: block;
    }

    & a {
      color: $color-white;
    }
  }
}

</style>

<template lang="html">
  <div class="overlay-menu" :class="{ '--hidden': !show }">

    <div class="overlay-menu__top">
      <div @click="toggle">Lukk X</div>
    </div>
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
          <li class="overlay-menu__nav-link" @click="goTo('about')">
            <h2>Om oss</h2>
          </li>
          <li class="overlay-menu__nav-link" @click="goTo('about')">
            <button class="button --white --large">Gi donasjon</button>
          </li>
        </ul>
      </nav>
    </div>

  </div>

</template>

<script>
export default {
  props: ['show', 'toggle'],
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
      this.toggle();
      this.$router.push({ name: link});
    }
  }
}
</script>
