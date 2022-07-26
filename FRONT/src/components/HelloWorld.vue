<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if="error">
      {{ error }}
    </div>
    <ul v-else>
      <li class="text-pink-500" v-for="car in cars" :key="car.id">
        {{ car.attributes.Model }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      cars: [],
      error: null,
      headers: {'Content-Type': 'application/json'}
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
      const response = await fetch("http://localhost:1337/api/cars", {
        method: 'GET',
        headers: this.headers,
      }).then(this.checkStatus)
        .then(this.parseJSON);
      this.cars = response.data
      console.log(response.data)
    } catch (error) {
      this.error = error
    }
  }
}
</script>
  

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
