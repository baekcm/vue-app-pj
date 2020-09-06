<template>
    <div class="users">
        <!-- Users 하위 경로에서만 router-viuw 를 사용할 목적인 테스트를 위해 주석. -->
        <!-- 
        <h1>Users</h1>
        <p>이 유저는 현재 유저 번호가 {{ userId }} 입니다.</p>
        <p>이 유저는 현재 유저명은 {{ userName }} 입니다.</p>
        <p>그룹 : {{ group }} 입니다.</p>
        <p>카테고리 : {{ category }} 입니다.</p>
        -->

        <div>
            <h1>Users</h1>
            <p>유저를 검색해 주세요.</p>
            <input type="text" name="" id="" v-model="userId" />
            <!-- 아래와 같이 하게되면 /users/ 경로가 사라지고 path 로 넣은 userId 값만 들어가게 된다. -->
            <!-- <button @click="$router.push({path: userId})">유저 검색</button> -->

            <!-- 아래의 path 방식은 앞의 path 경로를 써줘야 하는 번거로움이 있어서 name 방식으로 한다. -->
            <!-- <button @click="$router.push({path: `users/${ userId }`})">유저 검색</button> -->

            <button @click="$router.push({name: `users-detail`, params: { id: userId }})">유저 검색</button>
        </div>

        <br>
        <!-- 
            하위 라우팅 세팅. 
            하위 경로들은 Users 라는 컴포넌트 안에서만 동작하는 새로운 라우터.
            전체 주소를 총괄하는 라우터가 하나 있고, Users 라는 경로 안에서만 동작하는 라우터가 하나 더 있다고 이해하자.
            새로운 라우터를 만들기 위해 라우터가 동작할 수 있는 곳을 만들어줘야 한다.
            <router-view></router-view>
        -->
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userId: ''
        }
    },
    //--- 다른 테스트 목적으로 parameter 로 받아온 데이터들을 주석 처리한다.
    /*
    computed: {
        userId() {
            return this.$route.params.userId
        },
        userName() {
            return this.$route.params.userName
        },
        group() {
            return this.$route.query.group
        },
        category() {
            return this.$route.query.category
        }
    },
    */
    methods: {
        searchUser() {
            alert('유저 검색 중...');
        }
    },
    //--- 다른 테스트 목적으로 parameter 로 받아온 데이터들을 주석 처리한다.
    /*
    created() {
        //--- router : this.$router 는 router 폴더의 index.js 파일내에 실제로 선언된 속성, options, 객체들을 의미한다.
        console.log('router', this.$router);
        //--- 지정해준 params, query, 실제 router 의 실제 주소의 path 등을 의미한다.(현재의 주소와 관련이 있다.)
        console.log('route', this.$route);
    }
    */
}    
</script>

<!-- 
    html style 이 들어간다. 
    scoped 를 넣어줘야지만 css code 가 template 에 있는 html 에만 적용이 된다.
    scoped 를 넣지 않을 경우 application 전체에 적용되기때문에 대부분 넣어준다.
-->
<style scoped>
    
</style>