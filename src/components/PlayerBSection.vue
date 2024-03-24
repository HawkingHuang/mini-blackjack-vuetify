<template>
  <v-container class="my-5 bg-blue-lighten-1 rounded-xl">
    <v-row no-gutters>
      <v-col cols="12">
        <div class="section-total-and-bet-a">
          <v-card width="400" class="mb-5 card">
            <v-card-item>
              <v-card-title class="text-h6 text-md-h4 d-flex align-center"
                >Player<img
                  :src="gaming"
                  alt="gaming"
                  style="width: 50px; padding: 5px"
                  class="player"
              /></v-card-title>
            </v-card-item>

            <div style="display: flex; justify-content: space-between">
              <v-card-text class="text-body-1 text-md-h5 d-flex align-center"
                ><img
                  :src="score"
                  alt="score"
                  style="width: 35px; padding-right: 8px"
                />
                <span class="text-blue-lighten-1">{{
                  PlayerBTotal
                }}</span></v-card-text
              >
              <v-card-text class="text-body-1 text-md-h5 d-flex align-center"
                ><img
                  :src="warning"
                  alt="warning"
                  style="width: 35px; padding-right: 8px"
                />
                <span class="text-blue-lighten-1">{{
                  this.$store.state.limit
                }}</span></v-card-text
              >
            </div>
          </v-card>
          <v-btn
            class="text-blue-lighten-1 ma-1"
            @click="bet"
            :disabled="PlayerBDisabled"
            ><img
              :src="cardGame"
              alt="cardGame"
              style="width: 35px; padding: 3px"
          /></v-btn>
          <v-btn class="text-blue-lighten-1 ma-1" @click="stop"
            ><img
              :src="stopping"
              alt="stopping"
              style="width: 35px; padding: 3px"
          /></v-btn>
        </div>
      </v-col>
      <v-col cols="12">
        <v-container class="mb-6">
          <v-row align="start">
            <transition-group name="toast" mode="out-in">
              <v-col
                v-for="(n, index) in PlayerBPool"
                cols="3"
                md="2"
                lg="1"
                :key="index"
              >
                <v-card
                  width="4.5rem"
                  style="cursor: pointer"
                  @click="applySpeCard(n)"
                >
                  <v-card-item>
                    <v-card-title class="text-h6 py-5 text-center">{{
                      n
                    }}</v-card-title>
                  </v-card-item>
                </v-card>
              </v-col>
            </transition-group>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import gaming from "@/assets/imgs/gaming.png";
import score from "@/assets/imgs/score.png";
import warning from "@/assets/imgs/warning.png";
import cardGame from "@/assets/imgs/card-game.png";
import stopping from "@/assets/imgs/stop.png";

export default {
  setup() {
    const store = useStore();

    function bet() {
      store.commit("playerBClick");
    }
    function stop() {
      store.commit("playerBStop");
    }
    function applySpeCard(n) {
      store.commit("applySpeCard", n);
    }
    const PlayerBPool = computed(() => store.getters.PlayerBPool);
    const PlayerBTotal = computed(() => store.state.PlayerBTotal);
    const PlayerBDisabled = computed(() => store.state.PlayerBDisabled);

    return {
      gaming,
      score,
      warning,
      cardGame,
      stopping,
      bet,
      stop,
      applySpeCard,
      PlayerBPool,
      PlayerBTotal,
      PlayerBDisabled,
    };
  },
};
</script>

<style scoped>
@media (max-width: 37.5em) {
  .card {
    max-width: 15rem;
  }
}

@media (max-width: 60em) {
  .player {
    width: 40px !important;
  }
}
</style>
