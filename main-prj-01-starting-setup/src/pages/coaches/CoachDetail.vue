<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>{{ rate}}</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
  <!-- <router-view></router-view>
   <router-link to="/coaches/c1/contact">Contact</router-link> -->
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    areas() {
      return this.selectedCoach.areas;
    },
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
    rate() {
      return '$' + this.selectedCoach.hourlyRate + '/hour';
    },
    description() {
      return this.selectedCoach.description;
    }
  },
  created() {
    this.selectedCoach = this.$store.getters['coach/coaches'].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>

<style scoped>
</style>