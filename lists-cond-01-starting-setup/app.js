const app = Vue.createApp({
  data() {
    return { 
      newGoal: '',
      goals: []
    };
  },
  methods: {
    addGoal(){
      this.goals.push(this.newGoal);
      this.newGoal = '';
    },
    removeGoal(index){
      this.goals.splice(index,1);
    },
  }
});

app.mount('#user-goals');
