import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//--- component 를 입력하는 방식 - [1 번]
//import About from '../views/About.vue'

//--- 날짜 형식 library 사용
import vueMoment from 'vue-moment'
Vue.use(vueMoment)

//--- component 를 입력하는 방식 - [2 번]
const About = () => {
    return import ('../views/About.vue')
}

//--- router 로 주소를 이동하면서 값을 함께 넘기는 방법을 확인하는 용도의 Users.vue 파일 import
const Users = () => {
    return import ('../views/Users.vue')
}

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
        //--- component 를 입력하는 방식 - [3 번]
        //component: () => import ( /* webpackChunkName: "about" */ '../views/About.vue')
        component: About
    },
    {
        path: '/users',
        //--- router 에서 path 에 :userId(속성이름) 뒤에 지정해주는 이러한 형태가 아니더라도 App.vue 파일의
        //--- router-link 에 parameter 를 넣어서 충분히 그 값들을 보내줄 수 있다.
        //--- 아래의 방법은 직접적으로 주소창을 이용해 값을 전달해주고자 할 때 사용한다.
        //path: '/users/:userId',
        name: 'users',
        component: Users,
        // true로 설정하면 데이터를 props로도 받습니다.
        props: true
    }
]

/*
 * component 를 입력하는 방식 3가지 중 [1번] 과 [2,3] 번의 차이는 router.js 파일이 로딩될 때
 * 모든 router 들에 연결되어 있는 component 들을 다 불러와서 손에 들고 있다가 주소창에 맞는 path
 * 에 해당하는 화면만 보여주는 형태이다.
 * 즉, 다 로딩한 이후 보여주는 화면만 달라지게 동작한다.
 * 하지만, 2번과 같이 함수 형태로 하나를 선언해준 다음 값을 component: About 입력해주면
 * 해당 주소와 연결되어 있는 component 하나만 불러와서 그 화면만 뿌려주게 된다.
 */

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router