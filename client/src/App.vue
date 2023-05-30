<template>
  <HeaderBar />
  <div class="golf-score">
    <!-- <h1>Sloppy Golf</h1> -->
    <!-- <img class="golfLogo" alt="Golf logo" src="./assets/golf.png"> -->
    <br />
  <PostComponent />
  </div>
</template>

<script>
import PostComponent from './components/PostComponent.vue';
import HeaderBar from './components/HeaderBar.vue';

export default {
  name: 'App',
  components: {
    PostComponent,
    HeaderBar
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
}

body{
  background: linear-gradient(268deg, #c3c4c4, #f3f3f3);
}

.golfLogo {
  max-width: 20vh;
}

</style>
