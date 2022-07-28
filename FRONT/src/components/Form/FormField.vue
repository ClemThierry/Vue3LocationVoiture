<template>
<input :type="type" autocomplete="off" :class="classes" data-testid="google-map-input" :name="name" :placeholder="placeholder" value="">
</template>

<script>
export default {
  name: 'FormField',
  props: {
    placeholder: String,
    type: String,
    name: String,
    classes: String,
  },
  data () {
    return {
    }
  },
  methods: {
  },
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
