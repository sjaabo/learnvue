import {createStore} from 'vuex'
import Cart from './cart.js'
import Auth from './auth.js'


const store = createStore({
    modules: {
        shop: Cart,
        log: Auth
    }
});

export default store;