<template>
  <div id="app">
    <FirebaseForm />
  </div>
</template>

<script>
import FirebaseForm from "./components/FirebaseForm.vue";
export default {
  name: "App",
  components: {
    FirebaseForm
  },
  mounted() {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
