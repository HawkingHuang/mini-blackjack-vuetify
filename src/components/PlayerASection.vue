<template>
  <v-container class="my-5 bg-blue-lighten-1 rounded-xl">
    <v-row no-gutters>
      <v-col cols="12">
        <div class="section-total-and-bet-a">
          <v-card width="400" class="mb-5 p-5 card">
            <v-card-item>
              <v-card-title class="text-h6 text-md-h4 d-flex align-center"
                >Computer<img
                  :src="robot"
                  alt="robot"
                  style="width: 50px; padding: 5px"
                  class="player"
              /></v-card-title>
            </v-card-item>

            <v-card-text class="text-body-1 text-md-h5"
              >Score
              <span class="text-blue-lighten-1"
                >? + {{ PlayerATotal }}</span
              ></v-card-text
            >
          </v-card>
        </div>
      </v-col>
      <v-col cols="12">
        <v-container class="mb-6">
          <v-row align="start">
            <transition-group name="toast">
              <v-col
                v-for="(n, index) in PlayerAPool"
                cols="3"
                md="2"
                lg="1"
                :key="index"
              >
                <v-card width="4.5rem">
                  <v-card-item>
                    <v-card-title
                      class="text-h6 py-5 text-center"
                      :style="{
                        color:
                          index === 0 || typeof n !== 'number'
                            ? 'white'
                            : 'black',
                        userSelect: 'none',
                      }"
                      >{{ n }}</v-card-title
                    >
                    <!-- <v-card-title class="text-h6 py-5 text-center">{{
                      n
                    }}</v-card-title> -->
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
import robot from "@/assets/imgs/robot.png";

export default {
  data() {
    return {
      robot,
    };
  },
  mounted() {
    this.bet();
  },
  computed: {
    PlayerAPool() {
      return this.$store.getters.PlayerAPool;
    },
    PlayerATotal() {
      return this.$store.state.PlayerATotal - this.$store.state.PlayerAPool[0];
    },
  },
  methods: {
    bet() {
      this.$store.commit("playerAClick");
    },
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
