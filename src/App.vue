<template>
  <div id="app">
    <BaseviewVue />
  </div>
</template>

<script>
import BaseviewVue from "./components/baseview.vue";

export default {
  name: "App",
  components: {
    BaseviewVue,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");
#app {
  font-family: "Open Sans", sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
