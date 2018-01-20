<template>
  <div id="app">
    <spinner v-if="loading" />
    <main-header />
    <keep-alive exclude="drug,publication">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </keep-alive>
    <main-footer />
  </div>
</template>

<script>
import MainHeader from '@/components/global/header';
import MainFooter from '@/components/global/footer';
import Spinner from '@/components/global/spinner';

export default {
  components: { MainHeader, MainFooter, Spinner },
  store: ['loading'],
  name: 'app',
};
</script>

<style lang="scss">

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
