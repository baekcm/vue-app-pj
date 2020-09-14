<template>
    <div>
        <ul>
            {{ model.name }}
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            model: Object
        },
        data() {
            return {
                open: false,
            }
        },
        methods: {
            toggle() {
                if (this.isFolder) {
                    this.open = !this.open
                }
            },
            changeType() {
                if (!this.isFolder) {
                    //Vue.set(this.model, 'children', [])
                    this.addChild()
                    this.open = true
                }
            },
            addChild() {
                this.model.children.push({
                    name: 'new stuff'
                })
            }
        },
        computed: {
            isFolder() {
                return this.model.children && this.model.children.length
            }
        },
        mounted() {
            console.log('model', this.model);
        }
    }
</script>