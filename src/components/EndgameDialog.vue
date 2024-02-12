<template>
  <v-dialog
    fullscreen
    v-model="$store.getters.dialogVisible"
    class="text-center"
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-card-title class="text-h6 text-md-h4 bg-blue-lighten-1 py-10"
        >{{ winner }}
      </v-card-title>
      <v-card-text class="text-h5">
        <v-col cols="12">
          <v-container class="mb-6">
            <v-row align="start">
              <v-col
                v-for="(n, index) in PlayerAPool"
                cols="3"
                md="2"
                lg="1"
                :key="index"
              >
                <v-card width="4.5rem" class="bg-blue-lighten-1">
                  <v-card-item>
                    <v-card-title class="text-h6 py-5 text-center">{{
                      n
                    }}</v-card-title>
                  </v-card-item>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="12">
          <v-container class="mb-6">
            <v-row align="start">
              <v-col
                v-for="(n, index) in PlayerBPool"
                cols="3"
                md="2"
                lg="1"
                :key="index"
              >
                <v-card width="4.5rem" class="bg-blue-lighten-1">
                  <v-card-item>
                    <v-card-title class="text-h6 py-5 text-center">{{
                      n
                    }}</v-card-title>
                  </v-card-item>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-card-text>
      <v-card-actions>
        <v-spacer>
          <v-btn @click="closeDialog" class="bg-blue-lighten-1">Reset</v-btn>
        </v-spacer>
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
    PlayerAPool() {
      return this.$store.getters.PlayerAPool;
    },
    PlayerBPool() {
      return this.$store.getters.PlayerBPool;
    },
  },
};
</script>

<style></style>
