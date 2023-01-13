import { createStore} from 'vuex';
import authModule from './auth'
import counterModule from './counter'

const store = createStore({
    modules:{
        numbers: counterModule,
        signing: authModule
    }
});


export default store;