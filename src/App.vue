<template>
  <div id="app">
    <spinner v-if="loading" />
    <main-header />
    <keep-alive exclude="drug,publication">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MainHeader from '@/components/global/header';
import Spinner from '@/components/global/spinner';

export default {
  components: { MainHeader, Spinner },
  store: ['loading'],
  name: 'app',
};
</script>

<style lang="scss">
@import './styles/body.scss';
@import './styles/layout.scss';
@import './styles/blocks.scss';
@import './styles/sanitize.scss';
@import './styles/typography.scss';
@import './styles/animation.scss';
@import './styles/cards.scss';
@import './styles/buttons.scss';
@import './styles/hero.scss';
@import './styles/flexbox-grid.scss';

main {
  //animation-name: fade-in;
  // animation-duration: 0.5s;
}
</style>
