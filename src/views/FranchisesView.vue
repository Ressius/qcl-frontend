<script setup>

</script>

<template>
  <main>
    <div class="content">
      <div class="title">
        <h1 class="green">Franchises</h1>
        <div class="franchise">
          <div class="img">
            <img src="../assets/teams/yummy.png">
          </div>
          <div class="contenttext">
            <h3>Yummy Sport</h3>
            <p>Yummy Sport est une compagnie qui oeuvre dans le domaine des suppléments sportif. Étant gamers également, nous avons développé une formule e-Sport pour améliorer le focus et la concentration. Le tout en utilisant seulement que des produits naturels. Commandez directement en ligne https://yummysport.com/collections/gaming/products/yummy-sport-play et utilisez le code "PLAY1v9" pour 20% de rabais!</p>
          </div>
        </div>

        <div class="franchise">
          <div class="img">
            <img src="../assets/teams/n9tf.png">
          </div>
          <div class="contenttext">
            <h3>Nine Tailed Fox</h3>
            <p>L'organisation Nine Tailed Fox est une communauté de gaming centrée sur le jeu League of Legends. Notre volonté est de réunir des passionnés du jeu pour organiser des équipes et participer à des ligues/tournois eSports. Le but est d’inclure le plus de joueurs possible, autant ceux qui veulent jouer de façon plus relaxe que ceux qui veulent tenter de s’améliorer au maximum.</p>
          </div>
        </div>

        <div class="franchise">
          <div class="img">
            <img src="../assets/teams/yuzu.png">
          </div>
          <div class="contenttext">
            <h3>Yuzu Sushi de St-Nicloas</h3>
            <p>Wassup people de la QCL<br><br>

Moi c'est Daveloune, propriétaire du Yuzu St-Nicolas! J'espère que la team va en faire voir de toute les couleurs à tout le Québec, autant sur le rift que dans vos assisettes 🍣
De plus, je vous offre à tous une promotion 😉
Du 13 Août au 12 Novembre, mentionnez "Daveloune" en salle et obtenez un 15% de rabais sur votre commande!! Non jumelable avec toute autres promotions.
Restez à l'affût, j'aime en redonner à la communauté québécoise de League avec promo et concour flash 😉
Si on ne se voit pas au Yuzu Sushi de St-Nicolas, vous pouvez passer ici https://www.twitch.tv/daveloune, du gros OTP Nami 3th Na, little bit of coaching and troll! 
<br><br>
On se voit bientôt la gang</p>
          </div>
        </div>

        <div class="franchise">
          <div class="img">
            <img src="../assets/teams/yummy.png">
          </div>
          <div class="contenttext">
            <h3>Yummy Sport </h3>
            <p>Yummy Sport est une compagnie qui oeuvre dans le domaine des suppléments sportif. Étant gamers également, nous avons développé une formule e-Sport pour améliorer le focus et la concentration. Le tout en utilisant seulement que des produits naturels. Commandez directement en ligne https://yummysport.com/collections/gaming/products/yummy-sport-play et utilisez le code "PLAY1v9" pour 20% de rabais!</p>
          </div>
        </div>

        <div class="franchise">
          <div class="img">
            <img src="../assets/teams/yummy.png">
          </div>
          <div class="contenttext">
            <h3>Yummy Sport </h3>
            <p>Yummy Sport est une compagnie qui oeuvre dans le domaine des suppléments sportif. Étant gamers également, nous avons développé une formule e-Sport pour améliorer le focus et la concentration. Le tout en utilisant seulement que des produits naturels. Commandez directement en ligne https://yummysport.com/collections/gaming/products/yummy-sport-play et utilisez le code "PLAY1v9" pour 20% de rabais!</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.content{
  margin-top: 80px;
  width: 60%;
  margin: auto;
  margin-top: 80px;
}

.franchise{
  border: 2px solid rgb(21, 91, 196);
  border-radius: 2px;
  display: block;
  position: inherit;
  margin-top: 25px;
  background-image: url('../assets/back.png');
  background-position:left 60% bottom 100%;
  background-size: cover;
}

.contenttext{
  padding: 30px;
  padding-left: 100px;
  color: white;
}

.img {
  width: 150px;
  position: absolute;
  margin-left: -60px;
  margin-top: 20px;
}

.img img{
  max-width: 90%;
  margin: auto;
}

p{
  display: inline-block;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
}

h3 {
  font-size: 1.2rem;
}
.content h1 {
  margin-bottom: 40px;
}
.content h1,
.content h3 {
  position: inherit;
  font-size: 40px;
  margin-bottom: 15px;
}

@media (min-width: 1024px) {
  .title h1,
  .title h3 {
    text-align: left;
  }
}
</style>
