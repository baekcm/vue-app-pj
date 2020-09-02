<template>
    <div>
        <!-- 
            슬롯 (Slot) 사용시기 : component 를 사용하는데, 일부는 그대로 사용하고 싶은데, 
            특정 위치에 원하는 html code 를 따로 추가하고 싶을 때 사용한다.
            사용 방법은 component 의 원하는 자리에 <slot></slot> tag 를 넣어준다.
            그리고, slot 을 추가한 component 를 사용하는 Home.vue file 에서 20 라인 참조하여 사용법을 확인.
            또한, slot 은 다중으로 사용이 가능하다.
        -->
        <!-- 
        <h1>{{ title }}</h1>
        <slot></slot>
        <p>{{ innerText }}</p>
        <br>
        <button @click="changeMessage">Change Message</button>
        -->

        <!-- 
            Home.vue 파일의 template slot 이 header 인 값에 추가로 임의의 값을 넣고 싶은 경우 
            :임의의속성="data명" 을 적어준다.
            그러면 Home.vue 파일에서는 36라인 참조. v-slot:header="임의의 변수"
            그리고 Home.vue 파일에서는 42라인 참조. 기존 값 옆에 {{ params.slotText }} 형식으로 추가.
        -->
        <p>header</p>
        <slot name="header" :slotText="slotText"></slot>
        <p>body</p>
        <slot name="body"></slot>
        <p>footer</p>
        <slot></slot>
    
    </div>
</template>

<script>
    export default {
        //--- 공통으로 사용할 component 의 특정 항목에 대해서만 값을 다르게 받아서 출력하고자 할 때.
        //--- 예를 들어, 현재 Inner.vue 파일은 Home.vue 파일과 About.vue 파일에서 같이 사용하고 있다.
        //--- 이때, Home.vue, About.vue 파일에서 보내주는 값을 통해 Inner.vue component 에서 출력을
        //--- 각 각 달리해야 할 경우 props 를 사용한다.
        //--- 하지만, 대부분의 경우에서는 아래와 같이 props 를 사용하지는 않는다.
        //props : ['title'],
        props: {
            //--- 원하는 props 명을 적어주고, object 값을 갖게 한다.
            //--- 그 후 type 을 설정할 수 있다.
            //--- 받는 props 가 어떤 type 인지 기술해준다.
            //--- String, Number, Object 등의 여러가지 type 이 있다.
            //--- String 을 기술할 경우 다른 type 은 받지 않는다.
            //--- required 를 설정할 수 있다. 'true' 인 경우 무조건 항상 보내줘야 한다. 안보낼 시 에러 발생.
            //--- props 는 다중으로 보낼 수 있다. title 하위에 title 과 같은 object 형식으로 기술.
            //--- 만약, props 에서 객체명 title 을 받게 되면, props 의 객체명을 다른 곳에서 사용하면 안된다.
            //--- 마지막으로 받은 props 는 해당 component 에서 변경하면 안된다.
            title: {
                type: String,
                //--- title 을 보내주지 않을 경우 기본 값을 보여주고 싶을 때 default 를 사용한다.
                default: 'default title',
                required: true
            }
        },
        data() {
            return {
                innerText: 'Home.vue Page Inner Page!!!',
                slotText: 'add text'
            }
        },
        methods: {
            changeMessage() {
                this.innerText = 'click event 발생으로 Text Updated!!!';
            }
        }
    }
</script>

<style scoped>

</style>