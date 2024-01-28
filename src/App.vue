<!-- Port: 8097 -->
<template>
  <v-app>
    <v-main class="py-8">
      <PlayerASection />
      <PlayerBSection />
      <BarSection />
    </v-main>
  </v-app>
</template>

<script>
import PlayerASection from "./components/PlayerASection.vue";
import PlayerBSection from "./components/PlayerBSection.vue";
import BarSection from "./components/BarSection.vue";
export default {
  name: "App",

  components: {
    PlayerASection,
    PlayerBSection,
    BarSection,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  background: #e9ecef;
}
</style>
