<template>
  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" class="paypal-checkout">
    <input type="hidden" name="cmd" value="_s-xclick">
    <input type="hidden" name="hosted_button_id" value="KE36DSTUWT47E">
    <table>
    <tr><td><input type="hidden" name="on0" value="Membership">Membership</td></tr><tr><td><select name="os0">
      <option value="Reduced">Reduced : 150,00 NOK - yearly</option>
      <option value="Standard">Standard : 300,00 NOK - yearly</option>
      <option value="Premium">Premium : 500,00 NOK - yearly</option>
    </select> </td></tr>
    </table>
    <input type="hidden" name="currency_code" value="NOK">
    <input type="image" src="https://www.paypalobjects.com/en_US/NO/i/btn/btn_subscribeCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>
</template>

<script>

export default {
  name: 'paypal-checkout'
}

</script>
<style lang="scss">
.paypal-checkout {


}
</style>