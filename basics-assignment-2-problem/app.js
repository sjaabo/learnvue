Vue.createApp({
    data(){
        return {
            inputKeyDown: '',
            input2: ''
        }
    },
    methods: {
        showAlert(){
            alert('Here I am, this is me...');
        },
        showInput(event){
            this.inputKeyDown = event.target.value;
        },
        showInput2(event){
            this.input2 = event.target.value;
        }
    }
}).mount('#assignment');