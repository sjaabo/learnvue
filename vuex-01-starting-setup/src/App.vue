<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="addStep(1)">Add 1</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter
  },
  methods: {
    addStep(step) {
      //this.$store.state.counter += step + 11;
      this.$store.commit('addSteps',step)
    },
  },
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