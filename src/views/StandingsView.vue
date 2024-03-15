<script setup>
import SmallHeroHeader from '../components/SmallHeroHeader.vue';
import { store } from '../store.js'
</script>

<template>
  <main>
    <SmallHeroHeader msg="Classement de la saison courante" />
    <div class="content">
      <div v-if="store.standingsChampions.length === 0" class="lds-ring"><div></div><div></div><div></div><div></div></div>
      <div class="allstandings">
        <div class="standings">
        <h3>Champions</h3>
        <div class="menufranchise" v-for="team in store.standingsChampions">
          <div class="number">
            {{ team.position }}
          </div>
          <div class="name">
            <img :src="team.teamLogo" />
            <p>{{ team.teamName }}</p>
            <div class="pts">{{ team.points }} pts</div>
          </div>
        </div>
      </div>
      <div class="standings">
        <h3>Académie</h3>
        <div class="menufranchise" v-for="team in store.standingsAcademy">
          <div class="number">
            {{ team.position }}
          </div>
          <div class="name">
            <img :src="team.teamLogo" />
            <p>{{ team.teamName }}</p>
            <div class="pts">{{ team.points }} pts</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.pts{
  width: 60px;
}

h3{
  font-size: 40px;
  font-family: "GeneralSansMedium";
  text-align: center;
  color: white;
  padding: 40px 0 20px 0;
  border-bottom: 1px solid white;
  width: 80%;
  margin: auto;
  margin-bottom: 20px;
}

.allstandings{
  font-family: "GeneralSansMedium";
  color: white;
  width: 90vw;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 100px;
}

.name{
  display: flex;
  align-items: center;
  min-width: 35vw;
  cursor: pointer;
  border-radius: 0 30px 30px 0;
}

.name:hover{
  transition: 0.5s;
  background-color: black;
}

p{
  width: 90%;
}

.number{
  color: black;
  background-color: white;
  font-size: 35px;
  font-family: "GeneralSansBold";
  height: 90px;
  border-radius: 30px 0 0 30px;
  padding: 10px;
  line-height: 70px;
  width: 40px;
  text-align: center;
}

.menufranchise{
  display: flex;
  background-color: rgba(0,0,0,0.5);
  border-radius: 30px;
  flex-direction: row;
  margin-bottom: 20px;
}

.menufranchise img{
  height: 70px;
  margin: 10px 20px;
}
.stadings h3{
  font-size: 30px;
  font-family: GeneralSansMedium;
}

</style>
