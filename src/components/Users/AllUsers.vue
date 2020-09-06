<template>
    <div>
        <h1>All Users</h1>
        <!-- 
            store 의 index.js 파일에 있는 state 객체의 allUsers 배열의 값을 가져와서 사용한다.
            사용 시 $store.state.배열명 으로 사용 가능하다.
        -->
        <ul v-for="(user, index) in $store.state.allUsers" 
            :key="index" 
            avatar>
            <li><img :src="user.src" /></li>
            <li>{{ user.name }}</li>
            <li>id:#{{ index }} / {{ user.address }} 거주</li>
        </ul>
    </div>
</template>

<script>
import { EventBus } from '@/main.js'

    export default {
        data() {
            return {

            }
        },
        mounted() {
            //--- EventBus.$on('sign명', 전달 받을 객체명) 형재 component 의 event sign 을 기다린다.
            EventBus.$on('signUp', users => {
                //--- $store.state.배열명에 형제 component 로 전달받은 users 값을 배열에 추가한다.
                this.$store.state.allUsers.push(users);
            })
        }
    }
    
</script>