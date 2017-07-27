<style lang="scss">

.header {
  width: 100%;
  position: fixed;
  font-size: 18px;
  z-index: 999;
  top: 0;
  font-family: $font-secondary;
  transition: background 0.8s ease;
  color: $color-primary;
  // border-bottom: 1px solid $color-gray;

  &.--white {
    background: $color-white;
    transition: background 0.8s ease;
  }

  &__wrapper {
    display: flex;
    height: $header-height;
    max-width: $container--wide;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding: $spacing;
  }

  &__logo {
    transform: scale(1);
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.04);
      transition: transform 0.2s ease;
    }
  }

  &__nav {

    &.--desktop {
      display: none;
    }

    &.--mobile {
      display: block;
    }

    @media (min-width: $desktop) {
      &.--desktop {
        display: block;
      }

      &.--mobile {
        display: none;
      }
    }

  }

  &__nav-links {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  &__nav-link {
    padding-left: $spacing;
  }
}

</style>

<template>

  <header class="header">
    <div class="header__wrapper">
      <div class="header__logo">
        <router-link :to="{ name: 'front-page'}">
          <logo height="30" class="logo" />
        </router-link>
      </div>

      <nav class="header__nav --desktop">
        <ul class="header__nav-links">
          <li class="header__nav-link">
            <router-link :to="{name: 'events'}">Arrangementer</router-link>
          </li>
          <li class="header__nav-link">
            <router-link :to="{name: 'publications'}">Forskning</router-link>
          </li>
          <li class="header__nav-link">
            <router-link :to="{name: 'drugs'}">Veiledere</router-link>
          </li>
          <li class="header__nav-link">
            <router-link :to="{name: 'testkits'}">Testkits</router-link>
          </li>
          <li class="header__nav-link">
            <router-link :to="{name: 'about-us'}">Om oss</router-link>
          </li>
          <li class="header__nav-link">
            <router-link :to="{name: 'member'}" tag="button" class="button --small">Bli medlem</router-link>
          </li>
        </ul>
      </nav>

      <nav class="header__nav --mobile">
        <div @click="toggleOverlay">Meny ☰</div>
        <overlay-menu :show="showOverlayMenu" :toggle="toggleOverlay.bind(this)" v-if="showOverlayMenu" />
      </nav>

    </div>
  </header>

</template>

<script>

import OverlayMenu from '@/components/global/overlay-menu';
import Logo from '@/components/global/logo';

export default {
  components: { OverlayMenu, Logo },
  mounted() {
    window.onscroll = () => { this.getScrollPosition() };
  },
  data () {
    return {
      showOverlayMenu: false,
    }
  },
  methods: {
    toggleOverlay() {
      this.showOverlayMenu = !this.showOverlayMenu;
      if(this.showOverlayMenu) {
        document.body.classList.add('--no-scroll');
      } else {
        document.body.classList.remove('--no-scroll');
      }
    },
    getScrollPosition() {
      const header = document.getElementsByClassName('header')[0];
      const position = window.pageYOffset | document.body.scrollTop;
      if(position < 50) {
        header.classList.remove('--white');
      } else {
        header.classList.add('--white');
      }
    }
  }
};

</script>
