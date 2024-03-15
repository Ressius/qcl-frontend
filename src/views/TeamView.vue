<script setup>
import OurPartners from '../components/OurPartners.vue';
import SmallHeroHeader from '../components/SmallHeroHeader.vue'
</script>

<template>
  <main>
    <SmallHeroHeader msg="SANS EUX, RIEN NE SERAIT POSSIBLE" />
    <div class="content">
      <div class="block">
        <img src="../assets/crew/nani.png" />
        <h3>Zacharie "Nani" Tousignant</h3>
        <p>Co-propriétaire de la ligue. Gestionnaire RH de formation. Homme à tout faire, commissionnaire de la ligue, s'occupe aussi des relation d'affaires avec les partenaires.</p>
      </div>
      <div class="block">
        <img src="../assets/crew/ressius.jpg" />
        <h3>Anthony "Ressius" Dumulong</h3>
        <p>Co-propriétaire de la ligue. Développeur de formation, s'occupe principalement des infrastructures techniques de la ligue, du discord et de la trésorerie.</p>
      </div>
      <div class="block">
        <img src="../assets/crew/ev.png" />
        <h3>Evlyn "Heavylyne" Anker-Baril</h3>
        <p>Créatrice de contenu, gestionnaire principale des tickets/plaintes de la ligue. Fait partie du groupe d'organisateurs.</p>
      </div>
      <div class="block">
        <img src="../assets/crew/manu.png" />
        <h3>Manuel "kingpin1905" Roy-Boisvert</h3>
        <p>Réalisateur et producteur, il s'occupe des diffusions Twitch et des aspects techniques qui les accompagnent. Il développe également des outils sur mesure pour la ligue.</p>
      </div>
      <div class="block">
        <img src="../assets/crew/blake.png" />
        <h3>Nicolas "Blake" Lefebvre</h3>
        <p>Commentateur, descripteur et analyste</p>
      </div>
      <div class="block">
        <img src="../assets/crew/exdelo.png" />
        <h3>Yan "Exdelo" Xiong</h3>
        <p>Commentateur descripteur.</p>
      </div>
      <div class="block">
        <img src="../assets/crew/spirit.png" />
        <h3>Hubert "Spirit" Parent</h3>
        <p>J'ai commencé à jouer à League of Legends en 2016 et j'ai toujours apprécié l'aspect esport de ce jeu. Après m'être tenté (et avoir grandement échoué) en tant que joueur, j'ai commencé il y'a deux ans à commenter l'équipe esport du cégep ste-foy avant de rejoindre La QCL lors de sa saison beta l'an passé. J'aime beaucoup le hockey (Go Pittsburgh)</p>
      </div>
      <OurPartners />
    </div>
  </main>
</template>

<style scoped>
.content{
  display: flex;
  flex-wrap: wrap;
  color: white;
  padding: 50PX 10vw;
  justify-content: space-evenly;
}

.block{
  margin: 0 50px;
  width: 400px;
  padding-bottom: 60px;
}

.block img{
  width: 100%;
  height: 400px;
  display: block;
  border-radius: 20px;
}

h3{
  font-family: "GeneralSansBold";
  line-height: 1.2;
  font-size: 2rem;
  margin: 20px 0;
}
</style>
