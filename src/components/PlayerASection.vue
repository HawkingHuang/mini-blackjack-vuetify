<template>
  <v-container class="my-10 bg-blue-lighten-1 rounded-xl">
    <v-row no-gutters>
      <v-col cols="12">
        <div class="section-total-and-bet-a">
          <v-card width="400" class="mb-5 p-5">
            <v-card-item>
              <v-card-title class="text-h4 pa-3">Computer</v-card-title>
            </v-card-item>

            <v-card-text class="text-h5">Score</v-card-text>
          </v-card>
          <!-- <v-btn density="comfortable" class="text-blue-lighten-1">Bet</v-btn> -->
        </div>
      </v-col>
      <v-col cols="12">
        <v-container class="mb-6">
          <v-row align="start" no-gutters class="ga-4">
            <v-col v-for="n in PlayerAPool" cols="1" :key="n">
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
    PlayerAPool() {
      return this.$store.getters.PlayerAPool;
    },
  },
};
</script>

<style></style>
