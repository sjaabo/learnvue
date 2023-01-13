<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
  data() {
    return {
      products: [
        {
          id: 1,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          title: 'Book Collection',
          description:
            'A collection of must-read books. All-time classics included!',
          price: 99.99,
        },
        {
          id: 2,
          image:
            'https://cdn.shopify.com/s/files/1/0253/1626/1993/files/4season-tents-zhota.jpg?v=1655809067',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99,
        },
        {
          id: 3,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99,
        },
      ],
    };
  },
  provide() {
    return {
      //isLoggedIn: this.isLoggedIn,
      products: this.products,
      //cart: this.cart,
      //addProductToCart: this.addProductToCart,
      ///removeProductFromCart: this.removeProductFromCart,
      //login: this.login,
      //logout: this.logout,
    };
  },
  // methods: {
  //   login() {
  //     this.isLoggedIn = true;
  //   },
  //   logout() {
  //     this.isLoggedIn = false;
  //   },
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>