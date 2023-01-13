<template>
  <button v-if="!this.$store.getters.userIsAuthenticated" @click="login">Login</button>
  <button v-if="this.$store.getters.userIsAuthenticated" @click="logout">Logout</button>
</template>

<script>
import {  mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions(['login','logout'])
    }
}
</script>

