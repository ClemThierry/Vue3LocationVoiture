<template>
  <div id="app" class="page">
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
  },
  data () {
    return {
      cars: {},
    }
  },
  methods:{
    DisplayCarsListResult: function(cars){
      this.cars = cars
      console.log(this.cars)
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
  height:100vh;
}

.page{
  display:flex;
  flex-direction: column;
  justify-content: space-between;
}
.display-result{
  display:flex;
  justify-content:center;
}

.display-result li{
  display:flex;
  align-items:center; 
  width:100%;
  padding: 1vh 3vw;
  box-shadow: 4px 4px 4px rgba(0,0,0,.2);
}

.display-result li img{
  height: 15vh;
  /* margin-right:10vw; */
}

.display-result li span{
  width:100%;
  display:flex;
  align-items: center;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
