<template>
    <div>
        <!-- mapGetters 사용을 위해 주석 처리한다. -->
        <!--
        <h1>All Users({{ $store.getters.allUsersCount }})</h1>
        <h2>Seoul Users : {{ $store.getters.countOfSeoul }} ({{ $store.getters.percentOfSeoul }}%)</h2>
        -->

        <!-- mapGetters 사용하여 처리한다. -->
        <!--
        <h1>All Users({{ allUsersCount }})</h1>
        <h2>Seoul Users : {{ countOfSeoul }} ({{ percentOfSeoul }}%)</h2>
        -->

        <!-- mapGetters 객체를 사용하여 처리한다. -->
        <h1>All Users({{ count }})</h1>
        <h2>Seoul Users : {{ seouls }} ({{ percent }}%)</h2>

        <!-- 
            store 의 index.js 파일에 있는 state 객체의 allUsers 배열의 값을 가져와서 사용한다.
            사용 시 $store.state.배열명 으로 사용 가능하다.
        -->
        <!-- mapState 를 사용하여 allUsers 를 단축하여 사용한다 -->
        <!-- <ul v-for="(user, index) in $store.state.allUsers"  -->
        <ul v-for="(user, index) in allUsers"
            :key="index" 
            avatar>
            <li><img :src="user.src" /></li>
            <li>{{ user.name }}</li>
            <li>id:#{{ index }} / {{ user.address }} 거주</li>
        </ul>
    </div>
</template>

<script>
//--- store 를 통해 반복적으로 $store.getters.메소드를 사용하는 중복이 계속 발생되므로,
//--- mapGetters 를 사용하여, 쉽게 사용할 수 있다.
//--- mapGetters 를 객체 형태로 import 하여 사용할 수 있다.
//--- mapState 도 사용할 수 있다.
import { mapState, mapGetters } from 'vuex'

import { eventBus } from '@/main.js'

    export default {
        data() {
            return {

            }
        },
        methods: {
            
        },
        computed : {
            //...mapGetters(['allUsersCount', 'countOfSeoul', 'percentOfSeoul'])

            //--- 객체 형태로 받아서 사용할 수 있다.
            //--- 실제 store 파일에 저장되어 있는 값을 이 컴포넌트에서는 count, seouls, percent 로 사용하겠다는 의미.
            //--- html 의 allUsersCount => count 이렇게 변경하여 사용하면 된다.
            ...mapGetters({
                count : 'allUsersCount',
                seouls : 'countOfSeoul',
                percent : 'percentOfSeoul'
            }),

            ...mapState(['allUsers'])
        },
        mounted() {
            //--- eventBus.$on('sign명', 전달 받을 객체명) 형재 component 의 event sign 을 기다린다.
            eventBus.$on('signUp', users => {
                //--- $store.state.배열명에 형제 component 로 전달받은 users 값을 배열에 추가한다.
                this.$store.state.allUsers.push(users);
            })
        }
    }
    
</script>