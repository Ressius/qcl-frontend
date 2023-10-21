<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="video">
    <div class="back"></div>
    <video autoplay preload="true" muted="" loop="" playsinline="" type="video/mp4">
      <source src="https://cdn.discordapp.com/attachments/1081710200815370250/1152084968500109343/y2mate.is_-_Our_Game_League_of_Legends-j5QahFFHv0I-1080pp-1694748841.mp4" type="video/mp4">
    </video>
  </div>
  <div class="greetings">
    <img class="title" src="./../assets/qcl.png" />
    <h3>Ligue amateure Québecoise de League of Legends</h3>
  </div>
</template>

<style scoped>
h1 {
  z-index: 2;
  font-weight: 500;
  font-size: 10rem;
  position: relative;
  top: 0;
  font-family: "MASQUE";
  text-align: center;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

.greetings{
  margin-top: 100px;
}

.title {
  display: block;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
  position: relative;
  top: 0;
  width: 15vw;
}

h3{
  z-index: 2;
  color: white;
  font-family: "MASQUE";
  font-weight: 300;
  position: relative;
  text-align: center;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

.video{
  text-align: center;
  position: absolute;
  top: -60px;
  left: 0;
}

.video .back{
  position: absolute;
  width: 100%;
  height: 75%;
  z-index: 1;
  background-color: #0037eb;
  opacity: 0.2;
}

.video video{
  display: block;
  width: 99vw;
}

h3 {
  font-size: 1.2rem;
}


</style>
