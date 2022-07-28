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

        const secret_token = "2772d6f252d7750e118ba966945dbefdc23670562adf9817f342ba98a1dad99ddd3fe85c2537a7afa8c98330a2f7f587e8c7676b4cfd7a9afb0fd659f1d05312fec330d6c58c98e09a7d5fa5d6745d79d3045686d43b6e21d94bb873c01968dff08d1b6680e71bb65d2c771d71b72fc591384bae1ac549817dff13439e0743f9"
        const centres = await fetch("http://localhost:1337/api/centres?token=" + secret_token, {
        method: 'GET',
        headers: this.headers,
      }).then(this.checkStatus)
        .then(this.parseJSON);
      this.centres = centres.data
      console.log(centres.data)
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
