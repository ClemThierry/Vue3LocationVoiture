<template>


  <LocationForm  v-on:SendCarsListResultFromForm="DisplayCarsListResult"/>
  <ul v-if="cars != {}" class="display-result">
      <li class="text-pink-500" v-for="car in cars" :key="car.id">
        <img :src="car.attributes.Picture.data.attributes.caption" alt="">
        <span>{{ car.attributes.Brand }} {{ car.attributes.Model }}</span>
      </li>
  </ul>
  <span v-else>
    No Result
  </span>

  
</template>

<script>

import LocationForm from './components/Form/LocationForm.vue'
export default {
  name: 'App',
  components: {
    LocationForm,
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
  margin-top: 60px;
  display:flex;
  flex-direction: column;
  align-items:center;
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
</style>
