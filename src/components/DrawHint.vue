<template>
  <div class="text-center">
    <v-snackbar
      v-model="drawHintVisible"
      class="custom-snackbar"
      color="brown-lighten-1"
    >
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Now it's your turn!",
    };
  },
  computed: {
    drawHintVisible() {
      return !this.$store.state.PlayerBDisabled;
    },
  },
};
</script>

<style scoped>
.custom-snackbar {
  bottom: 50%;
}

@media (max-width: 37.5em) {
  .custom-snackbar {
    bottom: 85%;
  }
}
</style>
