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
        "DB",
        "DB",
        "A3",
        "A4",
        "A5",
        "A6",
      ],
      PlayerAPool: [],
      PlayerBPool: [],
      PlayerATotal: 0,
      PlayerBTotal: 0,
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
      const randomIndex = Math.floor(Math.random() * state.cardsPool.length);
      const cardValue = state.cardsPool.splice(randomIndex, 1)[0];
      // this.totalA += cardValue;

      state.PlayerAPool.push(cardValue);
    },
  },
  actions: {},
  modules: {},
});
