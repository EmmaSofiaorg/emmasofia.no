<style lang="scss">
</style>

<template lang="html">

  <div class="footer">
    <div class="block --pt-large --pb-larger">

      <div class="container --narrow">

        <div class="block --mb-large h2 --text-center">
          <a href="https://www.facebook.com/emmasofiaorg"><i class="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com/emmasofiaorg"><i class="fab fa-twitter"></i></a>
        </div>

        <div class="block --full --text-center text-primary">
          <p>
            EmmaSofia er en politisk medlemsorganisasjon, som arbeider for å få Norge over til en
            kunnskapsbasert ruspolitikk. Emma betyr universell og Sofia betyr visdom.
            Sofia referer til de vises sten.
          </p>
          <p>
            For information in English see our <a class="link" href="https://emmasofia.org">international website</a>.
          </p>
        </div>

        <div class="block --full --text-center --mt-larger">
          <router-link :to="{name: 'member'}" class="button --white --large">Støtt oss</router-link>
        </div>

        <div class="block --text-center --mt-larger --full">
          <h3>Få siste nytt rett i innboksen din</h3>
          <div class="grid --center">
            <div class="grid__item --s-12 --m-8">
              <mailchimp-form />
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
import MailchimpForm from "@/components/forms/mailchimp";

export default {
  components: { MailchimpForm }
};
</script>
