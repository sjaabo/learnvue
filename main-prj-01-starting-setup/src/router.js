import { createRouter, createWebHistory } from 'vue-router'

import CoachContact from './pages/coaches/CoachContact.vue'
import CoachDetail from './pages/coaches/CoachDetail.vue'
import CoachList from './pages/coaches/CoachList.vue'
import CoachRegister from './pages/coaches/CoachRegister.vue'
import RequestList from './pages/requests/RequestList.vue'
import NotFound from './pages/NotFound.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachList },
        {
            path: '/coaches/:id',
            component: CoachDetail,
            props: true,
            children: [
                { path: 'contact', component: CoachContact }
            ]
        },
        { path: '/register', component: CoachRegister },
        { path: '/requests', component: RequestList },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});
export default router;