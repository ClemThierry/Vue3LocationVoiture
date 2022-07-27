<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <HeaderNav/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import HeaderNav from './components/molecules/HeaderNav.vue'
import Footer from './components/orgamisms/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderNav,
    Footer
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
</style>
