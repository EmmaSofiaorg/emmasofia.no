<style lang="scss">

.footer {
  background: white;
  border-top: 1px solid $color-gray;
  min-height: 400px;
  clear: left;
  margin-top: 200px;
  padding-top: $spacing--larger;
  padding-bottom: $spacing--larger;
  left: 0;
  bottom: 0;
  width: 100%;
}

.input {
  border-radius: $border-radius;
  outline: 0;
  border: 1px solid $color-primary;
  font-family: $font-secondary;
  padding: $spacing--smaller;
  display: inline-block;
}

</style>

<template lang="html">

  <div class="footer">
    <div class="block">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-4">
          <div class="block --full --mb-larger">
            <h4>Kontaktinformasjon</h4>

          </div>
        </div>
        <div class="col-xs-12 col-md-4">
          <div class="block --full --mb-larger">
            <h4>Om Emmasofia</h4>

          </div>
        </div>
        <div class="col-xs-12 col-md-4">
          <div class="block --full --mb-larger">
            <h4>Hold deg oppdatert</h4>
            <input class="input" type="email" placeholder="Din epostadresse" />
            <button class="button">Abonnér</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>

</template>
