export default {
    state(){
        return{
            loggedIn: false //private access
        };
    },
    mutations: {
        setAuth(state, status){
            state.loggedIn = status.isAuth;
        }

    },
    actions: {
        login(context){
            // state.setAuth(true);
            context.commit('setAuth',{isAuth: true});
        },
        logout(context){
            context.commit('setAuth', {isAuth: false});
        }
    },
    getters: {
        userIsAuthenticated(state){
            return state.loggedIn;
        }
    },
};
