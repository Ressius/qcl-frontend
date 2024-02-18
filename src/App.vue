<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <title>QCL - Quebec Champions League</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap" rel="stylesheet"> 
    <a class="logo">QCL</a>
    <nav>
      <RouterLink to="/">Acceuil</RouterLink>
      <RouterLink to="/franchises">Franchises</RouterLink>
      <RouterLink to="/equipe">L'équipe</RouterLink>
      <RouterLink to="/horaire">Horaire</RouterLink>
      <RouterLink to="/stats">Statistiques</RouterLink>
    </nav>
  </header>

  <RouterView />
  <footer>
    <div class="footer">
    <div class="row">
      <a href="https://www.twitch.tv/naniqc_"><i class="fa fa-brands fa-twitch"></i></a>
      <a href="https://discord.gg/qcl"><i class="fa fa-brands fa-discord"></i></a>
      <a href="https://www.youtube.com/@QCLigue"><i class="fa fa-brands fa-youtube"></i></a>
      <a href="https://twitter.com/qclontop"><i class="fa fa-brands fa-x-twitter"></i></a>
    </div>

    <div class="row">
        <ul>
          <li><a href="/">Acceuil</a></li>
          <li><a href="/franchises">Franchises</a></li>
          <li><a href="#">L'équipe</a></li>
          <li><a href="#">Horaire</a></li>
          <li><a href="#">Statistiques</a></li>
        </ul>
    </div>

    <div class="row">
      QCL Copyright © 2024 Quebec Champions League - Tout droits réservés || Conçu par Anthony Dumulong
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
  top: 5px;
  position: absolute;
  color: white;
  font-size: 40px;
  font-family: "GeneralSansSemiBold";
}

.fade{
  position: fixed;
  top: 80px;
}

nav {
  border-left: 1px solid white;
  display: block;
  font-size: 18px;
  padding: 5px;
  text-align: left;
  margin-top: 1.4rem;
  margin-left: 200px;
}

nav a.router-link-exact-active {
  color: white;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  margin: 0 1rem;
}

body{
margin:0;
overflow-x:hidden;
}

footer{
  padding:30px 0px;
  font-family: 'GeneralSans', sans-serif;
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
font-size: 16px;
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
font-size:1.1em;
background-color: #0039D2;
color: white;
padding: 15px;
border-radius: 35px;
margin:0% 1%;
}
.footer .row a i:hover{
  transition: 0.5s;
  background-color: white;
  color: black;
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
