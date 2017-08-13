<style>

.lnr {
  display: block;
  margin: 0 auto;
  width: 1.7em;
  height: 1.7em;
  margin-bottom: 20px;
  fill: #4d2482;
  vertical-align: -0.05em;
}

</style>

<template>
  <div id="app">
    <main-header />
    <router-view></router-view>
  </div>
</template>

<script>

import MainHeader from '@/components/navigation/header';

export default {
  components: { MainHeader },
  name: 'app'
}
</script>
