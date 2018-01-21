<template lang="html">

  <div class="block --full">
    <fieldset class="fieldset">
      <legend class="fieldset__legend">Filtrer på tema</legend>
      <div class="block --full --mb --pb" v-for="tag in tags">
        <input type="checkbox" />{{tag}}
      </div>
    </fieldset>

  </div>

</template>

<script>
export default {
  props: {
    tags: Array
  },
}
</script>

<style lang="scss">

</style>
