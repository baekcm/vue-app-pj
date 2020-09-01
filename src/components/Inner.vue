<template>
    <div>
        <p>{{ innerText }}</p>
        <br>
        <button @click="changeMessage">Change Message</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                innerText: 'Home.vue Page Inner Page!!!'
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