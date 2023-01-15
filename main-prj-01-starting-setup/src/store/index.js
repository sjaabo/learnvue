import { createStore } from 'vuex'
import CoachModule from './modules/coaches.js'
import RequestModule from './modules/requests.js'


const store = createStore({
    modules: {
        coach: CoachModule,
        request: RequestModule
    },
    state() {
        return {
            userId: 'c3'
        }
    },
    getters: {
        userId(state){
            return state.userId;
        }
    }
});

export default store;



