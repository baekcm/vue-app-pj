import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//--- 전역적으로 Vue Component를 등록하고 싶다면 아래의 Vue Instance 가 생성되기 이전에 생성한다.
//--- Vue.component(tagName(String), options(Object))
//--- Vue는 사용자 지정 태그 이름에 대해 모두 소문자이어야 하고 하이픈을 포함해야 한다.
//--- 전역적으로 어디서나 Vue Instance 안에서 해당 component 를 사용할 수 있다.
/*
Vue.component('my-component', {

})
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