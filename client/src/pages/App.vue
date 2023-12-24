<template>
  <HeaderBar />
  <br>
  <br>
  <br>
  <br>
  <router-view />
  <br>
  <br>
  <Footer />
</template>
  
<script>
import HeaderBar from '../components/HeaderBar.vue';
import Footer from '../components/Footer.vue';


export default {
  name: 'App',
  components: {
    HeaderBar,
    Footer
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

body {
  background: linear-gradient(268deg, #c3c4c4, #f3f3f3);
}

.golfLogo {
  max-width: 20vh;
}
</style>