<template>
<select :id="id" v-model="selectedProp" :name="name" class="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected value="">{{placeholder}}</option>
  <option v-for="centre in centres" :key="centre.id" :value="centre.attributes.name">{{centre.attributes.name}}</option>
</select>
{{selectedProp}}
</template>

<script>
import {useModelWrapper} from './modelWrapper.js'
export default {
  name: 'SelectField',
  props: {
    placeholder: String,
    id: String,
    name: String,
    classes: String,
    selection: String,
  },
  data () {
    return {
      centres: [],
      error: null,
      headers: {'Content-Type': 'application/json'},
      maxPlaces:15,
      // selectedProp: "",
    }
  },
  setup(props, {emit}){
    return{
      selectedProp: useModelWrapper(props, emit, 'selection')
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
    }
  },
  async mounted () {
    try {
      if(this.name == 'centre'){
          const secret_token = "b5e2182ad1c682bdb888b3b009207b6071eaca0fa9e426a96da8dcaf95936c0446d4e5a807f422aa5eae25b4a3cf07695ade8bef6aeaef0a28da90116dead22812cd71724d835664f7632f56e7e5a80951d6a7ee49f18f2c7764802c0493f08f37b3167a5c26796430f5e2b885b68054bf6bbb1c8b6fef68cc3a5c9eac2d132f"
          const centres = await fetch("http://localhost:1337/api/centres?token=" + secret_token, {
          method: 'GET',
          headers: this.headers,
        }).then(this.checkStatus)
          .then(this.parseJSON);
        
      
        this.centres = centres.data
        console.log(centres.data)
      }else if(this.name == 'places'){
        let places = []
        console.log(this.maxPlaces)
        let range = [...Array(this.maxPlaces).keys()]
        range.shift()
        
        console.log(range)
        range.forEach(function(key){
          places.push({'attributes':{'name':key.toString()}})
        })
        this.centres = places
        console.log("centres = ", this.centres)
      }
    } catch (error) {
      this.error = error
    }
  }
}
</script>
  

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-input{
    display: flex;
    align-items: center;
    border: 1px solid #e1dada;
    height: 60px;

    padding: 0 12px;
    /* padding-right: 40px !important; */
    padding-left: 20px !important;
    border-radius: 3px;
    color: #565a5c;
    background-color: #fff;
    margin:1vh 1vw;
}

</style>
