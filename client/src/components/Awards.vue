<template>
<div class="container">
<img class="flex banner" src="../assets/Congrats_banner.png">
<div class="champs">Shawn/Jackson</div>
<div class="champions">2023 CHAMPIONS!</div>
</div>
</template>
  
<script>


export default {
  data() {
    return {
      
    };
  },
  async created() {
 
  },
  methods: {
   
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  margin: 0 auto;
  Padding-top: 20px;  
  box-shadow: 5px 5px 15px black;
}

.champs {
  margin-top: -30px;
  font-size: 20px;
}
.champions {
  margin-top: 0px;
  font-size: 20px;
  padding-bottom: 15px;
  color: rgb(131, 112, 4);
}

</style>