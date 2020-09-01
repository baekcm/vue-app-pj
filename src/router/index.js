import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        //--- component 에 Home 과 같이 import 추가하고 사용해도 되지만 아래처럼 사용하는 방법도 있다.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
            //component: About
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router