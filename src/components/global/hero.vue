<style lang="scss">


</style>

<template>

  <div class="hero">
    <div class="hero__background" />
      <div class="hero__wrapper">
        <div class="col --main">
          <div class="hero__title">
            <h1>{{title}}</h1>
          </div>
          <div class="hero__intro">
            <h3>{{intro}}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  props: ['title', 'intro'],
}

</script>
