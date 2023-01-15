let timer;

export default {
    state() {
        return {
            lastFetch: null,
            userId: null,
            token: null,
            autoLogout: false
        };
    },
    mutations: {
        setUser(state,payload){
            state.token = payload.token,
            state.userId = payload.userId,
            state.autoLogout = false
        },
        setAutoLogout(state){
            state.autoLogout = true;
        }
    },
    actions: {
        async auth(context, payload){
            const mode = payload.mode;
            let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDkWGIGBgn8vIh2WI6zHQRdAiiXgxoJzw8';
            if(mode==='signup')
                url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkWGIGBgn8vIh2WI6zHQRdAiiXgxoJzw8';
            const response = await fetch(
                url, {
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                })
            });
            const responseData = await response.json();
            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed to authenticate! check your login data');
                throw error;
            }
            const expiresIn = +responseData.expiresIn * 1000;
            // const expiresIn = 5000;
            const expirationDate = new Date().getTime() + expiresIn;
            localStorage.setItem('token', responseData.idToken);
            localStorage.setItem('userId', responseData.localId);
            localStorage.setItem('tokenExpiration', expirationDate);

            timer = setTimeout(function() {
                context.dispatch('autoLogout');
            }, expiresIn);

            context.commit('setUser',{
                token: responseData.idToken,
                userId: responseData.localId,
            })   
        },
        tryLogin(context){
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');
            const tokenExpiration = localStorage.getItem('tokenExpiration');

            const expiresIn = +tokenExpiration - new Date().getTime();

            if(expiresIn < 0)
                return;

            timer = setTimeout(function(){
                context.dispatch('autoLogout');
            }, expiresIn);

            if(token && userId){
                context.commit('setUser',{token: token, userId: userId});
            }
        },
        autoLogout(context){
            context.dispatch('logout');
            context.commit('setAutoLogout');
        },
        logout(context) {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('tokenExpiration');

            clearTimeout(timer);

            context.commit('setUser',{
                token: null,
                userId: null
            });
        },
        login(context,payload){
            context.dispatch('auth', {
                ...payload,
                mode: 'login'
            });
        },
        signup(context, payload){
            context.dispatch('auth', {
                ...payload,
                mode: 'signup'
            });    
        }
    },
    getters: {
        userId(state) {
            return state.userId;
        },
        token(state){
            return state.token;
        },
        isAuthenticated(state) {
            return !!state.token;
        },
        didAutoLogout(state){
            return state.autoLogout;
        }
    }
};  