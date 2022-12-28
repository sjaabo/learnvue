const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName : ''
    };
  },
  methods : {
    add(num){
      this.counter = this.counter + num;
    },
    sub(num){
      if(this.counter > 0)
      this.counter = this.counter - num;
    },
    setName(event, last){
      this.name = event.target.value + ' ' + last;
    },
    submitForm(event){
      alert('Submitted');
    },
    confirmInput(){
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
