<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './global/body.scss';
@import './global/container.scss';
@import './global/sanitize.scss';
@import './global/typography.scss';
@import './global/variables.scss';
</style>
