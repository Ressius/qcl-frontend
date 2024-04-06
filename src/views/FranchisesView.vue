<script setup>
import SmallHeroHeader from '../components/SmallHeroHeader.vue';
import { store } from '../store.js'

</script>

<template>
  <main>
    <SmallHeroHeader msg="Les Franchises" />
    <div class="content">
      <div v-if="store.franchises.length === 0" class="lds-ring"><div></div><div></div><div></div><div></div></div>
      <div class="allfranchises">
        <div class="menufranchise" v-for="franchise in store.franchises">
          <a class="btn" v-scroll-to="{ element: '#franchise-' + franchise.id, offset: -80}">
            <img :src="franchise.logo" />
          </a>
        </div>
      </div>
      <div class="title">
        <div v-for="franchise in store.franchises" :id="'franchise-' + franchise.id" class="franchise">
          <div class="img">
            <img :src="franchise.logo">
          </div>
          <div class="contenttext">
            <h3>{{ franchise.name }}</h3>
          </div>
          <div class="staff">
            <div class="st">
              <font-awesome-icon :icon="['fas', 'user-tie']" />
              {{ franchise.staff[0].name }}
            </div>
            <div class="st">
              <font-awesome-icon :icon="['fas', 'chalkboard-user']" />
              {{ franchise.staff[1].name }}
            </div>
          </div>
          <div v-for="team in franchise.teams" class="team">
            <a target="_blank" :href="'https://www.op.gg/multisearch/na?summoners=' + encodeURIComponent(team.opgg)" class="tname">{{ team.name }}</a>
            <div class="players">
              <div v-for="player in team.players" class="player">
                <img class="playericon" :src="'/icons/' + player.role + '.svg'" />
                <a class="playername" target="_blank" :href=" player.opgg.includes(',') ? 'https://www.op.gg/multisearch/na?summoners=' + encodeURIComponent(player.opgg) : 'https://www.op.gg/summoners/na/' + player.opgg.replace('#','-')">{{ player.ign }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

.btn{
  cursor: pointer;
}
.staff{
  font-size: 20px;
  font-family: "GeneralSans";
  color: white;
  display: flex;
  margin-left: 30px;
  padding-top: 15px;
}

.st{
  margin-right: 40px;
}

.staff svg{
  margin-right: 10px;
  font-size: 35px;
}

.title{
  padding-top: 60px;
}
.content{
  padding-top: 100px;
  width: 100%;
  font-family: "GeneralSans";
}

.allfranchises{
  display: flex;
  width: 80vw;
  margin: auto;
  background-color: rgba(0,0,0,0.5);
  border-radius: 50px;
  padding: 20px 30px;
  justify-content: space-evenly;
}

.menufranchise img{
  height: 90px;
  margin: auto;
  bottom: 0;
}

.players{
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.player{
  display: flex;
  min-width: 100px;
}

.menufranchise{
  border-radius: 30px;
  display: flex;
  height: 100px;
  padding: 5px 20px 15px 20px;
}
.menufranchise:hover{
  background-color: rgb(1, 14, 48);
  transition: 0.5s;
}
.playername{
  line-height: 50px;
  padding-left:15px;
  white-space: nowrap;
}

.playername:hover{
  transition: 0.5s;
  color: rgba(0, 57, 210, 1);
}

.tname{
  background-color: rgba(0, 57, 210, 1);
  padding: 10px 10px;
  line-height: 30px;
  text-align: center;
  width: 200px;
  color: white;
  border-radius: 20px;
}

.tname:hover{
  transition: 0.5s;
  background-color: white;
  color: black;
}

.team{
  font-size: 18px;
  display: flex;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  padding: 20px;
  border-radius: 40px;
  margin: 10px 0;
}

.franchise{
  padding: 50px 0;
  width: 80vw;
  margin: auto;
  transition:0.5s;
  scroll-margin-top: 50px;
}

.contenttext{
  padding: 30px;
  padding-left: 100px;
  color: white;
}

.img {
  float: left;
}

.img img{
  height: 100px;
  margin: auto;
  transition:0.5s;
}

h3 {
  font-family: "GeneralSansSemiBold";
  font-size: 1.8rem;
  position: inherit;
  margin-left: 30px;
}
.content h3 {
  position: inherit;
  margin-bottom: 15px;
}

@media (min-width: 1024px) {
  .title h1,
  .title h3 {
    text-align: left;
  }
}
</style>
