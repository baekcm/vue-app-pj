<template>
    <div>
        <h1>All Users({{ allUsersCount }})</h1>
        <h2>Seoul Users : {{ countOfSeoul }} ({{ percentOfSeoul }}%)</h2>

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
import axios from 'axios'
import { mapState, mapGetters } from 'vuex'

    export default {
        data() {
            return {
                alarmId : null
            }
        },
        methods: {
            
        },
        computed : {
            ...mapState(['allUsers']),
            ...mapGetters(['allUsersCount', 'countOfSeoul', 'percentOfSeoul'])
        },
        mounted() {
            //--- 아래와 같이 새로운 데이터를 가져와서 데이터를 넣어줄 때는 store 를 이용하지 않고 해야
            //--- setter 관련 에러가 발생되지 않는다.
            setInterval( () => { 
                axios.get('https://reqres.in/api/users?page=2')
                .then((res) => {
                    if (res.data.data.length) {
                        this.$store.dispatch('alramCheck')
                    }
                })
                .catch((err) => {
                    console.log('error', err);
                });
            }, 7000);
        }
    }
    
</script>