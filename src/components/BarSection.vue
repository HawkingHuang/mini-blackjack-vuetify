<template>
  <v-bottom-navigation class="bg-blue-lighten-1">
    <v-btn value="start">
      <v-icon>mdi-star</v-icon>

      <span
        ><a
          href="https://github.com/HawkingHuang/mini-blackjack-vuetify"
          style="text-decoration: none; color: white"
          >GitHub</a
        ></span
      >
    </v-btn>

    <v-btn @click="reset" value="reset">
      <v-icon>mdi-cached</v-icon>

      <span>Reset</span>
    </v-btn>

    <v-btn @click="openDialog" value="rules">
      <v-icon>mdi-information</v-icon>
      <span>Rules</span>
    </v-btn>

    <v-dialog v-model="dialogVisible" class="text-left">
      <v-carousel
        cycle
        height="400"
        show-arrows
        hide-delimiter-background
        class="rounded-xl"
      >
        <template v-slot:prev="{ props }">
          <v-btn
            variant="elevated"
            color="grey-lighten-5"
            @click="props.onClick"
            class="d-none"
            >Previous Rule</v-btn
          >
        </template>
        <template v-slot:next="{ props }">
          <v-btn
            variant="elevated"
            color="grey-lighten-5"
            @click="props.onClick"
            class="d-none"
            >Next Rule</v-btn
          >
        </template>
        <v-carousel-item>
          <v-sheet color="blue-lighten-1" height="100%">
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-body-1 text-md-h5 text-center">
                <p class="mr-2 px-2">
                  &#8544;. There are normal cards 1-11, each represents its
                  literal points.
                </p>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 2rem;
                    margin: 1rem auto;
                  "
                >
                  <v-card width="4.5rem">
                    <v-card-item>
                      <v-card-title class="text-h6 py-5 text-center"
                        >10</v-card-title
                      >
                    </v-card-item>
                  </v-card>
                  <p>&#61;</p>
                  <p>10 points</p>
                </div>
              </div>
            </div>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet color="blue-lighten-1" height="100%">
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-body-1 text-md-h5 text-center">
                <p class="mr-2 px-2">
                  &#8545;. When the game ends, whoever is close to 21 but does
                  not exceed it wins a set.
                </p>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 2rem;
                    margin: 1rem auto;
                  "
                >
                  <v-card width="4.5rem">
                    <v-card-item>
                      <v-card-title class="text-h6 py-5 text-center"
                        >19</v-card-title
                      >
                    </v-card-item>
                  </v-card>
                  <p>&#60;</p>
                  <v-card width="4.5rem">
                    <v-card-item>
                      <v-card-title class="text-h6 py-5 text-center"
                        >21</v-card-title
                      >
                    </v-card-item>
                  </v-card>
                </div>
              </div>
            </div>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet color="blue-lighten-1" height="100%">
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-body-1 text-md-h5 text-center">
                <p class="mr-2 px-2">
                  &#8546;. Card A3-5 (Auto 3-5) can be used to draw a card with
                  that particular points.
                </p>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 2rem;
                    margin: 1rem auto;
                  "
                >
                  <v-card width="4.5rem">
                    <v-card-item>
                      <v-card-title class="text-h6 py-5 text-center"
                        >A5</v-card-title
                      >
                    </v-card-item>
                  </v-card>
                  <p>&#8594;</p>
                  <v-card width="4.5rem">
                    <v-card-item>
                      <v-card-title class="text-h6 py-5 text-center"
                        >5</v-card-title
                      >
                    </v-card-item>
                  </v-card>
                </div>
              </div>
            </div>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet color="blue-lighten-1" height="100%">
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-body-1 text-md-h5 text-center">
                <p class="mr-2 px-2">
                  &#8547;. Use RL (Reverse Last) to remove your last card.
                </p>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 2rem;
                    margin: 1rem auto;
                  "
                >
                  <v-card width="4.5rem">
                    <v-card-item>
                      <v-card-title class="text-h6 py-5 text-center"
                        >11</v-card-title
                      >
                    </v-card-item>
                  </v-card>
                  <p>&#8594;</p>
                  <v-card width="4.5rem">
                    <v-card-item>
                      <v-card-title class="text-h6 py-5 text-center"
                        >&#x21bb;</v-card-title
                      >
                    </v-card-item>
                  </v-card>
                </div>
              </div>
            </div>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet color="blue-lighten-1" height="100%">
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-body-1 text-md-h5 text-center">
                <p class="mr-2 px-2">
                  &#8548;. Use +24 to increase the limit to 24 points.
                </p>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 2rem;
                    margin: 1rem auto;
                  "
                >
                  <v-card width="4.5rem">
                    <v-card-item>
                      <v-card-title class="text-h6 py-5 text-center"
                        >+24</v-card-title
                      >
                    </v-card-item>
                  </v-card>
                  <p>&#8594;</p>
                  <p>New Limit &#61; 24</p>
                </div>
              </div>
            </div>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet color="blue-lighten-1" height="100%">
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-body-1 text-md-h5 text-center">
                <p class="mr-2 px-2">
                  &#8549;. With BS (Best Shot), you can draw a card that is best
                  for you.
                </p>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 2rem;
                    margin: 1rem auto;
                  "
                >
                  <v-card width="4.5rem">
                    <v-card-item>
                      <v-card-title class="text-h6 py-5 text-center"
                        >16</v-card-title
                      >
                    </v-card-item>
                  </v-card>
                  <p>&#8594;</p>
                  <p>Draw</p>
                  <v-card width="4.5rem">
                    <v-card-item>
                      <v-card-title class="text-h6 py-5 text-center"
                        >5</v-card-title
                      >
                    </v-card-item>
                  </v-card>
                </div>
              </div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-dialog>
  </v-bottom-navigation>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    let dialogVisible = ref(false);
    function openDialog() {
      dialogVisible.value = true;
    }
    function reset() {
      store.commit("reset");
    }
    return { dialogVisible, openDialog, reset };
  },
};
</script>

<style></style>
