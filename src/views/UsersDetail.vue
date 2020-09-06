<template>
    <div>
        <h1>UsersDetail Page</h1>
        <p>유저 번호 : {{ userId }}</p>
        <button @click="editUser">수정</button>
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
                return this.$route.params.id
            }
        },
        methods: {
            editUser() {
                this.$router.push({name: 'users-edit'});
            }
        },
    }
</script>