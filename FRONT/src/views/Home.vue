<template>
  <div class="home">
    <h1>Accueil</h1>
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
  </div>
</template>

<script>
// @ is an alias to /src
import LocationForm from '../components/Form/LocationForm.vue'
export default {
  name: 'Home',
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
      this.cars = []
      this.cars = cars
      console.log(this.cars)
    }
    
  }
}
</script>

<style>
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