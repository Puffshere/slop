<template>
  <div class="container">
    <img class="flex banner" src="../assets/Congrats_banner.png">
    <div class="champs">Shawn/Jackson</div>
    <div class="champions">2023 CHAMPIONS!</div>
  </div>
</template>
  
<script>

export default {

};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: 0 auto;
  Padding-top: 20px;
  box-shadow: 5px 5px 15px black;
}

.banner {
  max-width: 100%;
  margin: 0 auto;
}

.champs {
  margin-top: -230px;
  font-size: 80px;
}

.champions {
  margin-top: 0px;
  font-size: 80px;
  padding-bottom: 15px;
  color: rgb(131, 112, 4);
}

@media screen and (max-width: 1280px) {
  .champs {
    margin-top: -175px;
    font-size: 60px;
  }
  
  .champions {
    margin-top: 0px;
    font-size: 60px;
    padding-bottom: 15px;
    color: rgb(131, 112, 4);
  }
}

@media screen and (max-width: 1030px) {
  .champs {
    margin-top: -140px;
    font-size: 50px;
  }
  
  .champions {
    margin-top: 0px;
    font-size: 60px;
    padding-bottom: 15px;
    color: rgb(131, 112, 4);
  }
}

@media screen and (max-width: 780px) {
  .champs {
    margin-top: -120px;
    font-size: 40px;
  }
  
  .champions {
    margin-top: 0px;
    font-size: 40px;
    padding-bottom: 15px;
    color: rgb(131, 112, 4);
  }
}

@media screen and (max-width: 630px) {
  .champs {
    margin-top: -100px;
    font-size: 30px;
  }
  
  .champions {
    margin-top: 0px;
    font-size: 30px;
    padding-bottom: 15px;
    color: rgb(131, 112, 4);
  }
}

@media screen and (max-width: 575px) {
  .champs {
    margin-top: -75px;
    font-size: 25px;
  }
  
  .champions {
    margin-top: 0px;
    font-size: 25px;
    padding-bottom: 15px;
    color: rgb(131, 112, 4);
  }
}

@media screen and (max-width: 400px) {
  .champs {
    margin-top: -65px;
    font-size: 20px;
  }
  
  .champions {
    margin-top: 0px;
    font-size: 25px;
    padding-bottom: 15px;
    color: rgb(131, 112, 4);
  }
}

@media screen and (max-width: 375px) {
  .champs {
    margin-top: -50px;
    font-size: 18px;
  }
  
  .champions {
    margin-top: 0px;
    font-size: 20px;
    padding-bottom: 15px;
    color: rgb(131, 112, 4);
  }
}

</style>