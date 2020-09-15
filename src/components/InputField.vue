<template>
    <div>
        <label for="">Name</label>
        <!-- v-model 을 사용하여 양방향 바인딩을 통해서 연결해준다. -->
        <!-- 
            props 를 v-model 에 넣어주면 props 를 바로 변경해주면 안되기 때문에 
            (양방향 바인딩이므로) :value 속성을 통해서 값을 넣어준다.
        -->
        <!-- <input type="text" v-model="name" style="padding: 30px; border: 2px solid green;"> -->
        <!-- 
            About.vue 파일에서 name 을 받아서 props 를 통해 값을 넣어주기만 했는데
            :value 의 값이 바뀌었을 때 parent 로 보내는 방법을 알아보자.
            @input event 가 있는데, 유저가 값을 변경시킬 때 event 가 동작한다.
        -->

        <!-- @input event 를 사용하면서 updateName method 를 사용하지 않고 부모 component 에 값을 보낼 수 있다. -->
        <!-- <input type="text" :value="name" style="padding: 30px; border: 2px solid green;" @input="updateName"> -->

        <!-- 
            부모 component 인 About.vue 에서 InputField v-model 을 사용하여 :value="value" 로 변경하였다. 
            또한, @input="$emit('update-name', $event)" => @input="$emit('input', $event.target.value)" 로 바꿔준다.
        -->
        <input 
            type="text" 
            :value="value" 
            style="padding: 30px; border: 2px solid green;" 
            @input="$emit('input', $event.target.value)"
        >
    </div>
</template>

<script>
    export default {
        props: {
            /* 
             * 부모 component 인 About.vue 에서 InputField v-model 을 사용하여 value 로 변경하였다.
             * 그로 인해 23 라인의 :value="name" 또한 :value="value" 로 바꿔줘야 한다.
             * 또한, @input="$emit('update-name', $event)" => @input="$emit('input', $event.target.value)" 로 바꿔준다.
            */
            //name: {
            value: {
                type: String,
                //--- title 을 보내주지 않을 경우 기본 값을 보여주고 싶을 때 default 를 사용한다.
                default: 'baekcm',
                required: true
            }
        },
        /*
        methods: {
            updateName(event) {
                //console.log(event.target.value);
                //--- 부모 component 에 값을 전달하는 방법.
                //--- this.$emit('원하는 event명', '전달할 값');
                this.$emit('update-name', event.target.value);
            }
        }
        */
    }
</script>

<style scoped>

</style>