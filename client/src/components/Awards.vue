<template>
  <br>
  <div class="container">
    <img class="flex banner" src="../assets/Congrats_banner.webp" alt="congrats banner image">
    <div class="champs">Shawn/Jackson</div>
    <div class="champions">2023 CHAMPIONS!</div>
  </div>
</template>
  

<style scoped>
.container {
  margin: 0 auto;
  Padding-top: 20px;
  box-shadow: 5px 5px 30px black;
}

.banner {
  max-width: 100%;
  margin: 0 auto;
}

.champs {
  margin-top: -170px;
  font-size: 70px;
}

.champions {
  margin-top: 0px;
  font-size: 90px;
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
  }
}

@media screen and (max-width: 1030px) {
  .champs {
    margin-top: -110px;
    font-size: 50px;
  }

  .champions {
    margin-top: 0px;
    font-size: 60px;
    padding-bottom: 15px;
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
  }
}

@media screen and (max-width: 575px) {
  .champs {
    margin-top: -60px;
    font-size: 25px;
  }

  .champions {
    margin-top: 0px;
    font-size: 25px;
    padding-bottom: 15px;
  }
}

@media screen and (max-width: 400px) {
  .champs {
    margin-top: -40x;
    font-size: 20px;
  }

  .champions {
    margin-top: 0px;
    font-size: 25px;
    padding-bottom: 15px;
  }
}

@media screen and (max-width: 375px) {
  .champs {
    margin-top: -35px;
    font-size: 18px;
  }

  .champions {
    margin-top: 0px;
    font-size: 20px;
    padding-bottom: 15px;
  }
}
</style>