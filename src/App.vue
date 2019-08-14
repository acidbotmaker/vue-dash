<template>
  <div id="app">
    <MainSidebar />
    <Room />
  </div>
</template>

<script>
import MainSidebar from "./components/MainSidebar";
import Room from "./components/Room";
export default {
  name: "app",
  components: {
    MainSidebar,
    Room
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
