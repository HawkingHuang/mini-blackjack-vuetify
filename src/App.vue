<!-- Port: 8097 -->
<template>
  <PlayerASection />
  <PlayerBSection />
</template>

<script>
import PlayerASection from "./components/PlayerASection.vue";
import PlayerBSection from "./components/PlayerBSection.vue";

export default {
  name: "App",
  components: {
    PlayerASection,
    PlayerBSection,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #212529;
  margin-top: 60px;
}
</style>
