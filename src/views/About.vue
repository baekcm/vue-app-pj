<!--
    views 폴더는 보통 페이지 component 이다.
    이 안에서 잘게 쪼개고 싶은 경우에는 components 폴더에 넣는다.
-->

<!-- 
    template 안에는 html tag 가 들어간다. 
    Vue Component 는 제일 위에 하나의 tag 가 먼저 존재해야 한다.
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 부모 component 인 About.vue 에서 자식 component 인 Inner.vue 에 title 이라는 값을 전달한다. -->
    <AboutInner title="Inner 에 보내줄 title value 는 'About' 입니다." />
    <!-- 아래와 같이 title 값을 보내지 않는 경우 Inner.vue 파일의 default 옵션에 의해 기본값을 출력 -->
    <!-- <AboutInner /> -->

    <!-- String type 이 아닌 number 를 보내려고 한다면 -->
    <!-- <AboutInner title="5" /> 이 방식은 string "5" 가 되므로 아래와 같이 한다. -->
    <!-- <AboutInner :title="title" /> data 에 title 을 활용해서 number 값을 보낸다. -->
    <br>
    <!-- 자식 component 에서 부모 component 에 값을 전달하는 방법. -->
    <form action="">
        <!-- 
            부모가 자식이 보내준 값을 전달받기 위해 자식 component 에서 사용한 @event명 을 적어준다. 
            @update-name event 로 받은 것을 method 로 실행시키면은 매개변수로 value 가 들어간다.
        -->

        <!-- updateName method 를 사용하지 않고, 자식 component 의 값을 사용. -->
        <!-- <InputField :name="name" @update-name="updateName" /> -->

        <!-- 
            그런데, 부모 component 에서 name 을 보내주고, 자식 component 에서 update-name 
            event 를 통해 값을 보내줘서 값을 update 하는 등 복잡하다.
            그래서 사용하기 쉽게 component 에도 v-model 을 사용하여 처리할 수 있다.
            대신, 자식 component 에서는 props object 의 'name' 이 아닌 'value' 를 사용해야 한다.
        -->
        <!-- <InputField :name="name" @update-name="name = $event.target.value" /> -->
        <InputField v-model="name" />
        <br><button @click="Submit">Submit</button>
    </form>
    {{ name }}
  </div>
</template>

<!-- script export default 안에는 options 들이 들어간다. -->
<!-- data, method, computed, watch 등... -->
<!-- 
  Inner.vue component 를 재사용 가능하게 만들었으므로,
  About.vue 에서도 Home.vue 와 같이 사용할 수 있다.
-->
<script>
//--- InputField 이름으로 InputField.vue 를 import 한다.
import InputField from '@/components/InputField.vue';

//--- AboutInner 이름으로 Inner.vue 를 import 한다.
import AboutInner from '@/components/Inner.vue';

export default {
    //--- components object 내에 AboutInner 를 넣어 자식 component 로 사용한다.
    components: {
        AboutInner,
        InputField
    },
    data() {
        return {
            message : 'Vue Cli 를 통해 Single File Component 재 작성 테스트',
            title: 5,
            name : ''
        }
    },
    methods: {
        Submit() {

        },
        /* 
         * 아래와 같이 method 를 사용하지 않고, 사용하기 위해서는 자식 component 인 InputField.vue
         * 에서 부모 component 로 보낼 때 InputField.vue 파일의 18 라인 참조.
         * 자식 component 인 InputField.vue 의 값을 받을 때 updateName method 사용하지 않기 위해 
         * About.vue 파일의 31 라인 참조.
        */

        /*
        updateName(name) {
            this.name = name;
        }
        */
    }
}    
</script>

<!-- 
    html style 이 들어간다. 
    scoped 를 넣어줘야지만 css code 가 template 에 있는 html 에만 적용이 된다.
    scoped 를 넣지 않을 경우 application 전체에 적용되기때문에 대부분 넣어준다.
-->
<style scoped>
    h1 {
        color: red;
    }
</style>