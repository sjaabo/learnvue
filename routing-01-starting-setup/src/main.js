import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue'
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersFooter from './components/users/UsersFooter.vue'
import App from './App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/teams'
        },
        {
            name: 'teams',
            path: '/teams',
            meta: {needAuth: true}, // check it in beforeEach to check if user is authenticated to.meta.needAuth
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            // alias: '/'
            children: [{
                name: 'team-members',
                path: ':teamId',
                component: TeamMembers,
                props: true
            }]
        },
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter
            },
            beforeEnter(to, from, next){
                console.log('beforeEnter Users');
                next();
            }
        },
        {
            path: '/:catchall(.*)',
            redirect: '/teams',
            // or notfound component
        }
    ],
    scrollBehavior(_,_2,savedPosition) {
        // console.log(to, from, savedPosition);
        if(savedPosition)
            return savedPosition;
        return {left: 0 , top: 0 };
    }
    // linkActiveClass: ''
});

router.beforeEach(function(to, from, next){
    console.log("router beforeEach");
    console.log(to, from);
    next();
    // if(to.name === 'teams-members') {
    //     next();
    // }
    // else {
    //     next({name: 'team-members', params: { teamId : 't2'}});
    // }
});


router.afterEach(function(to, from){
    //send customer behaviour
    console.log('global afterEach', to, from)
});

const app = createApp(App);
app.use(router);
app.mount('#app');
