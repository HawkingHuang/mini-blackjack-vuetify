<template>
  <div class="text-center">
    <v-snackbar
      v-model="drawHintVisible"
      class="custom-snackbar"
      color="grey-lighten-5"
    >
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Now its your turn!",
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
</style>
