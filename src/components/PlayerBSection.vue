<template>
  <v-container class="my-10 bg-blue-lighten-1 rounded-xl">
    <v-row no-gutters>
      <v-col cols="12">
        <div class="section-total-and-bet-a">
          <v-card width="400" class="mb-5">
            <v-card-item>
              <v-card-title class="text-h4 pa-3">Player</v-card-title>
            </v-card-item>

            <v-card-text class="text-h5"
              >Score <span>{{ PlayerBTotal }}</span></v-card-text
            >
          </v-card>
          <v-btn
            density="comfortable"
            class="text-blue-lighten-1 ma-1"
            @click="bet"
            >Bet</v-btn
          >
          <v-btn
            density="comfortable"
            class="text-blue-lighten-1 ma-1"
            @click="stop"
            >Stop</v-btn
          >
        </div>
      </v-col>
      <v-col cols="12">
        <v-container class="mb-6">
          <v-row align="start" no-gutters class="ga-4">
            <v-col v-for="n in PlayerBPool" cols="1" :key="n">
              <v-card width="5rem">
                <v-card-item>
                  <v-card-title class="text-h4 py-5 text-center">{{
                    n
                  }}</v-card-title>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    PlayerBPool() {
      return this.$store.getters.PlayerBPool;
    },
    PlayerBTotal() {
      return this.$store.state.PlayerBTotal;
    },
  },
  methods: {
    bet() {
      this.$store.commit("playerBClick");
    },
    stop() {
      this.$store.commit("playerBStop");
    },
  },
};
</script>

<style>
/*
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
*/
</style>
