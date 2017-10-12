<style lang="scss">

.member-by-card {
  border: 1px solid $color-gray;
  padding: $spacing;
  box-shadow: 0px 3px 6px 0px rgba(#000000, 0.06);
  overflow: auto;
  text-align: center;

  &__subscription {
    margin-bottom: $spacing--large;
    padding: $spacing--small 0;
  }

  &__subscription-title {
    margin-bottom: $spacing;
  }
}

</style>

<template lang="html">

  <div class="member-by-card">
    <div class="row">
      <div class="col-xs-12 col-md-4">
        <div class="member-by-card__subscription">
          <div class="member-by-card__subscription-title">
            <h4>Student</h4>
          </div>
          <a href="https://www.joinit.org/join/Gn5DH9HAhHR6wFEXo"
             class="button --outline">
            <b>200kr</b> (i året)
          </a>
        </div>
      </div>
      <div class="col-xs-12 col-md-4">
        <div class="member-by-card__subscription">
          <div class="member-by-card__subscription-title">
            <h4>Voksen</h4>
          </div>
          <a href="https://www.joinit.org/join/Gn5DH9HAhHR6wFEXo"
             class="button --outline">
            <b>300kr</b> (i året)
          </a>
        </div>
      </div>
      <div class="col-xs-12 col-md-4">
        <div class="member-by-card__subscription">
          <div class="member-by-card__subscription-title">
            <h4>Ildsjel</h4>
          </div>
          <a href="https://www.joinit.org/join/Gn5DH9HAhHR6wFEXo"
             class="button --outline">
            <b>500kr</b> (i året)
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
}
</script>
