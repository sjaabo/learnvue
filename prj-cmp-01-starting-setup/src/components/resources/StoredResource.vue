<template>
  <ul>
    <resource-info
      v-for="rsrc in resources"
      :key="rsrc.id"
      :id="rsrc.id"
      :title="rsrc.title"
      :description="rsrc.description"
      :link="rsrc.link"
    >
    </resource-info>
  </ul>
</template>

<script>
import ResourceInfo from './ResourceInfo.vue';

export default {
    components: {
        ResourceInfo
    },
    inject:['resources']
}
</script>


<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>