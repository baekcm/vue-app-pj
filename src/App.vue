<template>
  <div id="app">
    <header-app />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <!-- <router-link to="/users">Users</router-link> -->

      <!-- 아래의 방식은 parameter 를 객체로 만들어서 전달한다. -->
      <router-link :to="{ name: 'users', params: { userId: 12345, userName: 'baekcm' } }">Users</router-link>
    </div>
    <router-view />
    <footer-app />
  </div>
</template>

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
