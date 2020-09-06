<template>
    <div>
        <h1>UsersEdit Page</h1>
        <p>유저 번호 : {{ userId }}</p>
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
            
        },
    }
</script>