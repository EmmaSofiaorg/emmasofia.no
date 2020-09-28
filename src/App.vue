<template>
  <div id="app">
    <spinner v-if="loading" />
    <main-header />
    <transition name="fade">
      <keep-alive exclude="testkit">
        <router-view></router-view>
      </keep-alive>
    </transition>
    <main-footer />
  </div>
</template>

<script>
require("emmasofia/main.css");

import MainHeader from "@/components/global/header";
import MainFooter from "@/components/global/footer";
import Spinner from "@/components/global/spinner";

export default {
  components: { MainHeader, MainFooter, Spinner },
  store: ["loading"],
  name: "app"
};
</script>

<style lang="scss">
main {
  min-height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fieldset {
  background: #fafafa;
  border: 2px solid #eee;
}

.fieldset__legend {
  color: $color-primary;
  text-transform: uppercase;
  font-weight: 600;
}
</style>
