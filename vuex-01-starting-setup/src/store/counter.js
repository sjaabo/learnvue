export default {
    // namespaced: true,
    state(){
        return{
            counter: 0,
        };
    },
    mutations: {
        addSteps(state, step){
            state.counter += step;
        },
    },
    getters: {
        finalCounter(state, getters) {
            console.log(getters);
            return state.counter *2;
        },
    }
};

