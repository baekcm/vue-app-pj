<template>
    <div class="users">
        <h1>Users</h1>
        <p>이 유저는 현재 유저 번호가 {{ userId }} 입니다.</p>
        <p>이 유저는 현재 유저명은 {{ userName }} 입니다.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        userId() {
            return this.$route.params.userId
        },
        userName() {
            return this.$route.params.userName
        }
    },
    methods: {
        
    },
    created() {
        //--- router : this.$router 는 router 폴더의 index.js 파일내에 실제로 선언된 속성, options, 객체들을 의미한다.
        console.log('router', this.$router);
        //--- 지정해준 params, query, 실제 router 의 실제 주소의 path 등을 의미한다.(현재의 주소와 관련이 있다.)
        console.log('route', this.$route);
    }
}    
</script>

<!-- 
    html style 이 들어간다. 
    scoped 를 넣어줘야지만 css code 가 template 에 있는 html 에만 적용이 된다.
    scoped 를 넣지 않을 경우 application 전체에 적용되기때문에 대부분 넣어준다.
-->
<style scoped>
    
</style>