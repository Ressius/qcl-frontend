<script setup>
</script>

<template>
  <div class="schedule">
    <h2>Matchs diffusés - Saison régulière</h2>
      <div class="match">
        <div class="team team1">
          <img src="../assets/teams/vtl.png" />
          <p>Virtual Esports de Saint-Jean-Sur-Richelieu</p>
        </div>
        <div class="separator"></div>
        <div class="team team2">
          <img src="../assets/teams/yuzu.png" />
          <p>Yuzu Sushi de St-Nicolas</p>
        </div>
        <div class="time">
          <p>Dimanche 3 mars 2024 - 19h30</p>
        </div>
        <div class="watch"></div>
      </div>
      <div class="match">
        <div class="team team1">
          <img src="../assets/teams/miracle.png" />
          <p>Miracle de Montréal</p>
        </div>
        <div class="separator"></div>
        <div class="team team2">
          <img src="https://cdn.discordapp.com/attachments/1038428294040780810/1213929506335621250/aot.png?ex=65f742f4&is=65e4cdf4&hm=68eef281123dfb4b5c786369a4f6bdabafda05bb068e9297cfd693c7f7b1381c&" />
          <p>Anges du Saguenay</p>
        </div>
        <div class="time">
          <p>Dimanche 10 mars 2024 - 19h30</p>
        </div>
        <div class="watch"></div>
      </div>
      <div class="match">
        <div class="team team1">
          <img src="../assets/teams/draveurs.png" />
          <p>Draveurs de Gatineau</p>
        </div>
        <div class="separator"></div>
        <div class="team team2">
          <img src="../assets/teams/yummy.png" />
          <p>Yummy Sports de Trois-Rivières</p>
        </div>
        <div class="time">
          <p>Dimanche 17 mars 2024 - 19h30</p>
        </div>
        <div class="watch"></div>
      </div>
      <div class="match">
        <div class="team team1">
          <img src="../assets/teams/aeq.png" />
          <p>Académie Esports de Québec</p>
        </div>
        <div class="separator"></div>
        <div class="team team2">
          <img src="../assets/teams/yuzu.png" />
          <p>Yuzu Sushi de St-Nicolas</p>
        </div>
        <div class="time">
          <p>Dimanche 24 mars 2024 - 19h30</p>
        </div>
        <div class="watch"></div>
      </div>
      <div class="match">
        <div class="team team1">
          <img src="../assets/teams/apex.png" />
          <p>Apex de Chambly</p>
        </div>
        <div class="separator"></div>
        <div class="team team2">
          <img src="../assets/teams/aeq.png" />
          <p>Académie Esports de Québec</p>
        </div>
        <div class="time">
          <p>Dimanche 31 mars 2024 - 19h30</p>
        </div>
        <div class="watch"></div>
      </div>
      <div class="match">
        <div class="team team1">
          <img src="../assets/teams/vtl.png" />
          <p>Virtual Esports de Saint-Jean-Sur-Richelieu</p>
        </div>
        <div class="separator"></div>
        <div class="team team2">
          <img src="../assets/teams/miracle.png" />
          <p>Miracle de Montréal</p>
        </div>
        <div class="time">
          <p>Dimanche 7 avril 2024 - 19h30</p>
        </div>
        <div class="watch"></div>
      </div>
      <div class="match">
        <div class="team team1">
          <img src="../assets/teams/yummy.png" />
          <p>Yummy Sports de Trois-Rivières</p>
        </div>
        <div class="separator"></div>
        <div class="team team2">
          <img src="../assets/teams/apex.png" />
          <p>Apex de Chambly</p>
        </div>
        <div class="time">
          <p>Dimanche 14 mars 2024 - 19h30</p>
        </div>
        <div class="watch"></div>
      </div>
  </div>
</template>

<style scoped>
h2 {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 30px;
  top: 0;
  font-family: "GeneralSansSemiBold";
  line-height: 1.1;
}

.schedule {
  padding: 20px 8vw;
}

.match{
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  border-radius: 40px;
  display: inline-block;
  text-align: left;
  height: 100px;
  margin-bottom: 15px;
}

.match p, .match img{
  display: flex;
  float: left;
  align-items: center;
}

.match p{
  width: 150px;
  color: white;
  height: 100%;
}

.match img{
  height: 50px;
  float: left;
  margin-top: 25px;
  margin-right: 20px;
}

.team{
  float: left;
  height: 100%;
}

.team1{
  margin-left: 50px;
}

.separator{
  /* Rectangle 10 */
  width: 70px;
  height: 1px;
  margin-top: 50px;
  /* Blanc */
  background: #F5F8FF;
  border-radius: 30px;
  transform: rotate(110deg);
  float: left;
  margin-left: -20px;
}

.time{
  float: right;
  height: 100%;
}

.time p{
  width: 175px;
  margin-right: 30px;
}

</style>
