<template>
  <section class="container">
    <h3 v-if="goal.visible">{{ goal.goal }}</h3>
    <button @click="toggle">{{ goal.visible ? 'Hide': 'Show'}} Goal</button>
  </section>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const goal = reactive({ goal: 'Create Projects using Vue', visible: true });

    function toggle() {
      goal.visible = !goal.visible;
    }

    return {
      goal: goal,
      toggle: toggle,
    };
  }
}
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>