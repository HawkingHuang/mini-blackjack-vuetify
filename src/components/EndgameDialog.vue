<template>
  <v-dialog v-model="$store.getters.dialogVisible" class="text-center">
    <v-card>
      <v-card-title class="text-h4 bg-blue-lighten-1 py-10"
        >{{ winner }}
      </v-card-title>
      <v-card-text class="text-h5"></v-card-text>
      <v-card-actions>
        <v-btn @click="closeDialog" class="bg-blue-lighten-1">Reset</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  methods: {
    closeDialog() {
      this.$store.commit("reset");
    },
  },
  computed: {
    winner() {
      return this.$store.getters.winner;
    },
  },
};
</script>

<style></style>
