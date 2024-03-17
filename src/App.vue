<script>
import Navigation from './components/Navigation.vue'
import axios from 'axios'
import { RouterLink, RouterView } from 'vue-router'
import { store } from './store.js'

export default {
  name: 'App',
  components: {
    Navigation,
    RouterLink,
    RouterView
  }
};

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
  <Navigation/>

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

</style>
