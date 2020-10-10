<template>
  <div id="app">

    <header-app />
      
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <!-- <router-link to="/users">Users</router-link> -->

      <!-- 아래의 방식은 parameter 를 객체로 만들어서 전달한다. -->
      <!-- Users 하위 경로에서만 router-viuw 를 사용할 목적인 테스트를 위해 주석. -->
      <!-- <router-link :to="{ name: 'users', params: { userId: 12345, userName: 'baekcm' }, query: { group: 'member', category: 'trial' } }">Users</router-link> -->

      <router-link :to="{ name: 'users' }">Users</router-link> | 

      <router-link to="/all-users">AllUsers</router-link> |

      <router-link to="/add-user">AddUser</router-link>

    <router-view />

    <!-- 
    <h1>Tree</h1>
    <ul is="tree" :data="treeData">
      <li slot-scope="{ item }">
        <button @click="$set(item,'showChildren',!item.showChildren)">+/-</button>
        <span>{{item.name}}</span>
        <ul is="childTree" :data="item.children" v-show="item.showChildren" />
      </li>
    </ul>
     -->

    <footer-app />

  </div>
  
</template>

<script>
//--- $ npm install array-to-tree --save
//--- https://www.npmjs.com/package/array-to-tree

//var arrayToTree = require('array-to-tree');
import arrayToTree from "array-to-tree"
//import { mapMutations } from 'vuex';

var dataOne = [
  {
    id: 1,
    name: 'Portfolio',
    parent_id: undefined
  },
  {
    id: 2,
    name: 'Web Development',
    parent_id: 1
  },
  {
    id: 3,
    name: 'Recent Works',
    parent_id: 2
  },
  {
    id: 4,
    name: 'About Me',
    parent_id: undefined
  }
];
 
console.log('arrayToTree', arrayToTree(dataOne));


export default {
  name: 'app',
  data () {
    return {
      message : "",
      open: ['public'],
      tree: [],
    }
  },
  methods:{
        testFunction: function () {
            /*
            var v = this;
            setInterval(function () {
                v.message = new Date().toLocaleTimeString();
            }, 3000);
            */

            setInterval( () => {
                window.open("/all-users", "PopupWin", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=700,height=600", true)
            }, 7000);
        }
    },
  computed: {
    filter () {
      return this.caseSensitive
        ? (item, search, textKey) => item[textKey].indexOf(search) > -1
        : undefined
    }
  },
  mounted () {
      //this.testFunction()
  },
  //--- 공통 영역에서 store 팝업 open 방법 1
  created() {
    //this.$store.dispatch('alramCheck')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
