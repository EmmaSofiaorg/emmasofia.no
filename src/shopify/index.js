import ShopifyBuy from 'shopify-buy';

var shopClient = ShopifyBuy.buildClient({
  accessToken: '970d48fc66da9fadba4c7eac07fb8845',
  domain: 'emmasofia.myshopify.com',
  appId: '6'
});

export default {
  getProductById: function () {
    shopClient.fetchProduct('9970502474')
      .then(function (product) {
        console.log(product);
      })
      .catch(function () {
        console.log('Request failed');
      });
  },
  getAllProducts: function () {
    return shopClient.fetchQueryProducts({collection_id: 441409492})
      .then(products => {
        return products;
      });
  },
  initCart: function () {
    return shopClient.createCart()
      .then(newCart => {
        return newCart;
      });
  },
}
