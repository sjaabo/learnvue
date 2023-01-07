<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="getSurveys"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isloading && errorMsg">{{errorMsg}}</p>
      <p v-else-if="!isLoading && (!results || results.length ===0 )">No data, start addings surveys.</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
      
    </base-card>
  </section>
</template>

<script>
// import axios from 'axios';
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  data() {
    return {
      results: [],
      isLoading: false,
      errorMsg: null
    };
  },
  components: {
    SurveyResult,
  },
  methods: {
    getSurveys() {
      this.isLoading = true;
      this.errorMsg = null;
      // axios.get('https://vue-http-demo-70b01-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json')
      // .then(function(response){
      //   this.results = response.data
      // } );
      fetch(
        'https://vue-http-demo-70b01-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json'
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const results = [];
          this.isLoading = false;
          for (const id in data) {
            
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
        })
        .catch((error) => {
          this.isLoading = false;
          this.errorMsg = 'Oops, something wrong, '+ error;
        });
    },
  },
  mounted() {
    this.getSurveys();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>