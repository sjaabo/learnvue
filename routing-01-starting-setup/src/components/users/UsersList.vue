<template>
<button @click="navProgramatically">Navigate by Code</button>
<button @click="vavBack">Navigate Back</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    navProgramatically() {
      this.$router.push('/teams');
    },
    vavBack() {
      this.$router.back();
    }
  },
  beforeRouteEnter(to, from, next){
    console.log('beforeEnter on Component level');
    next();
  },
  beforeRouteLeave(){} //to check unsaved detail
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>