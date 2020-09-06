import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//--- 전역적으로 사용할 vue 파일을 import 한다.
import header from './header'
import footer from './footer'

/*
 * main.js 파일은 vue application 을 관장하는 역할을 한다.
 * main.js 파일에서 선언해준 header component 는 어느 파일에서나 사용 가능하다.
 * App.vue 파일에 <header-app /> component 를 넣어줌으로써 전역적으로 사용이 가능하다.
 */
Vue.component('header-app', header);
Vue.component('footer-app', footer);

Vue.config.productionTip = false

//--- 전역적으로 Vue Component를 등록하고 싶다면 아래의 Vue Instance 가 생성되기 이전에 생성한다.
//--- Vue.component(tagName(String):component명, options(Object))
//--- Vue는 사용자 지정 태그 이름에 대해 모두 소문자이어야 하고 하이픈을 포함해야 한다.
//--- 전역적으로 어디서나 Vue Instance 안에서 해당 component 를 사용할 수 있다.
//--- 전역적으로 사용하는 파일은 주로 header, footer, navigation 등...
/*
Vue.component('my-component', {

})
*/

//--- event bus(형제 component 간의 통신을 사용해서 값을 주고 받는다.)
//--- new Vue : 새로운 Vue Instance 를 생성한다.
//--- export const eventBus : eventBus 라는 상수값 하나를 내보내게 설정했다.

export const eventBus = new Vue()

//--- 만약에 만들어놓은 event bus 가 굉장히 여러곳에서 사용이 되고 있다면 event bus 에서 사용하는 함수나
//--- 기능들을 한군데에 만들어놓고 그 함수들을 불러와서 사용하는 식으로 사용하고 싶을 것이다.
/*
export const eventBus = new Vue({
    methods: {
        nameWasEdited(date) {
            this.$emit('nameWasEdited', date);
        }
    },
});
*/

/* 
 * 하지만, 보통 Vue Cli 를 이용해서 Vue Project 를 설치했을때는 Vue file 을 만들어줘서
 * 그 안에다가 component 를 만들어 준다.
 */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')