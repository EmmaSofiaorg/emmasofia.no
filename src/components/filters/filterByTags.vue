<template lang="html">

  <div class="block --full">
    <fieldset>
      <legend>Filtrer på tema</legend>
      <div class="block --full" v-for="tag in tags">
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

<style lang="css">
</style>
