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
    <h1>{{ msg }}</h1>
    <div class="fade"></div>
  </div>
</template>

<style scoped>
h1 {
  color: white;
  font-size: 3rem;
  position: relative;
  top: 0;
  font-family: "GeneralSansBold";
  text-align: center;
  text-transform: uppercase;
  width: 40%;
  line-height: 1.1;
  margin: auto;
  margin-top: 80px;
  -webkit-text-stroke: 2px black;
}

.greetings{
  padding-top: 100px;
  background-image: url('./../assets/img/backhome.png');
  padding-bottom: 15vh;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
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

.fade{
  background: linear-gradient(to bottom, rgba(0, 57, 210, 0), rgba(0, 57, 210, 1));
  position: absolute;
  bottom: 0;
  height: 10vh;
  margin-top: -30vh;
  width: 100%;
}

@media (max-width:1000px){
  .greetings{
    background-repeat: repeat;
    background-size: auto;
    background-position: center;
  }
}

</style>
