<template>
    <div>
        <ul id="demo">
          <TreeList
              class="item"
              :item="treeData"
          ></TreeList>
        </ul>
    </div>
</template>

<script>
//import TreeList from '../TreeList.vue';
import TreeList from '@/views/TreeList.vue';

export default {
    //--- components object 내에 TreeList 를 넣어 자식 component 로 사용한다.
    components: {
        TreeList
    },
    data() {
        return {
            treeData : {
                children: [
                    { name: 'hello' },
                    { name: 'wat' },
                    {
                    name: 'child folder',
                    children: [
                        {
                        name: 'child folder',
                        children: [
                            { name: 'hello' },
                            { name: 'wat' }
                        ]
                        },
                        { name: 'hello' },
                        { name: 'wat' },
                        {
                        name: 'child folder',
                        children: [
                            { name: 'hello' },
                            { name: 'wat' }
                        ]
                        }
                    ]
                }
            ]
            }
        }
    }
}
</script>

<style scoped>
* {
  font-family: 'Noto Sans KR', Helvetica, Arial, sans-serif;
}

html,
body {
  background-color: #333;
  font-size: 16px;
  color: #fff;
}

a {
  color: #aaf;
}

input,
textarea,
button {
  margin: 0;
  padding: 0;
  background-color: #eee;
  color: #000;
  border: 0;
  min-width: 32px;
  min-height: 32px;
}

.links-others {
  position: fixed;
  left: 0;
  bottom: 0;
  margin: 10px;
  padding: 10px;
  background-color: #000;
  border-radius: 5px;
  transition: all .2s;
  opacity: .5;
}

.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>