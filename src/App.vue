<script setup>
import axios from 'axios'
import { RouterLink, RouterView } from 'vue-router'
import { store } from './store.js'

var tournamentChampions = {}
var tournamentAcademy = {}

axios.get('https://qclservices.azurewebsites.net/tournament/standings/7205060').then(response => {
  store.standingsChampions = response.data
})

axios.get('https://qclservices.azurewebsites.net/tournament/standings/7205065').then(response => {
  store.standingsAcademy = response.data
})

axios.get('https://qclservices.azurewebsites.net/tournament/get/7205060').then(response => {
  tournamentChampions = response.data
  axios.get('https://qclservices.azurewebsites.net/tournament/get/7205065').then(response => {
    tournamentAcademy = response.data

    var franchises = tournamentChampions.franchises

    for (let i = 0; i < tournamentChampions.franchises.length; i++) {
      tournamentChampions.franchises[i].teams.push(tournamentAcademy.franchises[i].teams[0])
    }

    franchises.forEach(f => {
      f.teams.forEach(t => {
        var opgg = ""
        t.players.forEach(p => {
          opgg += (p.opgg.split(',')[0] + ',')
        })
        t.opgg = opgg
      })
    });

    store.franchises = franchises;
  })
})


</script>

<template>
  <header>
    <title>QCL - Quebec Champions League</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap" rel="stylesheet"> 
    <div class="nav-desktop">
      <a class="logo" href="/">QCL</a>
      <nav class="nav1">
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/franchises">Franchises</RouterLink>
        <RouterLink to="/equipe">L'équipe</RouterLink>
        <RouterLink to="/horaire">Horaire</RouterLink>
        <RouterLink to="/classement">Classement</RouterLink>
        <a target="_blank" href="https://docs.google.com/document/d/1b95o_t9F86vNiQu5PbFwKcCbBzM3ShHhJmUGjqoRlTs/edit?usp=sharing">Règlements</a>
        <RouterLink to="/stats">Statistiques</RouterLink>
      </nav>
    </div>
  </header>

  <a target="_blank" class="mobile bars">
    <font-awesome-icon :icon="['fas', 'bars']" />
  </a>

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
          <li><a href="/">Accueil</a></li>
          <li><a href="/franchises">Franchises</a></li>
          <li><a href="/equipe">L'équipe</a></li>
          <li><a href="/horaire">Horaire</a></li>
          <li><a href="/classement">Classement</a></li>
          <li><a target="_blank" href="https://docs.google.com/document/d/1b95o_t9F86vNiQu5PbFwKcCbBzM3ShHhJmUGjqoRlTs/edit?usp=sharing">Règlements</a></li>
          <li><a href="/stats">Statistiques</a></li>
        </ul>
    </div>
    <div class="row">
      QCL Copyright © 2024 Quebec Champions League - Tout droits réservés || Conçu par Anthony Dumulong
    </div>
  </div>
</footer>
</template>

<style scoped>

.nav-mobile, .mobile{
  display: none;
}

.bars{
  z-index: 10;
  font-size: 35px;
  margin: 40px;
  position: absolute;
}

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

.nav2{
  display: none;
}

.nav1 {
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

@media (max-width:1000px){
  header {
    height: 0;
  }
  .mobile{
    display: flex;
  }
  .nav-desktop{
    display: none;
  }
}

</style>
