<template>
  <v-dialog v-model="dialogVisible" class="text-center">
    <v-card>
      <v-card-title class="text-h4 bg-blue-lighten-1 py-10"
        >Welcome! Challenger for the VV Mini-Blackjack Game!
      </v-card-title>
      <v-card-text class="text-h5"
        >VV Mini-Blackjack is a game inspired by the DLC <i>21</i> in
        <i
          ><a
            href="https://store.steampowered.com/app/418370/Resident_Evil_7_Biohazard/"
            style="text-decoration: none"
            class="text-blue-lighten-1"
            >Resident Evil 7: Biohazard</a
          ></i
        >.
      </v-card-text>
      <v-card-text class="text-h5"
        >The set has basic card 1-11, no duplication.</v-card-text
      >
      <v-card-text class="text-h5"
        >For example, if you draw card 3, then no one will get that card
        afterwards.</v-card-text
      >
      <v-card-text class="text-h5"
        >Besides, there are special cards, too.</v-card-text
      >
      <v-card-text class="text-h5"
        ><strong>A3-A5</strong> lets you immediately get card 3-5 (if the
        computer doesn't hold that particular card, and you don't draw that card
        already).</v-card-text
      >
      <v-card-text class="text-h5"
        >You can use <strong>RL</strong> (Reverse Last) to return your last
        card.</v-card-text
      >
      <v-card-text class="text-h5"
        >For more information, please refer to the
        <strong>Rules</strong> section.</v-card-text
      >
      <v-card-actions>
        <v-btn @click="closeDialog" class="bg-blue-lighten-1">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: true,
    };
  },
  methods: {
    closeDialog() {
      this.dialogVisible = false;
    },
  },
};
</script>

<style></style>
