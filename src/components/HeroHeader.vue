<script setup>
</script>

<template>
  <div class="greetings">
    <img class="title" src="./../assets/qcl.png" />
    <h1>QUEBEC CHAMPIONS LEAGUE</h1>
    <div id="arrow" class="arrow bounce">
      <div class="img"></div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: white;
  font-size: 4.5rem;
  position: relative;
  top: 0;
  font-family: "GeneralSansBold";
  text-align: center;
  width: 60%;
  line-height: 1.1;
  margin: auto;
  -webkit-text-stroke: 2px black;
}

.greetings{
  padding-top: 100px;
  background-image: url('./../assets/img/homebaron.png');
  padding-bottom: 35vh;
  background-attachment: fixed;
}

.title {
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 0;
  width: 50vh;
}

h3{
  color: white;
  font-family: "GeneralSansSemiBold";
  position: relative;
  text-align: center;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
  font-size: 1.2rem;
}

a { 
  color: white; 
  text-decoration: none; 
}
.arrow {
  position: absolute;
  left: 50%;
  bottom: 50px;
}
.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

.img{
  background-image: url('../assets/chevron.png');
  width: 25px;
  height: 15px;
  background-size: cover;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}


</style>
