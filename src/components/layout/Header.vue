<template>
  <header class="header">
    <h1>Vuedo</h1>
    <router-link to="/">Home</router-link>&nbsp;|&nbsp;
    <router-link to="/about">About</router-link>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  .header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
    margin-bottom: 25px;
  }
  .header a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }
</style>