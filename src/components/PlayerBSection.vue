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
              >Score
              <span class="text-blue-lighten-1">{{
                PlayerBTotal
              }}</span></v-card-text
            >
          </v-card>
          <v-btn
            class="text-blue-lighten-1 ma-1"
            @click="bet"
            :disabled="PlayerBDisabled"
            >Hit</v-btn
          >
          <v-btn class="text-blue-lighten-1 ma-1" @click="stop">Stay</v-btn>
        </div>
      </v-col>
      <v-col cols="12">
        <v-container class="mb-6">
          <v-row align="start" no-gutters class="ga-1">
            <transition-group name="toast" mode="out-in">
              <v-col v-for="(n, index) in PlayerBPool" cols="1" :key="index">
                <v-card
                  width="4.5rem"
                  style="cursor: pointer"
                  @click="applySpeCard(n, index)"
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
    },
    applySpeCard(n) {
      this.$store.commit("applySpeCard", n);
      console.log(n);
    },
  },
};
</script>

<style></style>
