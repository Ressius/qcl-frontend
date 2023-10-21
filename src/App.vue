<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap" rel="stylesheet"> 
    <img alt="Vue logo" class="logo" src="@/assets/organisateur.png" width="60" height="60" />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/stream">Stream</RouterLink>
      <RouterLink to="/equipe">Équipe</RouterLink>
      <RouterLink to="/franchises">Franchises</RouterLink>
    </nav>
    <div class="fade"></div>
  </header>

  <RouterView />
  <footer>
    <div class="footer">
    <div class="row">
      <a href="https://www.twitch.tv/naniqc_"><i class="fa fa-brands fa-twitch"></i></a>
      <a href="https://discord.gg/sgGXF8pZ9G"><i class="fa fa-brands fa-discord"></i></a>
      <a href="https://www.youtube.com/@QCLigue"><i class="fa fa-brands fa-youtube"></i></a>
      <a href="https://twitter.com/qclontop"><i class="fa fa-brands fa-twitter"></i></a>
    </div>

    <div class="row">
        <ul>
          <li><a href="#">Contactez Nous</a></li>
          <li><a href="#">Nos Services</a></li>
          <li><a href="#">Politiques</a></li>
          <li><a href="#">Termes et conditions</a></li>
          <li><a href="#">Carières</a></li>
        </ul>
    </div>

    <div class="row">
      QCL Copyright © 2023 Quebec Champions League - Tout droits réservés || Conçu par Anthony Dumulong
    </div>
  </div>
</footer>
</template>

<style scoped>
header {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  line-height: 1.5;
  height: 80px;
  width: 100%;
  background-color: #111;
}

.logo {
  left: 75px;
  top: 10px;
  position: absolute;
}

.fade{
  position: fixed;
  top: 80px;
}

nav {
  display: block;
  font-size: 20px;
  text-align: left;
  margin-top: 1.7rem;
  margin-left: 175px;
}

nav a.router-link-exact-active {
  color: white;
  border-bottom: 1px solid white;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  margin: 0 1rem;
  border-bottom: 1px solid var(--color-border);
}

body{
margin:0;
overflow-x:hidden;
}

footer{
  padding:30px 0px;
  font-family: 'Play', sans-serif;
  text-align:center;
  position: absolute;
  width: 100%;
  height: 2.5rem;
  width: 100%;
}

.footer .row{
width:100%;
margin:1% 0%;
padding:0.6% 0%;
color:gray;
font-size:0.8em;
}

.footer .row a{
text-decoration:none;
color:gray;
transition:0.5s;
}

.footer .row a:hover{
color:#fff;
}

.footer .row ul{
width:100%;
}

.footer .row ul li{
display:inline-block;
margin:0px 30px;
}

.footer .row a i{
font-size:2em;
margin:0% 1%;
}

@media (max-width:720px){
.footer{
text-align:left;
padding:5%;
}
.footer .row ul li{
display:block;
margin:10px 0px;
text-align:left;
}
.footer .row a i{
margin:0% 3%;
}
}

</style>
