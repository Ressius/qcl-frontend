<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <img class="title" src="./../assets/qcl.png" />
    <h1>QUEBEC CHAMPIONS LEAGUE</h1>
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
}

.video{
  text-align: center;
  left: 0;
}

h3 {
  font-size: 1.2rem;
}


</style>
