import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//--- Store : 저장소
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