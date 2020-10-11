import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

//--- Store : 저장소
//--- 실행 순서 : Vue Components > Actions > Mutations > State > Vue Components
/*
 ** Vuex 동작 구조
 ** Vuex 포함 : Actions, Mutations, State
 ** 여러 Component 에서 사용할 데이터들을 Vuex 안에 있는 State 에 올려놓고 사용한다.
 ** 데이터가 필요한 Component 는 Vuex 에서 꺼내다 사용하고, 데이터 수정이 필요하다면 다시 Vuex 에게 알려주면 된다.
 ** Actions 과 Mutations 은 State 를 변경하기 위해 거치는 단계인데, Component 에서 State 에 직접 접근해서
 ** 데이터를 수정하다보니 Component 가 많아질수록 데이터 관리가 힘들어지는 문제가 있어
 ** Actions 과 Mutations 라는 단계를 나눠서 데이터를 수정하는 것이다.
 ** Actions : 비동기 처리가 가능. / Mutations : 동기처리만 가능.
 ** 데이터 변경을 쉽게 추적하기 위해 비동기 처리하는 단계를 따로 구분해놨다.
 ** Mutations 은 동기 처리만 하기 때문에 Mutations 으로 넘어온 값으로 State 값이 변경됐다는 것을 보장한다.
 ** 그래서 Mutations 를 실행할 때 로그를 남긴다면 State 가 언제 바뀌었는지 또 어떤 Mutations 을 통해 바뀌었는지 쉽게 확인할 수 있다.

 ** Vue Components 는 event 를 받아 Actions 를 실행하고, Actions 는 Ajax 로 Backend API 를 호출해서 서버에 있는 
 ** 데이터베이스에 값을 변경하고, Mutations 을 호출해서 State 를 변경한다.
 ** 변경된 State 는 다시 Vue Components 로 들어가 값을 자동으로 변경해준다.
 ** 이렇게 데이터를 수정하는 흐름이 단방향으로 이루어지기 때문에 단방향 데이터 흐름 또는 단방향 데이터 바인딩 이라고 부른다.
 */

