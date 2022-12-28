const app = Vue.createApp({
    data(){
        return {
            courseGoalHTML: '<h2>Finish the course!!</h2>',
            courseGoal: 'Complete the course!!',
            courseGoalA: 'Master Vue!!',
            courseGoalB: 'Learn another Vue!!',
            vueLink: 'https://suhayeb.com'
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5)
                return this.courseGoalHTML;
            return this.courseGoalB;
        }
    }
});

app.mount('#user-goal');