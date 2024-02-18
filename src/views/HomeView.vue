<script setup>
import HeroHeader from '../components/HeroHeader.vue'
</script>

<script>
export default {
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll (event) {
      var height = 165 - (window.scrollY/8)
      let images = document.getElementsByClassName("img");
      for (var i = 0; i < images.length; i++) {
        images[i].style.transform = "translate(0," + height + "px)";
      }
    }
  }
}
</script>

<template>
  <main>
    <HeroHeader />
    <div class="fade"></div>
    <div class="content">
      <div class="block">
        <div class="text textleft">
          <h2>Le Concept</h2>
          <p>La QCL est une ligue par système de repêchage du jeu League of Legends qui tente de reproduire le système des grandes ligues de sport comme la NHL et la NFL. C’est-à-dire, les équipes repêchent sur plusieurs rondes les meilleurs joueurs disponibles dans la banque du Québec dans le but de former la meilleure équipe possible et de remporter le championnat. On recommence à chaque saison. </p>
        </div>
        <div style="margin-top:-100px;padding-top: 60px;" class="img imgright" id="img">
          <img src="./../assets/img/5.png">
        </div>
      </div>
      <div class="block">
        <div class="img imgleft">
          <img src="./../assets/img/1.png">
        </div>
        <div class="text">
          <h2>Les Franchises</h2>
          <p>Chaque franchise a une équipe dans la division ‘’Championne’’ avec les 5 joueurs principaux et une équipe dans la ligue ‘’Académie’’ avec 5 joueurs supplémentaires qui compétitionnent pour monter vers l’équipe principale.
Chaque équipe engage un entraineur avec une expérience compétitive minimale et une expérience adéquate pour entourer les joueurs et les aider dans leur parcours d’amélioration. 
 </p>
        </div>
      </div>
      <div class="block" style="margin-top: -50px">
        <div class="text">
          <h2>Notre Mission</h2>
          <p>Nous croyons que d’avoir la meilleure compétition possible par le système de repêchage, la division championne et académie, la présence de coachs qualifiés et les matchs intraéquipes permet de créer un environnement parfait pour s’améliorer et pousser les joueurs déjà talentueux à niveler vers le haut. Avec le système de draft, ce sont les meilleurs joueurs québécois qui ressortiront du lot et qui compétitionnent dans notre ligue. Ainsi, les parties sont intéressantes à regarder pour le reste des joueurs puisque tous veulent voir les meilleurs compétitionner. </p>
        </div>
        <div style="margin-top:100px" class="img imgright">
          <img src="./../assets/img/backhome.png">
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>  
.fade{
  background: linear-gradient(to bottom, rgba(0, 57, 210, 0), rgba(0, 57, 210, 1));
  height: 30vh;
  margin-top: -30vh;
  width: 100%;
}
.content{
  background: linear-gradient(180deg, #0039D2 0%, #00030A 125.13%);
}
.block{
  padding: 5vw 15vw;
  display: flex;
}
.block h2{
  font-size: 40px;
  margin-bottom: 30px;
  font-family: GeneralSansMedium;
}
.block .text{
  display: block;
  width: 40%;
  margin-top: 20px;
}

.text p{
  font-family: 'GeneralSansLight';
  font-size: 20px;
}

.block .img{
  display: block;
  width: 60%;
}

.img img{
  width: 100%;
  border-radius: 20px;
}

.imgleft{
  margin-right: 5%;
}

.imgright{
  margin-left: 5%;
}

.block .text{
  color: white;
  font-size: 16px;
}
</style>
