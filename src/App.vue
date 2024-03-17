<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import axios from 'axios'
import { RouterLink, RouterView } from 'vue-router'
import { store } from './store.js'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
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
  <Footer />
</template>

<style scoped>

body{
margin:0;
overflow-x:hidden;
}

</style>
