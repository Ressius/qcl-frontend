<template>
    <header>
    <nav>
      <div class="branding">
        <a class="logo" href="/" alt="Accueil QCL">QCL</a>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><RouterLink to="/franchises" class="link">Franchises</RouterLink></li>
        <li><RouterLink to="/equipe" class="link">L'équipe</RouterLink></li>
        <li><RouterLink to="/horaire" class="link">Horaire</RouterLink></li>
        <li><RouterLink to="/classement" class="link">Classement</RouterLink></li>
        <li><a target="_blank" href="https://docs.google.com/document/d/1b95o_t9F86vNiQu5PbFwKcCbBzM3ShHhJmUGjqoRlTs/edit?usp=sharing" class="link">Règlements</a></li>
        <li><RouterLink to="/stats" class="link">Statistiques</RouterLink></li>
      </ul>
      <div class="far fa-bars" :class="{'icon-active': mobileNav}"></div>
      <div class="icon">
        <font-awesome-icon @click="toggleMobileNav" v-show="mobile" :icon="['fas', 'bars']" class="far fa-bars" :class="{'icon-active': mobileNav}"></font-awesome-icon>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><RouterLink @click="toggleMobileNav" to="/" class="link">Accueil</RouterLink></li>
          <li><RouterLink @click="toggleMobileNav" to="/franchises" class="link">Franchises</RouterLink></li>
          <li><RouterLink @click="toggleMobileNav" to="/equipe" class="link">L'équipe</RouterLink></li>
          <li><RouterLink @click="toggleMobileNav" to="/horaire" class="link">Horaire</RouterLink></li>
          <li><RouterLink @click="toggleMobileNav" to="/classement" class="link">Classement</RouterLink></li>
          <li><a @click="toggleMobileNav" target="_blank" href="https://docs.google.com/document/d/1b95o_t9F86vNiQu5PbFwKcCbBzM3ShHhJmUGjqoRlTs/edit?usp=sharing" class="link">Règlements</a></li>
          <li><RouterLink @click="toggleMobileNav" to="/stats" class="link">Statistiques</RouterLink></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
    export default {
        name: "navigation",
        data() {
            return {
                mobile: null,
                mobileNav: null,
                windowWidth: null,
            }
        },
        created() {
          window.addEventListener('resize', this.checkScreen);
          this.checkScreen();
        },

        methods: {
            toggleMobileNav() {
                this.mobileNav = !this.mobileNav;
            },

            checkScreen() {
                this.windowWidth = window.innerWidth;
                if (this.windowWidth < 1140) {
                    this.mobile = true;
                    return
                } else {
                    this.mobile = false;
                    this.mobileNav = false;
                    return;
                }
            }
        },
    }
</script>

<style scoped>

header {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.5s ease all;
  line-height: 1.5;
  width: 100%;
  background-color: #111;
  color: white;
}

.branding {
  display: flex;
  align-items: center;
  padding-right: 40px;
  padding-left: 80px
}

.branding .logo {
    padding: 0;
    width: fit-content;
    font-size: 40px;
    transition: 0.5s ease all;
    font-family: "GeneralSansSemiBold";
  }

.navigation {
   display: flex;
   align-items: center;
   flex: 1;
   justify-content: flex-start;
   border-left: 1px solid white;
}

nav 
{
  position: relative;
  display: flex;
  text-align: left;
  flex-direction: row;
  padding: 20px 0;
  font-size: 18px;
  transition: 0.5s ease all;
  color:white;
  width: 90%;
  height: 80px;

  @media (min-width: 1140px) {
    width: 1140px;
    
  }
  

  .icon {
    display: flex;
    align-items: center;
    position: absolute;
    top:0;
    right: 40px;
    height: 100%;
    color: white;

    svg {
      cursor: pointer;
      height: 50%;
      transition: 0.8s ease all;
    }
  }

  .icon-active {
    transform: rotate(180deg);
  }

  .dropdown-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: white;
    top: 0;
    left: 0;

    li {
      margin-left: 0;
      padding-top: 40px;
      .link {
        color: black;
      
      }
    }
}

.mobile-nav-enter-active, .mobile-nav-leave-active {
      transition: 0.8s ease all;
  }

  .mobile-nav-enter-from,
  .mobile-nav-leave-to{
      opacity: 0;
      transform: translateX(-100%);
  }

  .mobile-nav-enter-to {
      opacity: 1;
      transform: translateX(0);
  }
}

nav ul li {
  list-style: none;
}


nav li {
  padding-right: 4rem;
}

</style>