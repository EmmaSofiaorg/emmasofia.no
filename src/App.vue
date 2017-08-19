<template>
  <div id="app">
    <spinner v-if="loading" />
    <main-header />
    <keep-alive exclude="drug,publication">
      <transition name="fade">
        <router-view></router-view>
      </transition>
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

@import '../node_modules/es-styleguide/dist/assets/toolkit/styles/toolkit.css';

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
