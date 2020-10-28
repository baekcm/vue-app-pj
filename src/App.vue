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

      <label>
          <button class="btn btn-primary btn-sm" @click.prevent="playSound('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')"><span class="fa fa-play-circle-o"></span></button>
          Play Air Plane Ding
      </label>

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

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.11.2/lodash.js"></script>

<script>
//--- $ npm install array-to-tree --save
//--- https://www.npmjs.com/package/array-to-tree

//var arrayToTree = require('array-to-tree');
import arrayToTree from "array-to-tree"
//import { mapMutations } from 'vuex';

//import VueLodash from 'vue-lodash'
//import lodash from 'lodash'
import Vue from 'vue'

//Vue.use(VueLodash, { name: 'custom' , lodash: lodash })

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
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
    playSoundTest() {
			const path = './assets/bing.wav';
			const audio = new Audio(path);
			var playPromise = audio.play();

			if (playPromise !== undefined) {
				playPromise.then( () => {
					console.log('Did you hear that?');
				})
				.catch(error => {
					console.log(`playSound error: ${error}`);
				});
			}
		},
    alarmPopup : function() {
      console.log('11111')
      //let width = 700
      //let height = 600
      //let left = (screen.width - width) / 2;
      //let top = (screen.height - height) / 2;
      //window.open("/usersPopup", "PopupWin", `toolbar=yes,scrollbars=yes,resizable=yes,top=${ top },left=${ left },width=${ width },height=${ height }`, true)
      window.open("/usersPopup", "PopupWin", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=100,width=1000,height=700")
    },
    test() {
      console.log(this.lodash.random(20))
      console.log(this._.random(20))
      console.log(this.custom.random(20))
    },
    isArrayEqual() {
      let x = [{a:1, b:2}, {c:3, d:4}]
      let y = [{b:2, a:1}, {d:4, c:3}]
      return _(x).differenceWith(y, _.isEqual).isEmpty();
    }
  },
  beforeCreate() {
    //this.$store.dispatch('alramCheck')
    //this.$store.dispatch('alramPopup')
  },
  computed: {
    filter () {
      return this.caseSensitive
        ? (item, search, textKey) => item[textKey].indexOf(search) > -1
        : undefined
    }
  },
  mounted () {
      //this.playSound('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')
      //this.playSound('http://localhost:8080/shick.mp3')
      this.playSound('http://localhost:8080/bbing.mp3')

      //this.alarmPopup()
      //this.test()
      console.log('equlas', this.isArrayEqual(this.x, this.y))

      const a = [{ answer: 42 }, { powerLevel: 9001 }];
      const b = [{ answer: 42 }, { powerLevel: 9001 }];
      const c = [{ answer: 42 }, { password: 'taco' }];

      console.log('stringify1', JSON.stringify(a) === JSON.stringify(b)) // true
      console.log('stringify2', JSON.stringify(a) === JSON.stringify(c)) // false
  },
  //--- 공통 영역에서 store 팝업 open 방법 1
  created() {
    //this.$store.dispatch('alramCheck')

    //let width = 700
    //let height = 600
    //let left = (screen.width - width) / 2;
    //let top = (screen.height - height) / 2;
    //window.open("/usersPopup", "PopupWin", `toolbar=yes,scrollbars=yes,resizable=yes,top=${ top },left=${ left },width=${ width },height=${ height }`, true)



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
