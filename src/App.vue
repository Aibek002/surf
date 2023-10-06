<template>
  <div id="app">
    <!-- Your navigation links -->
    <router-link to="/"></router-link>
    <router-link to="/about"></router-link>

    <!-- Display the routed component -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body{
  margin: 0;
}
/* Your CSS styles for the App component */
</style>
