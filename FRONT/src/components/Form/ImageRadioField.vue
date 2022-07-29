<template>
  <ul class="w-1/2 flex flex-row justify-around">
    <li v-for="category in categories" :key="category.id" >
        <img src="" alt=""/>
        <label :for="category.id">
          {{category.attributes.name}}
        </label>
        <FormField  type="radio" classes="form-input" :value="category.attributes.name" v-model:selection="selectedProp" />
    </li>
  </ul>
    
  <!-- <input :type="type" autocomplete="off" :class="classes" data-testid="google-map-input" :name="name" :placeholder="placeholder" value=""> -->
</template>

<script>
import FormField from './FormField.vue'
export default {
  name: 'ImageRadioField',
  props: {
    placeholder: String,
  },
  components:{
    FormField,
  },
  data () {
    return {
      categories: [],
      error: null,
      headers: {'Content-Type': 'application/json'},
      selectedProp:""
    }
  },
  watch:{
    //whenever selectedProp change this function is triggered
    selectedProp(newSelection){      
        console.log(newSelection)
        this.$emit("SendRadioInputChoice", newSelection)     
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
  },
  async mounted () {
    try {
          const secret_token = "b5e2182ad1c682bdb888b3b009207b6071eaca0fa9e426a96da8dcaf95936c0446d4e5a807f422aa5eae25b4a3cf07695ade8bef6aeaef0a28da90116dead22812cd71724d835664f7632f56e7e5a80951d6a7ee49f18f2c7764802c0493f08f37b3167a5c26796430f5e2b885b68054bf6bbb1c8b6fef68cc3a5c9eac2d132f"
          const categories = await fetch("http://localhost:1337/api/categories?token=" + secret_token, {
          method: 'GET',
          headers: this.headers,
        }).then(this.checkStatus)
          .then(this.parseJSON);
        
      
        this.categories = categories.data
        console.log(categories.data)
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
