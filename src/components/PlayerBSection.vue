<template>
  <v-container class="my-5 bg-blue-lighten-1 rounded-xl">
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
            class="text-blue-lighten-1 ma-1"
            @click="bet"
            :disabled="PlayerBDisabled"
            >Bet</v-btn
          >
          <v-btn class="text-blue-lighten-1 ma-1" @click="stop">Stop</v-btn>
        </div>
      </v-col>
      <v-col cols="12">
        <v-container class="mb-6">
          <v-row align="start" no-gutters class="ga-1">
            <transition-group name="toast">
              <v-col v-for="n in PlayerBPool" cols="1" :key="n">
                <v-card width="4.5rem">
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
    PlayerBDisabled() {
      return this.$store.state.PlayerBDisabled;
    },
  },
  methods: {
    bet() {
      this.$store.commit("playerBClick");
    },
    stop() {
      this.$store.commit("playerBStop");
      // this.$store.commit("changePlayerBStatus");
    },
  },
};
</script>

<style></style>
