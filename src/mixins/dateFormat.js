/*
 * Vue Instance 모양과 똑같다.
 * 그것은 dateFormat 내에 computed, data, created 등 Vue Instance 에서 사용하는 속성값을 똑같이 사용할 수 있다.
 * mixins 에서 만들어진 함수나 data 등은 Vue Instance 내에 자연스럽게 들어가서 실제로 그 Vue Instance 내에
 * 선언된 것처럼 사용할 수 있다.
 * data 메소드를 만들고 mixinData 변수를 만들어서 mixins 를 사용하는 파일인 Home.vue 파일에서 사용해보자.
 */
export const dateFormat = {
    methods: {
        getDateAndTime(today) {
            if (today !== null) {
                var moment = require('moment'); // require
                return moment(today).format('YYYY-MM-DD HH:mm:ss');
            } else {
                return null;
            }
        }
    },
    data() {
        return {
            mixinData: 'this data is mixins data!'
        }
    }
}