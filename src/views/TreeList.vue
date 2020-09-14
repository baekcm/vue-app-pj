<template>
    <div>
        <li>
            <div
                :class="{bold: isFolder}"
                @click="toggle"
                >
                {{ item.name }}
                <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
            </div>
            <ul v-show="isOpen" v-if="isFolder">
                <tree-item
                    class="item"
                    v-for="(child, index) in item.children"
                    :key="index"
                    :item="child"
                    @make-folder="$emit('make-folder', $event)"
                    @add-item="$emit('add-item', $event)"
                ></tree-item>
                <li class="add" @click="$emit('add-item', item)">+</li>
            </ul>
        </li>
    </div>
</template>

<script>
    export default {
        props: {
            item: Object
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
                    //Vue.set(this.item, 'children', [])
                    this.addChild()
                    this.open = true
                }
            }
        },
        computed: {
            isFolder() {
                return this.item.children && this.item.children.length
            }
        },
        mounted() {
            console.log('item', this.item);
        }
    }
</script>