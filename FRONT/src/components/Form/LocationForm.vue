<template>
  <div class="form">
    <SelectField placeholder="Choose a centre" name="centre" id="centre" v-model:selection="selectedProp.centre" />
    <SelectField placeholder="Nb de places" name="places" id="places" v-model:selection="nb_places_selected.places" />
   
    <!-- <FormField placeholder="Début de location" type="date" name="start_date" v-model="start_date" classes="form-input w-40" /> -->
    <!-- <FormField placeholder="Fin de location" type="date" name="end_date" v-model="end_date" classes="form-input w-40" /> -->
    <!-- <FormField placeholder="Km" type="number" name="distance" v-model="distance" classes="form-input w-24" /> -->
    <SubmitButton action="Rechercher" v-on:CarsListResult="SendCarsListResult" :data="[selectedProp, nb_places_selected]"/>
    {{selectedProp.centre}}
    {{nb_places_selected.places}}
  </div>
</template>

<script>
// import FormField from './FormField.vue'
import SelectField from './SelectField.vue'
import SubmitButton from './SubmitButton.vue'
export default {
  name: 'LocationForm',
  props: {
    msg: String
  },
  components: {
    // FormField,
    SubmitButton,
    SelectField,
  },
  data () {
    return {
      cars: [],
      error: null,
      headers: {'Content-Type': 'application/json'},
      selection: "HEllo",
      start_date: "",
      end_date: "",
      distance: 0,
      selectedProp:{"centre": ""},
      nb_places_selected:{"places":"0"},
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
    SendCarsListResult: function(carsList){
        console.log(carsList)
        this.$emit("SendCarsListResultFromForm", carsList)
    }
  },
}
</script>
  

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 80px;
    width:90%;
    margin: 1vh 1vw;
}
</style>
