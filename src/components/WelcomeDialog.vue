<template>
  <v-dialog v-model="dialogVisible" class="text-center">
    <v-card>
      <v-card-title class="text-h6 text-md-h4 bg-blue-lighten-1 py-10 title"
        ><img :src="party" alt="party" class="party left" />Challenger,
        Welcome!<img :src="party" alt="party" class="party" />
      </v-card-title>
      <v-card-text class="text-body-1 text-md-h5"
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
      <v-card-text class="text-body-1 text-md-h5"
        >The set has basic cards 1-11, no duplication.</v-card-text
      >
      <v-card-text class="text-body-1 text-md-h5"
        >For example, if you draw card 3, then no one will get that card
        afterwards.</v-card-text
      >
      <v-card-text class="text-body-1 text-md-h5"
        >Besides, there are special cards, too.</v-card-text
      >
      <v-card-text class="text-body-1 text-md-h5"
        >For more information, please refer to the
        <strong>Rules</strong> section.</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="closeDialog" class="bg-blue-lighten-1">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import party from "@/assets/imgs/party.png";
import { ref } from "vue";

export default {
  setup() {
    let dialogVisible = ref(true);
    function closeDialog() {
      dialogVisible.value = false;
    }

    return { dialogVisible, party, closeDialog };
  },
};
</script>

<style scpoed>
.party {
  width: 50px;
  padding: 5px;
}

.left {
  transform: scaleX(-1);
}

@media (max-width: 60em) {
  .party {
    width: 35px !important;
  }
}
</style>
