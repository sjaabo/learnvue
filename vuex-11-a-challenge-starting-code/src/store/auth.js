export default {
    state() {
        return {
            isLoggedIn: false,
        }
    },
    mutations: {
        setAuth(state, flag){
            state.isLoggedIn = flag
        }
    },
    actions: {
        login(context) {
            context.commit('setAuth', true);
        },
        logout(context) {
            context.commit('setAuth', false);
        },
    },
    getters: {
        userAuthenticated(state) {
            return state.isLoggedIn;
        }
    }
};