<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <HeaderNav/>
  </div>
  <router-view/>
</template>

<script>
import HeaderNav from './components/molecules/HeaderNav.vue'

export default {
  name: 'App',
  components: {
    HeaderNav
  },
  methods:{
    showMenu : function (id) {
        document.querySelector(id).classList.toggle("hidden");
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

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
