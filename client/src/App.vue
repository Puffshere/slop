<template>
  <div class="golf-score">
    <h1>Sloppy Golf</h1>
    <img class="golfLogo" alt="Golf logo" src="./assets/golf.png">
  <PostComponent />
  </div>
</template>

<script>
import PostComponent from './components/PostComponent.vue';

export default {
  name: 'App',
  components: {
    PostComponent
}
}
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

body{
  background-color: rgb(226, 225, 225);
}

.golfLogo {
  max-width: 20vh;
}

</style>
