Vue.createApp({
    data(){
        return {
            newTask: '',
            tasks: [],
            displayed: true,
            displayInst: 'Hide list'
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.newTask);
            this.newTask = '';
        },
        toggleDisplay(){
            this.displayed = !this.displayed;
            if(!this.displayed)
                this.displayInst = 'Show list';
            else this.displayInst = 'Hide list'
        }
    }
}).mount('#assignment');