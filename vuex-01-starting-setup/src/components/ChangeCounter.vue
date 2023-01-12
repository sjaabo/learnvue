<template>
    <button @click="addStep(1)">Add One</button>
</template>
<script>
export default {
    methods: {
        addStep(step){
            //this.$store.state.counter += step;
            this.$store.commit('addSteps',step)
        }
    }
}
</script>