<style lang="css">

.embed-container {
  position: relative;
  padding-bottom: 45%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  border-radius: 6px;
  box-shadow: rgba(34, 23, 99, 0.2) 0 7px 42px;
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>

<template lang="html">

  <div class='embed-container' :style="`padding-bottom: ${height}`">
    <iframe :src="url" frameborder='0' allowfullscreen></iframe>
  </div>

</template>

<script>
export default {
  props: {
    url: String,
    height: {
      type: String,
      default: '45%'
    }
  }
}
</script>
