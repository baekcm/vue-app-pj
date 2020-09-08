import Vue from 'vue'
import Vuex from 'vuex'

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
    //--- state : 상태. Vue Instance 의 data() 에 역할을 한다.
    state: {
        allUsers: [
            { userId: 'one2006', password: '123', name: '원영', address: 'Seoul', src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5095%2F2020%2F06%2F15%2F0000925519_004_20200615165007685.jpg&type=b400' },
            { userId: 'minju2003', password: '456', name: '민주', address: 'Berlin', src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5403%2F2020%2F07%2F24%2F0000049673_001_20200724130643689.jpg&type=b400' },
            { userId: 'yuri2003', password: '789', name: '유리', address: 'Busan', src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F433%2F2020%2F07%2F13%2F0000069868_002_20200713183114173.jpg&type=b400' },
            { userId: 'cha2001', password: '900', name: '채연', address: 'Seoul', src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F112%2F2020%2F04%2F03%2F202004032153247161879_20200403215442_01_20200403215911849.jpg&type=b400' },
        ]
    },
    mutations: {},
    actions: {},
    modules: {}
})