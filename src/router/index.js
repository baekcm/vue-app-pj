import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

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

const UsersDetail = () => {
    return import ('../views/UsersDetail.vue')
}

const UsersEdit = () => {
    return import ('../views/UsersEdit.vue')
}

const AllUsers = () => {
    return import ('@/components/Users/AllUsers.vue')
}

const AddUser = () => {
    return import ('../views/AddUser.vue')
}

const UsersPopup = () => {
    return import ('@/components/Users/UsersPopup.vue')
}

Vue.use(VueRouter)


//--- 가드 함수를 만든다.
//--- 인증 받은 유저는(로그인 된 상태의 유저는) reject(받지 않다) 하겠다는 의미.
const rejectAuthUser = (to, from, next) => {
    //--- 이미 로그인 된 유저니까 막아야...
    if (store.state.isLogin === true) {
        alert("이미 로그인 된 유저입니다.")
            //--- from => to 로 가는 path 를 'Home' 으로 명시.
        next("/")
    } else {
        //--- from => to 로 가는 path 를 자연스럽게 둔다.
        //--- 들어가려고 하는 곳으로 그냥 보내준다.
        next()
    }
}

const onlyAuthUser = (to, from, next) => {
    //--- 아직 로그인이 안된 유저니까 막아야...
    if (store.state.isLogin === false) {
        alert("로그인이 필요한 경로입니다.")
            //--- from => to 로 가는 path 를 'Home' 으로 명시.
        next("/")
    } else {
        //--- from => to 로 가는 path 를 자연스럽게 둔다.
        //--- 들어가려고 하는 곳으로 그냥 보내준다.
        next()
    }
}

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
        path: '/login',
        name: 'login',
        //--- beforeEnter : router 에 들어오기 전에 지정한 함수를 실행해보고,
        //--- next() 하고 아무것도 없으면 import 파일로 이동하고, next('path') 가 있는 경우 redirect 한다.
        //--- 인증된 회원을 거부한다.
        beforeEnter: rejectAuthUser,
        component: import ('../views/Mypage.vue')
    },
    {
        path: '/mypage',
        name: 'mypage',
        //--- beforeEnter : router 에 들어오기 전에 지정한 함수를 실행해보고,
        //--- next() 하고 아무것도 없으면 import 파일로 이동하고, next('path') 가 있는 경우 redirect 한다.
        //--- 인증된 회원만 받아들이겠다.
        beforeEnter: onlyAuthUser,
        component: import ('../views/Login.vue')
    },
    {
        //path: '/users',
        //--- router 에서 path 에 :userId(속성이름) 뒤에 지정해주는 이러한 형태가 아니더라도 App.vue 파일의
        //--- router-link 에 parameter 를 넣어서 충분히 그 값들을 보내줄 수 있다.
        //--- 아래의 방법은 직접적으로 주소창을 이용해 값을 전달해주고자 할 때 사용한다.

        //--- Users 하위 경로
        /*
        path: '/users/:userId',
        name: 'users',
        component: Users
        */

        path: '/users',
        name: 'users',
        component: Users,
        children: [{
                path: ':id',
                name: 'users-detail',
                component: UsersDetail
            },
            {
                path: ':id/edit',
                name: 'users-edit',
                component: UsersEdit
            }
        ]
    },
    {
        path: '/all-users',
        name: 'AllUsers',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        //--- component 에 Home 과 같이 import 추가하고 사용해도 되지만 아래처럼 사용하는 방법도 있다.
        //--- component 를 입력하는 방식 - [3 번]
        //component: () => import ( /* webpackChunkName: "about" */ '../views/About.vue')
        component: AllUsers
    },
    {
        path: '/usersPopup',
        name: 'UsersPopup',
        component: UsersPopup
    },
    {
        path: '/add-user',
        name: 'AddUser',
        component: AddUser
    },
    {
        path: '/redirect-me',
        redirect: { name: 'Home' }
    },
    //--- 주소창에 사용자가 임의로 예상치못한 주소를 입력하게될 경우 Home 과 같은 경로로 redirect 시켜준다.
    //--- path: '/*' : 위에 선언된 모든 주소에서 경로를 찾을 수 없는 경우 redirect 경로로 이동시킨다.
    /*
    {
        path: '/*',
        redirect: { name: 'Home' }
    }
    */
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