<template>
  <div class="hello">
    <img src="../assets/logo.png" alt="Forensic Deep Learning">
    <a href='./#/login'><button v-ripple class="button buttonBlue">Login</button></a>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Forensics Deep Learning',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
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
  color: #35495E;
}
</style>
