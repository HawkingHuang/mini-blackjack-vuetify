<!-- Port: 8097 -->
<template>
  <v-app>
    <v-app-bar-title
      class="text-h2 text-center text-blue-lighten-1 font-weight-black pt-4"
      >VV Mini-Blackjack</v-app-bar-title
    >
    <section class="sticky">
      <div class="bubbles">
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
      </div>
    </section>
    <v-main class="py-8">
      <DrawHint />
      <WelcomeDialog />
      <PlayerASection />
      <PlayerBSection />
      <BarSection />
      <EndgameDialog />
    </v-main>
  </v-app>
</template>

<script>
import DrawHint from "./components/DrawHint.vue";
import WelcomeDialog from "./components/WelcomeDialog.vue";
import PlayerASection from "./components/PlayerASection.vue";
import PlayerBSection from "./components/PlayerBSection.vue";
import BarSection from "./components/BarSection.vue";
import EndgameDialog from "./components/EndgameDialog.vue";
export default {
  name: "App",

  components: {
    DrawHint,
    WelcomeDialog,
    PlayerASection,
    PlayerBSection,
    BarSection,
    EndgameDialog,
  },
};
</script>

<style>
* {
  font-family: "Inknut Antiqua" !important;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  background: #e9ecef;
}

body,
html {
  width: 100%;
  height: 100%;
}
/*
body {
  margin: 0;
  padding: 0;
  background: #29b6f6;
}
*/

.bubbles {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  top: 0;
  left: 0;
}

.bubble {
  position: absolute;
  bottom: -100px;
  width: 40px;
  height: 40px;
  background: #f1f1f1;
  border-radius: 50%;
  opacity: 0.5;
  animation: rise 10s infinite ease-in;
}

.bubble:nth-child(1) {
  width: 40px;
  height: 40px;
  left: 10%;
  animation-duration: 8s;
}

.bubble:nth-child(2) {
  width: 20px;
  height: 20px;
  left: 20%;
  animation-duration: 5s;
  animation-delay: 1s;
}

.bubble:nth-child(3) {
  width: 50px;
  height: 50px;
  left: 35%;
  animation-duration: 7s;
  animation-delay: 2s;
}

.bubble:nth-child(4) {
  width: 80px;
  height: 80px;
  left: 50%;
  animation-duration: 11s;
  animation-delay: 0s;
}

.bubble:nth-child(5) {
  width: 35px;
  height: 35px;
  left: 55%;
  animation-duration: 6s;
  animation-delay: 1s;
}

.bubble:nth-child(6) {
  width: 45px;
  height: 45px;
  left: 65%;
  animation-duration: 8s;
  animation-delay: 3s;
}

.bubble:nth-child(7) {
  width: 90px;
  height: 90px;
  left: 70%;
  animation-duration: 12s;
  animation-delay: 2s;
}

.bubble:nth-child(8) {
  width: 25px;
  height: 25px;
  left: 80%;
  animation-duration: 6s;
  animation-delay: 2s;
}

.bubble:nth-child(9) {
  width: 15px;
  height: 15px;
  left: 70%;
  animation-duration: 5s;
  animation-delay: 1s;
}

.bubble:nth-child(10) {
  width: 90px;
  height: 90px;
  left: 25%;
  animation-duration: 10s;
  animation-delay: 4s;
}

@keyframes rise {
  0% {
    bottom: -100px;
    transform: translateX(0);
  }
  50% {
    transform: translate(100px);
  }
  100% {
    bottom: 1080px;
    transform: translateX(-200px);
  }
}

.toast-enter-active {
  animation: wobble 0.4s ease;
}

@keyframes wobble {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  60% {
    transform: translateX(8px);
  }
  70% {
    transform: translateX(-8px);
  }
  80% {
    transform: translateX(4px);
  }
  90% {
    transform: translateX(-4px);
  }
  100% {
    transform: translateX(0);
  }
}

.toast-leave-active {
  animation: wobble-out 0.4s ease;
}

@keyframes wobble-out {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-4px);
  }
  60% {
    transform: translateX(4px);
  }
  70% {
    transform: translateX(-8px);
  }
  80% {
    transform: translateX(8px);
  }
  90% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100px);
    opacity: 0;
  }
}
</style>
