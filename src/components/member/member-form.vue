<template lang="html">

  <div class="membership__form">

    <div class="row">
      <div class="col-xs-12 col-sm-6">
        Fornavn
        <input
          v-validate="'required'"
          :class="{error: errors.has('name')}"
          type="text"
          name="name"
          class="input"
          v-model="person.firstName"
          required autofocus
        />
      </div>
      <div class="col-xs-12 col-sm-6">
        Etternavn
        <input
          v-validate="'required'"
          :class="{error: errors.has('last-name')}"
          type="text"
          name="last-name"
          class="input"
          v-model="person.lastName"
          required
        />
      </div>
    </div>

    Fødselsdato
    <input
      v-validate="'required'"
      :class="{error: errors.has('birthday')}"
      type="date"
      name="birthday"
      class="input"
      v-model="person.birthday"
      required
    />

    Epostadresse
    <input
      v-validate="'required|email'"
      :class="{error: errors.has('email')}"
      type="email"
      name="email"
      class="input"
      v-model="person.email"
      required
    />

    Telefonnummer
    <input
      v-validate="'required|numeric'"
      :class="{error: errors.has('phone')}"
      type="tel"
      name="phone"
      class="input"
      v-model="person.phone"
    />

    Addresse
    <input
      v-validate="'required'"
      :class="{error: errors.has('address')}"
      type="text"
      name="address"
      class="input"
      v-model="person.address"
    />

    <div class="row">
      <div class="col-xs-12 col-sm-8">
        Sted
        <input
          v-validate="'required'"
          :class="{error: errors.has('city')}"
          type="text"
          name="city"
          class="input"
          v-model="person.city"
        />
      </div>
      <div class="col-xs-12 col-sm-4">
        Postnummer
        <input
          v-validate="'required'"
          :class="{error: errors.has('zip')}"
          type="text"
          name="zip"
          class="input"
          v-model="person.postalCode"
        />
      </div>
    </div>

    Land
    <select v-model="person.country">
      <option v-for="country in countriesList" :value="country">{{country}}</option>
    </select>


    <label class="checkbox">
      Jeg er aktiv i et studentlag
      <input
        type="checkbox"
        name="active"
        v-model="person.activeInOrg"
        />
        <span class="checkbox__indicator" />
    </label>

    <label for="org" v-if="person.activeInOrg">
      Organisasjon
      <select v-model="person.organization">
        <option value="" disabled>Velg organisasjon</option>
        <option value="EmmaSofia Studentlag">Emmasofia - Studentforening</option>
        <option value="EmmaSofia Oslo">Emmasofia - Oslo studentlag</option>
        <option value="EmmaSofia Bergen">Emmasofia - Bergen studentlag</option>
        <option value="EmmaSofia Lillehammer">Emmasofia - Lillehammer studentlag</option>
      </select>
    </label>

    <PayPalButton :person="person" />

    <div class="block --full --mt">
      <button @click="handleSubmit" :disabled="loading" class="button --full --submit" >{{buttonText}}</button>
    </div>
  </div>

</template>

<script>

//  this component receives a token on mount
//  when the user has filled out the form successfully
import axios from 'axios'
import countries from '@/components/member/countries';
import PayPalButton from '@/components/member/paypal-button';

const serverURL = "https://emmasofia.herokuapp.com"

export default {
  components: { PayPalButton },
  data () {
    return {
      countriesList: countries,
      loading: false,

      person: {
        email: null,
        firstName: null,
        lastName: null,
        birthday: null,
        phone: null,
        address: null,
        city: null,
        postalCode: null,
        country: 'Norway',
        activeInOrg: false,
        organization: "",
        planID: 'standard'
      }
    }
  },
  watch: {
    "person.activeInOrg": function (newVal, oldVal) {
      if (!newVal) {
        this.person.organization = "";
      }
    }
  },
  computed: {
    buttonText () {
      return this.loading ? 'Vent litt…' : 'Bli medlem'
    },
  },
  methods: {
    handleSubmit () {
      this.$validator.validateAll().then(result => {
        if(result) {
          const member = this.person;
          this.addMember(member);
        } else {
          alert('Sørg for at alle feltene er fylt ut riktig.')
        }
      });
    },
    addMember(member) {

      this.loading = true;

      axios.post(`${serverURL}/member`, member)
        .then((res) => {
          console.log(res.data.message);
          const form = document.getElementById('paypalform');
          form.submit();
        })
        .catch((error) => {
          this.loading = false
          console.log(error)
        })
    }
  }
}

</script>

<style lang="scss">

.membership__form {
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    margin-bottom: 20px;
    width: 100%;
  }

  .button.--submit {
    margin-left: 0px;
  }
  .button.--submit:disabled {
    background: #eee;
    cursor: not-allowed;
  }
}

input {
  border: 1px solid #4d2482;
  border-radius: 5px;
  padding: 10px 24px;
}

input[type="checkbox"] {
  width: auto;
  margin-right: 10px;
}

input.error {
  border: 1px solid red;
}

select:not([multiple]) {
  -webkit-appearance: none;
  -moz-appearance: none;
  background-position: right 50%;
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZFNDEwNjlGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZFNDEwNkFGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NkU0MTA2N0Y3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NkU0MTA2OEY3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGsgwQAAAA5SURBVHjaYvz//z8DOYCJgUxAf42MQIzTk0D/M+KzkRGPoQSdykiKJrBGpOhgJFYTWNEIiEeAAAMAzNENEOH+do8AAAAASUVORK5CYII=);
  padding: .5em;
  padding-right: 1.5em;
  background-color: white;
  border: 1px solid #4d2482;
  width: 100%;
  margin-bottom: 20px;

}

.column {
  display: flex;
  flex-direction: column;
}

.braintree-show-card {
  margin-bottom: 25px;
}

.thank-you {
  text-align: center;
  width: 100%;
}
</style>
