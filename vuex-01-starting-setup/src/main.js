import { createApp } from 'vue';
import { createStore} from 'vuex';

import App from './App.vue';

const store = createStore({
    state(){
        return{
            counter: 0
        };
    },
    mutations: {
        addSteps(state, step){
            state.counter += step;
        }
    },
    getters: {
        finalCounter(state, getters) {
            console.log(getters);
            return state.counter *2;
        }
    }
});

const app = createApp(App);
app.use(store);

app.mount('#app');
