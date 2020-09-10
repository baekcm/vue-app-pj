<template>
  <div id="app">
    <header-app />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <!-- <router-link to="/users">Users</router-link> -->

      <!-- 아래의 방식은 parameter 를 객체로 만들어서 전달한다. -->
      <!-- Users 하위 경로에서만 router-viuw 를 사용할 목적인 테스트를 위해 주석. -->
      <!-- <router-link :to="{ name: 'users', params: { userId: 12345, userName: 'baekcm' }, query: { group: 'member', category: 'trial' } }">Users</router-link> -->

      <router-link :to="{ name: 'users' }">Users</router-link> | 

      <router-link to="/all-users">AllUsers</router-link>

    </div>
    <router-view />
    <h1 style="textAlign: left">Tree</h1>
    <ul is="tree" :data="treeData" style="textAlign: left">
        <li slot-scope="{ item }">
            <span>{{ item.name }}</span>
            <button @click="$set(item, 'showChildren', !item.showChildren)" style="margin: 5px;">+/-</button>
            <ul is="childTree" :data="item.children" v-show="item.showChildren" />
        </li>
    </ul>
    <footer-app />

  </div>
  
</template>

<script>
//--- $ npm install array-to-tree --save
//--- https://www.npmjs.com/package/array-to-tree
var arrayToTree = require('array-to-tree');

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
 
console.log(arrayToTree(dataOne));

export default {
    name: 'app',
    data () {
        return {
            treeData : [
                { name : 'AAA1', children : [
                    { name : 'AAA1-1', children : [
                      { name : 'AAA1-1-1' },
                      { name : 'AAA1-1-2' }
                    ]},
                  { name : 'AAA1-2' }
                ]},
            { name : 'BBB1' }
          ]
      }
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
