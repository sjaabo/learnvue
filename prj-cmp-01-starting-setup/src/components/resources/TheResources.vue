<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resource')"
      :mode="storeResButtonMode"
      >Stored Resource</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResource from './StoredResource.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResource,
    AddResource,
  },
  computed: {
    storeResButtonMode() {
      return this.selectedTab === 'stored-resource' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
    };
  },
  data() {
    return {
      selectedTab: 'stored-resource',
      storedResources: [
        {
          id: 1,
          title: 'Official Guide',
          description: 'the offical vue js docs',
          link: 'https://vuejs.org',
        },
        {
          id: 2,
          title: 'Google',
          description: 'the search for the truth',
          link: 'https://google.com',
        },
      ],
    };
  },
  methods: {
    addResource(title, desc, link) {
      const newRes = {
        id: this.storedResources.length + 1,
        title: title,
        description: desc,
        link: link,
      };
      this.storedResources.unshift(newRes);
      this.selectedTab = 'stored-resource';
    },
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>