Vue.createApp({
    data(){
        return {
            usedClass: '',
            shown: 'visible',
            desiredColor: ''
        }
    },
    methods: {
        update(event){
            this.usedClass = event.target.value;
        },
        toggle(){
            if(this.shown === 'visible')
                this.shown = 'hidden'
            else this.shown = 'visible'
        },
        // updateColor(event){
        //     this.desiredColor = event.target.value;
        // }
    }
}).mount('#assignment');