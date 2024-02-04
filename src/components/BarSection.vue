<template>
  <v-bottom-navigation class="bg-blue-lighten-1">
    <v-btn value="start">
      <v-icon>mdi-arrow-up</v-icon>

      <span>Start</span>
    </v-btn>

    <v-btn value="end">
      <v-icon>mdi-circle</v-icon>

      <span>End</span>
    </v-btn>

    <v-btn value="reset">
      <v-icon>mdi-cached</v-icon>

      <span>Reset</span>
    </v-btn>

    <v-btn @click="openDialog" value="rules">
      <v-icon>mdi-information</v-icon>
      <span>Rules</span>
    </v-btn>

    <v-dialog v-model="dialogVisible" class="text-left">
      <v-card>
        <v-card-title class="bg-blue-lighten-1">Rules</v-card-title>
        <v-card-text
          ><v-icon class="px-5">mdi-radiobox-marked</v-icon>There are normal
          cards <strong>1-11</strong>, each represents its literal
          points.</v-card-text
        >
        <v-card-text
          ><v-icon class="px-5">mdi-radiobox-marked</v-icon>When the game ends,
          whoever is close to <strong>21</strong> but does not exceed it wins a
          set.</v-card-text
        >
        <v-card-text
          ><v-icon class="px-5">mdi-radiobox-marked</v-icon>Who wins
          <strong>5</strong> sets first wins the game.</v-card-text
        >
        <v-card-text
          ><v-icon class="px-5">mdi-radiobox-marked</v-icon>Card
          <strong>A3-5 (Auto 3-5)</strong> can be used to draw a card with that
          particular points.</v-card-text
        >
        <v-card-text
          ><v-icon class="px-5">mdi-radiobox-marked</v-icon>Use
          <strong>RL (Reverse Last)</strong> to remove your last
          card.</v-card-text
        >
        <!-- <v-card-text
          ><v-icon class="px-5">mdi-radiobox-marked</v-icon>Use
          <strong>DB (Double Bet)</strong> to win 2 sets in a set.</v-card-text
        > -->
        <v-card-actions>
          <v-btn @click="closeDialog" class="bg-blue-lighten-1">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
  },
};
</script>

<style></style>