export default new Vuex.Store({
    //--- state : 상태값 정의. Vue Instance 의 data() 역할을 한다.
    //--- Component 에서 data 를 정의한 것처럼 넣어주면 된다.
    state: {
        allUsers: [
            { userId: 'one2006', password: '123', name: '원영', address: 'Seoul', src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5095%2F2020%2F06%2F15%2F0000925519_004_20200615165007685.jpg&type=b400' },
            { userId: 'minju2003', password: '456', name: '민주', address: 'Berlin', src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5403%2F2020%2F07%2F24%2F0000049673_001_20200724130643689.jpg&type=b400' },
            { userId: 'yuri2003', password: '789', name: '유리', address: 'Busan', src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F433%2F2020%2F07%2F13%2F0000069868_002_20200713183114173.jpg&type=b400' },
            { userId: 'cha2001', password: '900', name: '채연', address: 'Seoul', src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F112%2F2020%2F04%2F03%2F202004032153247161879_20200403215442_01_20200403215911849.jpg&type=b400' },
        ],
        //result: []
        isLogin: false,
        isLoginError: false
    },
    //--- getters : Vue Instance 의 computed 역할을 한다.
    getters: {
        allUsersCount: state => {
            return state.allUsers.length
        },
        countOfSeoul: state => {
            let count = 0
            state.allUsers.forEach(user => {
                if (user.address === 'Seoul') count++
            });
            return count
        },
        //--- state 를 꼭 써줘야 두번째 인자로 getters 를 받을 수 있다.
        percentOfSeoul: (state, getters) => {
            return Math.round(getters.countOfSeoul / getters.allUsersCount * 100)
        }
    },
    //--- mutations event 호출하는 component 에서 click event 라 가정 시
    /*
     ** methods: {
     **      itemClick() {
     **          this.$store.commit('selectedUser', {...this.user});
     **      }
     ** }
     */

    //--- mutations : Vue Instance 의 method 역할을 한다.
    //--- 모든 기능이 동기로 동작한다.
    //--- state 값을 변화시키는 역할을 한다.
    //--- 예를 들어, 회원 가입 항목을 기재 후 완료하면, 전체 유저수에 1명의 유저가 추가되면서 전체 유저에 대한 state 가 변경되는 것이다.

    /*
    ** 많은 컴포넌트에서 하나의 state 값을 변경하기 위해 기존에는
    ** 각 각의 컴포넌트에서 메소드를 통하여 state 값을 변경했을 것이다.

    ** 1번 컴포넌트에도 addUsers 라는 메소드로 유저를 추가하는 함수가 존재하고 state 가 변경되면,
    ** 2번 컴포넌트 또한 addUsers 라는 메소드로 유저를 추가하는 함수가 존재하고 state 가 변경되도록 했을 것이다.

    ** 이러한 중복적인 처리를 각 각의 컴포넌트에서 처리하지 않고,
    ** store 파일 내에서 state 값을 변화시키는 Mutations 이 있는 것이다.

    ** 같은 기능을 하는 어떤 함수를 Mutation 내에 만들어놓고, 각각의 컴포넌트에서 실행시키는 것이다.
    ** 실행 시키는 방법을 'Commit' 이라 한다.

    ** 즉, 각각의 컴포넌트 내에서 어떤 함수들로 state 를 변화시키는 것이 아닌,
    ** 각각의 컴포넌트 내에서 Mutation 내에 저장되어 있는 함수를 'Commit' 해서 state 값을 변화시킨다.
    */
    mutations: {
        //--- 로그인 성공 시
        loginSucess(state) {
            state.isLogin = true
            state.isLoginError = false
        },
        //--- 로그인 실패 시
        loginFail(state) {
            state.isLogin = false
            state.isLoginError = true
        },
        //--- state 를 변화시키기 위해 첫번째 인자로 state 를 받는다,
        //--- 두번째 인자로는 addUsers 를 실행시키는 컴포넌트의 전달 인자값을 통상적으로 'payload' 라 한다.

        //--- addUsers 함수는 유저를 추가하는 함수이므로, 해당 함수를 사용하는 컴포넌트는 당연히
        //--- 회원가입 입력 폼을 통해 값을 입력한 이후 회원가입을 완료하게 되고, 그때 입력한 값들을
        //--- store 파일의 mutations 내의 addUsers 를 실행할 때('Commit') 넘겨줘야 하는 것이다.
        addUsers: (state, payload) => {
            state.allUsers.push(payload)
        },
        resultSet: (state, payload) => {
            //state.result = payload
            state.allUsers = payload
            console.log('mutations')
        }
    },
    //--- mutations 는 state 값을 변화시키는 목적이고,
    //--- actions 는 state 값을 변화시키기 위한 복잡한 비지니스 로직을 처리하고,
    //--- 최종 변화할 값만을 mutations 함수에 commit 을 통해 전달한다.

    //--- actions : 비지니스 로직 수행. Vue Instance 의 method 역할을 한다.
    //--- 예를 들어, 비동기 방식으로 서버와 통신을 해서, 회원에 중복 검사를 하고, 비밀번호도 체크를 하는 등의
    //--- 복잡한 모든 처리가 다 이루어져서 유저가 추가가 가능한 경우에만 mutations 함수에 commit 을 통해 전달한다.
    actions: {
        addUsers: ({ commit }, payload) => {
            commit('addUsers', payload)
        },
        alramCheck: ({ commit }) => {
            axios.get('https://reqres.in/api/users?page=2')
                .then((res) => {
                    //this.result = res.data;
                    if (res.data.data.length) {
                        let dataset = [
                                { userId: 'one2006', password: '123', name: '원영', address: 'Seoul', src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5095%2F2020%2F06%2F15%2F0000925519_004_20200615165007685.jpg&type=b400' },
                                { userId: 'minju2003', password: '456', name: '민주', address: 'Berlin', src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5403%2F2020%2F07%2F24%2F0000049673_001_20200724130643689.jpg&type=b400' },
                                { userId: 'yuri2003', password: '789', name: '유리', address: 'Busan', src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F433%2F2020%2F07%2F13%2F0000069868_002_20200713183114173.jpg&type=b400' },
                                { userId: 'cha2001', password: '900', name: '채연', address: 'Seoul', src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F112%2F2020%2F04%2F03%2F202004032153247161879_20200403215442_01_20200403215911849.jpg&type=b400' },
                                { userId: 'yena99', password: '1234', name: '예나', address: 'Seoul', src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F311%2F2020%2F06%2F24%2F0001166434_001_20200624225107369.jpg&type=sc960_832' },
                            ]
                            /*
                            let width = 700
                            let height = 600
                            let left = (screen.width - width) / 2;
                            let top = (screen.height - height) / 2;
                            setInterval(() => {
                                window.open("/all-users", "PopupWin", `toolbar=yes,scrollbars=yes,resizable=yes,top=${ top },left=${ left },width=${ width },height=${ height }`, true)
                            }, 7000);
                            */
                        commit('resultSet', dataset)
                        console.log('actions')
                    }
                })
                .catch((err) => {
                    console.log('error', err);
                });
        },
        //--- 로그인 시도
        //--- action 을 분리하여, 새로 고침 시 state 정보가 초기화 되어도 token 을 localStorage 에 넣어서 로그인 상태를 유지한다.
        login({ dispatch }, loginObj) {
            //--- 로그인 -> 토큰 반환
            axios.post("https://reqres.in/api/login", loginObj) // post 방식은 parameter(body) 를 넘긴다.
                .then(res => {
                    //--- 성공 시 token 을 받아온다.
                    //--- token 을 header 에 포함시켜서 유저 정보를 요청한다.
                    let token = res.data.token
                        //--- token 을 localStorage 에 저장한다.
                    localStorage.setItem("access-token", token)
                        //--- action 을 실행시키기 위한 명령어 'dispatch' 를 사용하여, getUserInfo 함수를 실행한다.
                    dispatch("getUserInfo")
                })
                .catch(err => {
                    console.log(err)
                })
        },
        logout({ commit }) {
            commit("logout")
            router.push({ name: "home" })
        },
        getUserInfo({ commit }) {
            //--- localStorage 에 저장되어 있는 token 을 불러온다.
            //--- config : header 값을 설정해줄 수 있고, header 내에 token 을 포함시키기 위해 사용한다.
            let token = localStorage.getItem("access-token")

            let config = {
                headers: {
                    "access-token": token
                }
            }

            //--- get 방식은 config 를 넘긴다.
            //--- 보안과 관련된 header, option 등을 설정할 수 있는 파일이 온다.
            //--- 토큰 -> 유저 정보를 반환
            //--- 새로 고침 -> state 가 초기화되므로, token 만 가지고 유저 정보를 요청
            axios.get("https://reqres.in/api/users/2", config)
                .then(response => {
                    console.log(response)
                    let userInfo = {
                        id: response.data.data.id,
                        firstName: response.data.data.firstName,
                        lastName: response.data.data.lastName,
                        avatar: response.data.data.avatar
                    }
                    commit("loginSuccess", userInfo)
                        //--- 로그인 성공 시 페이지 이동
                        //--- this.$router 는 Vue Instance 내에서 불러오는 경우에 가능하지만, 
                        //--- Vue Instance 내부에서 작업을 하고 있지 않으므로, router.js 파일을 import 해야 한다.
                        //this.$router.push({ name: "AllUsers" })
                    router.push({ name: "AllUsers" })
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    //-- action 을 분리하여, 새로 고침 시 state 정보가 초기화 되어도 token 을 localStorage 에 넣어서 로그인 상태를 유지한다.
    //-- localStorage 값을 확인하기 위해서는 Chrome 에서 Application 탭으로 이동하고,
    //-- Storage 영역에 Local Storage 가 확인된다.
    modules: {}
})