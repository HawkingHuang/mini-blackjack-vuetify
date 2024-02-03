import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      cardsPool: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        "RL",
        "RL",
        "A3",
        "A4",
        "A5",
      ],
      PlayerAPool: [],
      PlayerBPool: [],
      PlayerATotal: 0,
      PlayerBTotal: 0,
      PlayerADisabled: true,
      PlayerBDisabled: false,
    };
  },
  getters: {
    PlayerAPool(state) {
      return state.PlayerAPool;
    },
    PlayerBPool(state) {
      return state.PlayerBPool;
    },
  },
  mutations: {
    playerBClick(state) {
      const randomIndex = Math.floor(Math.random() * state.cardsPool.length);
      const cardValue = state.cardsPool.splice(randomIndex, 1)[0];
      if (typeof cardValue === "number") {
        state.PlayerBTotal += cardValue;
      }

      state.PlayerBPool.push(cardValue);
    },
    playerBStop(state) {
      state.PlayerADisabled = false;
      state.PlayerBDisabled = true;

      const compDrawCard = () => {
        const randomIndex = Math.floor(Math.random() * state.cardsPool.length);
        const cardValue = state.cardsPool.splice(randomIndex, 1)[0];
        if (typeof cardValue === "number") {
          state.PlayerATotal += cardValue;
        }
        state.PlayerAPool.push(cardValue);

        setTimeout(() => {
          drawOrNot();
        }, 2000);
      };

      const drawOrNot = () => {
        if (state.PlayerATotal <= 11) {
          compDrawCard();
        } else if (state.PlayerATotal > 11 && state.PlayerATotal < 15) {
          const probability = Math.random();
          if (probability < 0.8) {
            compDrawCard();
          } else {
            state.PlayerADisabled = true;
            state.PlayerBDisabled = false;
          }
        } else if (state.PlayerATotal > 15 && state.PlayerATotal < 18) {
          const probability = Math.random();
          if (probability < 0.4) {
            compDrawCard();
          } else {
            state.PlayerADisabled = true;
            state.PlayerBDisabled = false;
          }
        } else {
          const probability = Math.random();
          if (probability < 0.2) {
            compDrawCard();
          } else {
            state.PlayerADisabled = true;
            state.PlayerBDisabled = false;
          }
        }
      };
      drawOrNot();
    },
    // changePlayerBStatus(state) {
    //   state.PlayerBDisabled = true;
    // },
  },
  actions: {},
  modules: {},
});
