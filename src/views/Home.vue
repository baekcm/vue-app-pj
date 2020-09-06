<!--
    views 폴더는 보통 페이지 component 이다.
    이 안에서 잘게 쪼개고 싶은 경우에는 components 폴더에 넣는다.
-->

<!-- 
    template 안에는 html tag 가 들어간다. 
    Vue Component 는 제일 위에 하나의 tag 가 먼저 존재해야 한다.
-->
<template>
    <div>
        <h1>Single File Component</h1>
        <!-- 아래의 방식은 mixins 를 이용한 현재 날짜 출력 방식이다 -->
        <p>{{ getDateAndTime(createdAt) }}</p>
        <p>{{ helloToMixin }}</p>

        <!-- 아래의 방식은 현재 날짜를 moment library 를 이용하여 format 한 날짜 출력 방식이다. -->
        <!-- <p>{{ new Date() | moment('YYYY-MM-DD HH:mm:ss') }}</p> -->
        <p>{{ message }}</p>
        <p>{{ name }}</p>
        <button @click="updateName">변경</button>
        
        <!-- 부모 component 인 Home.vue 에서 자식 component 인 Inner.vue 에 title 이라는 값을 전달한다. -->
        <!-- Inner.vue 파일에서 <slot> 을 사용하기 때문에 아래의 내용을 변경한다. -->
        <!-- <HomeInner title="Inner 에 보내줄 title value 는 'Home' 입니다." /> -->
        <!-- '/' 로 닫지 말고 tag 를 열어서 닫는 방식으로 사용한다. -->
        <!-- 그리고 그 사이에 원하는 code 를 쓰면 자식 component 인 Inner.vue 파일의 <slot></slot> 안으로 들어가게 된다. -->
        <!-- <slot> 을 사용하기 위해 html 을 만든다. -->
        <!-- 다중 slot 을 사용하기 위해 HomeInner component 코드를 임시로 주석 처리한다. -->
        <!--         
        <HomeInner>
            <div>
                <h1>hello slot</h1>
                <p>hi</p>
            </div>
            <div>
                <h2>slot 내용은 잘 들어가고 있겠지?</h2>
            </div>
        </HomeInner> 
        -->

        <HomeInner title="Inner 에 보내줄 title value 는 'Home' 입니다.">
            <!-- v-slot 은 # 으로 단축해서 사용할 수 있다. -->
            <!-- params 부분을 조금 더 단축해서 사용하기 위해서는 -->
            <!-- <template v-slot:header="params"> -->
            <template v-slot:header="{ slotText }">
                <!-- 
                    p tag 의 text 값 뒤에 추가로 임의의 값을 추가하고 싶은 경우 
                    Inner.vue 파일의 slot 에서 :원하는속성="data" 을 적는다.
                    Inner.vue 파일의 :임의의속성="data" 를 적는다.
                -->
                <!-- 37 라인의 단축으로 인해 추가되는 값도 아래와 같이 단축해서 사용할 수 있다. -->
                <!-- <p>header slot {{ params.slotText }}</p> -->
                <p>header slot {{ slotText }}</p>
            </template>
            <template #body>
                <p>body slot</p>
            </template>
            <!-- slot 이름이 없는 경우 아래와 같이 사용한다. -->
            <template #default>
                <p>default slot</p>
            </template>
        </HomeInner>

    </div>
</template>

<!-- script export default 안에는 options 들이 들어간다. -->
<!-- data, method, computed, watch 등... -->
<script>
//--- HomeInner 이름으로 Inner.vue 를 import 한다.
import HomeInner from '@/components/Inner.vue';

import { eventBus } from '@/main'

//--- export 한 mixins /mixins/dateFormat.js 파일을 import 한다.
import { dateFormat } from '@/mixins/dateFormat';

export default {
    //--- components object 내에 HomeInner 를 넣어 자식 component 로 사용한다.
    components: {
        HomeInner
    },
    data() {
        return {
            message : 'Vue Cli 를 통해 Single File Component 재 작성 테스트',
            testText: '생성',
            name: '',
            createdAt : null
        }
    },

    computed : {
        //--- mixins 의 data 변수를 사용하기 위해 테스트.(mixins file : dateFormat.js / data : mixinData)
        //--- mixins 에서 만들어진 함수나 data 등은 Home.vue 파일의 Vue Instance 내에 자연스럽게 녹아들었기때문에
        //--- this. 으로 변수 또는 메소드 사용이 자연스럽게 가능하다.
        helloToMixin() {
            return this.mixinData + ' Home.vue mixins';
        }
    },

    //--- Instance 생성 전 - data 에 접근이 불가능하다.
    beforeCreate() {
        console.log('beforeCreate', this.testText); // undefined
    },

    //--- Instance 생성되었을 때 - data 에 접근이 가능하다.
    //--- 서버에 요청을 보낼 때 사용한다.
    //--- 보통 서버에 요청을 보내서 응답을 받아온 데이터를 data 에 update 해줄 때 사용한다.
    created() {
        console.log('created', this.testText); // 생성
        this.createdAt = new Date();
        console.log('createdAt', this.createdAt);
    },

    //--- dom 이 아직 mount 가 되지 않았기 때문에 <div id="app"></div> 가 비어있는 상태.
    beforeMount() {
        alert('beforeMount');
    },

    //--- <div id="app"></div> 가 채워진다. dom 에 접근이 가능하다.
    //--- dom 을 controll 하고 싶은 경우 mounted() 에서 하면 된다.
    mounted() {
        alert('mounted');
    },

    //--- 만약 button click event 를 발생시켜 data 의 값을 변경하려고 하는 경우
    //--- 값이 바뀌기 이전에 경고창이 출력된다.
    beforeUpdate() {
        alert('beforeUpdate');
    },

    //--- 만약 button click event 를 발생시켜 data 의 값을 변경하려고 하는 경우
    //--- 값이 바뀌기 이전에 경고창이 출력된다.
    //--- 다만, 확인을 누르는 경우 값이 변경된다.
    updated() {
        alert('updated');
    },

    //--- 다른 페이지로 이동할 때 해당 경고창이 출력된다.
    beforeDestroy() {
        alert('beforeDestroy');
    },

    //--- 다른 페이지로 이동할 때 해당 경고창이 출력된다.
    //--- 메모리 누수를 방지하기 위해 event listner 를 달아놓은 경우 삭제하고,
    //--- 데이터를 초기화 하는 등의 작업을 하는데 유리하다.
    destroyed() {
        alert('destroyed');
    },

    methods: {
        updateName() {
            this.name = 'hello';
            //--- evenBus 에 nameWasEdited 신호를 $emit 으로 보내고 있다.
            //--- $emit 은 자식 component 에서 부모 component 로 신호를 전달할 때 사용한다.
            //--- evenBus 라는 새로운 Vue Instance 가 부모 component 의 역할을 한다 라고 추론할 수 있다.
            eventBus.$emit('nameWasEdited', new Date())
            //eventBus.nameWasEdited(new Date());
        }
    },
    //--- mixins 를 사용하기 위해 mixins 속성값을 사용하고, 배열의 값으로 import 한 파일의 변수값을 넣어준다. 71라인 참조.
    mixins: [dateFormat]
}    
</script>

<!-- 
    html style 이 들어간다. 
    scoped 를 넣어줘야지만 css code 가 template 에 있는 html 에만 적용이 된다.
    scoped 를 넣지 않을 경우 application 전체에 적용되기때문에 대부분 넣어준다.
-->
<style scoped>
    h1 {
        color: blue;
    }
    
    h2 {
        color: chocolate;
    }
</style>