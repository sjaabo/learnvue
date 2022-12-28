Vue.createApp({
    data(){
        return {
            someNumber : 0,
            // result: 'Not there yet!'
        }
    },
    methods: {
        addBaseNumber(base){
            this.someNumber = this.someNumber + base;
        },
        reduceBaseNumber(base){
            this.someNumber = this.someNumber - base;
        }
    },
    computed: {
        result(){
            if(this.someNumber > 37)
                return 'Too much!'
            if(this.someNumber < 37)
                return 'Not there yet!'
            return 37;
        }
    },
    watch: {
        result() {
            const that = this;
            setTimeout(() => {
                that.someNumber = 0;
            }, 5000);
        }
    }
}).mount('#assignment');