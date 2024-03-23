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
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const text = ref("Now it's your turn!");
    const drawHintVisible = computed(() => !store.state.PlayerBDisabled);

    return { text, drawHintVisible };
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
