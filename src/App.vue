<template>
  <div id="app">
    <main-header />
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from '@/components/global/header';

export default {
  components: { MainHeader },
  name: 'app'
}
</script>

<style lang="scss">
@import './global/body.scss';
@import './global/container.scss';
@import './global/blocks.scss';
@import './global/sanitize.scss';
@import './global/typography.scss';
@import './global/variables.scss';
</style>
