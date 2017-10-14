<style lang="scss">
</style>

<template lang="html">

  <main v-show="!loading">

      <div class="hero">
        <div class="hero__background" />
          <div class="hero__wrapper">
            <div class="col --half">
              <div class="hero__title">
                <h1>{{page.title}}</h1>
              </div>
              <div class="hero__intro">
                <h3>{{page.subtitle}}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="block --mb-larger --mt-larger">
        <div class="container --narrow">
          <div class="row">

              <form class="membership__form" v-on:submit.prevent="handleSubmit" @keyup.enter="handleSubmit" v-if="!paymentCompleted">
                Email (required) <input type="email" name="email" class="input" v-model="person.email" required autofocus />
                Birthday (required) <input type="date" name="birthday" class="input" v-model="person.birthday" />
                First Name <input type="text" name="name" class="input" v-model="person.firstName" />
                Last Name <input type="text" name="last-name" class="input" v-model="person.lastName" />

                <!-- maybe not a good idea to hide this? -->
                <div v-if="mostImportantFields" class="column">
                  Phone number <input type="tel" name="phone" class="input" v-model="person.phone" />
                  Address <input type="text" name="address" class="input" v-model="person.address" />
                  City <input type="text" name="city" class="input" v-model="person.city" />
                  Postal code <input type="text" name="zip" class="input" v-model="person.postalCode" />
                  Country <input type="text" name="country" class="input" v-model="person.country" />
                  Organization <input type="text" name="org" class="input" v-model="person.organization" />
                  Comment <input type="text" name="notes" class="input" v-model="person.comment" />
                </div>

                Membership type
                <select v-model="person.planID">
                  <option value="standard">Standard - 300 KR (yearly)</option>
                  <option value="reduced">Reduced - 150 KR (yearly)</option>
                  <option value="premium">Premium - 300 KR (yearly)</option>
                </select>

                <!-- might not work with 'input'. might have to be a container -->
                <div ref="paymentWindow"></div>
                <input type="submit" :value="buttonText" class="button --submit" ref="submitButton" />
              </form>

              <h1 class="thank-you" v-if="paymentCompleted">Tusen takk{{person.firstName && ` ${person.firstName}`}} :)</h1>
          </div>
        </div>
      </section>

      <div class="container block" v-if="!paymentCompleted">
        <div class="row">

        <div class="col-xs-12 col-md-6">
          <div class="block --full --mt">
            <h3>Via SMS (300kr)</h3>
            <by-SMS />
          </div>
        </div>

        <div class="col-xs-12 col-md-6">
          <div class="block --full --mt">
            <h3>Med kort</h3>
            <by-card />
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<script>

//  this component receives a token on mount
//  when the user has filled out the form successfully
import axios from 'axios'

import db from '@/database';

import bySMS from '@/components/member/sms';
import byCard from '@/components/member/card';
import paypalCheckout from '@/components/member/paypal-checkout'
import membershipDetails from '@/components/member/membership-details'

const serverURL = "https://emmasofia-test.herokuapp.com"

export default {

  store: ['loading'],
  components: { bySMS, byCard, paypalCheckout, membershipDetails },

  data () {
    return {
      page: {},
      token: null,
      braintree: null,
      paymentCompleted: false,

      person: {
        email: null,
        firstName: null,
        lastName: null,
        birthday: null,
        phone: null,
        address: null,
        city: null,
        postalCode: null,
        country: null,
        organization: null,
        comment: null
      }
    }
  },

  computed: {
    mostImportantFields () {
      return this.person.email && this.person.firstName && this.person.lastName && this.person.birthday
    },

    buttonText () {
      return this.loading ? 'Vent litt…' : 'Bli medlem'
    }
  },

  mounted () {
    this.initializePayment()
    
    db.getEntryById('57DlUIQlM4IKwWUKk4SUe6')
      .then((response) => {
        this.loading = false;
        this.page = response
      });
  },

  methods: {

    handleSubmit () {
      if (!this.userIsValid()) return
      this.loading = true
      const _this = this

      this.braintree.requestPaymentMethod(function (err, payload) {

       if (err) {
          this.loading = false         
          console.error('got an error:', err)
          return
        }

        _this.pay(payload.nonce)
      })
    },

    // TODO: proper validation
    userIsValid () {
      const { firstName, lastName } = this.person
      if (!firstName || !lastName) return false
      return firstName.length > 2 && lastName.length > 2
    },

    initializePayment () {
      const paymentWindow = this.$refs.paymentWindow
      const button = this.$refs.submitButton

      const _this = this

      braintree.dropin.create({
        authorization: "sandbox_bhh5dp4m_h9bqrvmm6wh4dkdm",
        container: paymentWindow
      }, function (createErr, instance) {
        _this.braintree = instance
      })
    },

    pay (nonce) {
      const person = Object.assign({}, this.person)
      const data = { person, nonce }

      console.log('will attempt to post data:', data)
      axios.post(`${serverURL}/checkout`, data)
        .then((res) => {
          this.loading = false
          console.log('payment was maybe completed with this response:', res)
          this.$set(this, 'paymentCompleted', true)
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
  }

  .button.--submit {
    margin-left: 0px;
  }
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