<style lang="scss">

@import '../../global/variables.scss';

.header {
  width: 100%;
  background: $color-white;
  // border-bottom: 1px solid $color-gray;

  &__wrapper {
    display: flex;
    height: 60px;
    max-width: $container--wide;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding: $spacing;
  }

  &__logo {

  }

  &__nav {

  }

  &__nav-links {
    list-style-type: none;
    display: flex;
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
    <div class="header__overlay" />
    <div class="header__wrapper">
      <div class="header__logo">
        <router-link :to="{ name: 'front-page'}">Logo</router-link>
      </div>
      <nav class="header__nav">
        <ul class="header__nav-links">
          <li class="header__nav-link">
            News
          </li>
          <li class="header__nav-link">
            Events
          </li>
          <li class="header__nav-link">
            <router-link :to="{name: 'publications'}">Publications</router-link>
          </li>
          <li class="header__nav-link">
            Universities
          </li>
          <li class="header__nav-link">
            <router-link :to="{name: 'topics'}">Topics</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>

</template>

<script>

</script>
