import Client from 'shopify-buy';
import 'whatwg-fetch';

var shopClient = Client.buildClient({
  storefrontAccessToken: '970d48fc66da9fadba4c7eac07fb8845',
  domain: 'emmasofia.myshopify.com',
});

export default {
  client: shopClient,
  getProductsByField: async function({query}) {
    return shopClient.product.fetchQuery({query})
    .then(function (products) {
      return products;
    })
    .catch(function () {
      console.log('Request failed');
    })
  },
  getProductById: async function (id) {
    return shopClient.fetchProduct(id)
      .then(function (product) {
        return product;
      })
      .catch(function () {
        console.log('Request failed');
      });
  },
  getProductsByCollection: async function (id) {
    return shopClient.collection.fetchWithProducts(id)
      .then(function (product) {
        return product;
      })
      .catch(function () {
        console.log('Request failed');
      });
  },
  getAllProducts: async function () {
    return shopClient.product.fetchAll()
      .then(products => {
        return products;
      });
  },
  initCart: async function () {
    return shopClient.checkout.create()
      .then(newCart => {
        return newCart;
      });
  },
}
