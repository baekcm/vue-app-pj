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

      <router-link to="/all-users">AllUsers</router-link> |

      <router-link to="/tree">TreeList</router-link> |

      <router-link to="/treeview">TreeView</router-link> |

      <router-link to="/treeviewtwo">TreeViewTwo</router-link>

      <!--
      <template>
          <v-treeview
              v-model="tree"
              :open="open"
              :items="items"
              activatable
              item-key="name"
              open-on-click
          >
          <template v-slot:prepend="{ item, open }">
              <v-icon v-if="!item.file">
                  {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
              </v-icon>
              <v-icon v-else>
                  {{ files[item.file] }}
              </v-icon>
          </template>
        </v-treeview>
    </template>
    -->

    </div>
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
/*
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
*/

export default {
  name: 'app',
  data () {
    return {
      open: ['public'],
      files: {
        html: 'mdi-language-html5',
        js: 'mdi-nodejs',
        json: 'mdi-json',
        md: 'mdi-markdown',
        pdf: 'mdi-file-pdf',
        png: 'mdi-file-image',
        txt: 'mdi-file-document-outline',
        xls: 'mdi-file-excel'
      },
      tree: [],
      items: [
        {
          id: 1,
          name: 'Applications :',
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' }
          ]
        },
        {
          id: 5,
          name: 'Documents :',
          children: [
            {
              id: 6,
              name: 'vuetify :',
              children: [
                {
                  id: 7,
                  name: 'src :',
                  children: [
                    { id: 8, name: 'index : ts' },
                    { id: 9, name: 'bootstrap : ts' }
                  ]
                }
              ]
            },
            {
              id: 10,
              name: 'material2 :',
              children: [
                {
                  id: 11,
                  name: 'src :',
                  children: [
                    { id: 12, name: 'v-btn : ts' },
                    { id: 13, name: 'v-card : ts' },
                    { id: 14, name: 'v-window : ts' }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 15,
          name: 'Downloads :',
          children: [
            { id: 16, name: 'October : pdf' },
            { id: 17, name: 'November : pdf' },
            { id: 18, name: 'Tutorial : html' }
          ]
        },
        {
          id: 19,
          name: 'Videos :',
          children: [
            {
              id: 20,
              name: 'Tutorials :',
              children: [
                { id: 21, name: 'Basic layouts : mp4' },
                { id: 22, name: 'Advanced techniques : mp4' },
                { id: 23, name: 'All about app : dir' }
              ]
            },
            { id: 24, name: 'Intro : mov' },
            { id: 25, name: 'Conference introduction : avi' }
          ]
        }
      ]
    }
  },
  computed: {
    filter () {
      return this.caseSensitive
        ? (item, search, textKey) => item[textKey].indexOf(search) > -1
        : undefined
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
