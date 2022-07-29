<template>
    <button class="submit_button" v-on:click="getCarsFromAPI">{{action}}</button>
</template>

<script>
import {useModelWrapper} from './modelWrapper.js'
export default {
  name: 'SubmitButton',
  props: {
    action: String,
    data : Array,
  },
  data () {
    return {
      cars: [],
      error: null,
      headers: {'Content-Type': 'application/json'},
    }
  },
  setup(props, {emit}){
    return{
      formData: useModelWrapper(props, emit, 'data')
    }
  },
  methods: {
    parseJSON: function (resp) {
      return (resp.json ? resp.json() : resp);
    },

    checkStatus: function (resp) {
      if (resp.status >= 200 && resp.status < 300) {
        return resp;
      }
      return this.parseJSON(resp).then((resp) => {
        throw resp;
      });
    },
    DeleteCentreNullFromCarsList : function(carsList){
      carsList.forEach(function callback(car, index){
        if(car.attributes.Centre.data == null ){
          carsList.splice(index,1)
        }
      })
    },
    getCarsFromAPI : async function(){
        try {
            console.log(this.formData)
            if(this.formData[1].places == ""){this.formData[1].places = "15"}
            console.log(this.formData[1].places)
            const qs = require('qs')
            const query = qs.stringify({
                populate:{
                      Centre : {
                        filters:{
                          name:{
                            $eq: this.formData[0].centre
                          }
                        }
                      },
                      Picture : {
                        fields: ['caption']
                      }
                  },
                filters : {
                    Seat:{
                        $gte: parseInt(this.formData[1].places,10),
                    },
                }
            },
            {encodeValuesOnly: true,});
            //http://localhost:1337/api/cars?token=2772d6f252d7750e118ba966945dbefdc23670562adf9817f342ba98a1dad99ddd3fe85c2537a7afa8c98330a2f7f587e8c7676b4cfd7a9afb0fd659f1d05312fec330d6c58c98e09a7d5fa5d6745d79d3045686d43b6e21d94bb873c01968dff08d1b6680e71bb65d2c771d71b72fc591384bae1ac549817dff13439e0743f9&populate[Centre][filters][name][$eq]=Paris
            const secret_token = "b5e2182ad1c682bdb888b3b009207b6071eaca0fa9e426a96da8dcaf95936c0446d4e5a807f422aa5eae25b4a3cf07695ade8bef6aeaef0a28da90116dead22812cd71724d835664f7632f56e7e5a80951d6a7ee49f18f2c7764802c0493f08f37b3167a5c26796430f5e2b885b68054bf6bbb1c8b6fef68cc3a5c9eac2d132f"
            const response = await fetch(`http://localhost:1337/api/cars?token=${secret_token}&${query}`, {
                method: 'GET',
                headers: this.headers,
            }).then(this.checkStatus)
                .then(this.parseJSON);

            this.cars = response.data
            this.DeleteCentreNullFromCarsList(this.cars)
            console.log(this.cars)
            this.$emit("CarsListResult", this.cars)
            this.formData = null
            this.cars = []
        } catch (error) {
            this.error = error
        }
    },
    
  },
}
</script>
  

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.submit_button{
    height: 60px;
    padding: 0 12px;
    padding: 1vh 3vw;
    /* width: 100%; */
    background-color: #00716b;
    margin: 1vh 1vw;
    color:white;
    margin-left: 3vw !important;
    border-radius: 3px;
}
</style>