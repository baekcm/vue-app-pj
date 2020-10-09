<template>
    <div class="users">
        <h1>Users 추가하기</h1>
        <form>
            <input type="text" name="" id="" v-model="userId" />
        </form>
        <button @click="signUp()">추가</button>
    </div>
</template>

<script>
//--- mapMutations 을 사용하지 않고, 직접적으로 store 에서 'commit' 을 통해 처리하기 위해 주석.
//import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            userId : null
        }
    },
    computed: {
    },
    methods: {
        //--- mapMutations 을 사용하지 않고, 직접적으로 store 에서 'commit' 을 통해 처리하기 위해 주석.
        //...mapMutations(['addUsers']),
        signUp() {
            let userObj = {
                userId : 'yena99',
                password : '1234',
                name : '예나',
                address : 'Seoul',
                src : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F311%2F2020%2F06%2F24%2F0001166434_001_20200624225107369.jpg&type=sc960_832'
            }
            //--- mapMutations 을 사용하지 않고, 직접적으로 store 에서 'commit' 을 통해 처리하기 위해 주석.
            //this.addUsers(userObj)

            //--- store 에서 mutation 을 실행시킬 때에는 'commit' 을 사용하여 함수를 실행해야 한다.
            //--- this.$store.commit('mutations 내의 실행할 함수명', payload)
            //--- actions 사용을 위해 'commit' 직접 사용을 주석 처리한다.
            //this.$store.commit('addUsers', userObj)

            //--- store 에서 action 을 실행시킬 때에는 'dispatch' 을 사용하여 함수를 실행해야 한다.
            //--- this.$store.dispatch('actions 내의 실행할 함수명', payload)
            this.$store.dispatch('addUsers', userObj)
            userObj = {}
        },
    },
    created() {
    }
}    
</script>

<style scoped>
    
</style>