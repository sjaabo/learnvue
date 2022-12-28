Vue.createApp({
    data() {
        return {
            name: 'Suhayeb Jaabo',
            age: 41,
            image: 'https://www.tahawultech.com/wp-content/uploads/2016/09/CIO-Spotlight.jpg' 
        }
    },
    methods: {
        getFavoriteNumber() {
            return Math.random();
        }
    }
}).mount('#assignment');