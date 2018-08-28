<template>

  <header class="header">
    <div class="header__wrapper">
      <div class="header__logo">
        <router-link :to="{ name: 'front-page'}">
          <logo height="30"
                class="logo" />
        </router-link>
      </div>

      <nav class="header__nav --desktop">
        <ul class="header__nav-links">
          <li class="header__nav-link">
            <router-link :to="{name: 'publications'}">Forskning</router-link>
          </li>
          <li class="header__nav-link">
            <router-link :to="{name: 'testkits'}">Testkits</router-link>
          </li>
          <li class="header__nav-link">
            <router-link :to="{name: 'media'}">Media</router-link>
          </li>
          <li class="header__nav-link">
            <router-link :to="{name: 'about-us'}">Om oss</router-link>
          </li>
          <li class="header__nav-link">
            <a href="https://tryggtripp.no"
               target="_blank">
              Tryggtripp.no
              <i class="fas fa-external-link-alt"></i>
            </a>
          </li>
          <li class="header__nav-link">
            <router-link :to="{name: 'member'}"
                         class="button --small">Støtt EmmaSofia</router-link>
          </li>
        </ul>
      </nav>

      <nav class="header__nav --mobile">
        <input v-model="showMobileMenu"
               type="checkbox"
               class="header__hamburger-menu-checkbox"
               id="hamburger-menu">
        <label class="header__hamburger-menu"
               for="hamburger-menu">
          <div></div>
          <div></div>
          <div></div>
        </label>
        <mobile-menu :toggleOverlay="toggleOverlay.bind(this)" />
      </nav>

    </div>
  </header>

</template>

<script>
import MobileMenu from "@/components/global/mobile-menu";
import Logo from "@/assets/logo";

export default {
  components: { MobileMenu, Logo },
  mounted() {
    window.onscroll = () => {
      this.getScrollPosition();
    };
  },
  data() {
    return {
      showMobileMenu: false
    };
  },
  methods: {
    toggleOverlay() {
      this.showMobileMenu = !this.showMobileMenu;
      if (this.showMobileMenu) {
        document.body.classList.add("--no-scroll");
      } else {
        document.body.classList.remove("--no-scroll");
      }
    },
    getScrollPosition() {
      const header = document.getElementsByClassName("header")[0];
      const position = window.pageYOffset | document.body.scrollTop;
      if (position < 50) {
        header.classList.remove("--white");
      } else {
        header.classList.add("--white");
      }
    }
  }
};
</script>
