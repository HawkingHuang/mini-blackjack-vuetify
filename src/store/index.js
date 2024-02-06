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
        "+24",
      ],
      PlayerAPool: [],
      PlayerBPool: [],
      PlayerATotal: 0,
      PlayerBTotal: 0,
      PlayerADisabled: true,
      PlayerBDisabled: false,
      playerAHasDrawn: true,
      playerBHasDrawn: false,
      result: "",
    };
  },
  getters: {
    PlayerAPool(state) {
      return state.PlayerAPool;
    },
    PlayerBPool(state) {
      return state.PlayerBPool;
    },
    dialogVisible(state) {
      return !state.playerAHasDrawn && !state.playerBHasDrawn;
    },
    winner(state) {
      if (
        state.PlayerATotal > state.PlayerBTotal &&
        state.PlayerATotal <= 21 &&
        state.PlayerBTotal <= 21
      ) {
        state.result = `Computer has ${state.PlayerATotal} points, and you have ${state.PlayerBTotal} points. Computer won!`;
      } else if (
        state.PlayerATotal < state.PlayerBTotal &&
        state.PlayerATotal <= 21 &&
        state.PlayerBTotal <= 21
      ) {
        state.result = `Computer has ${state.PlayerATotal} points, and you have ${state.PlayerBTotal} points. You won!`;
      } else if (state.PlayerATotal > 21 && state.PlayerBTotal <= 21) {
        state.result = `Computer has ${state.PlayerATotal} points, and you have ${state.PlayerBTotal} points. You won!`;
      } else if (state.PlayerBTotal > 21 && state.PlayerATotal <= 21) {
        state.result = `Computer has ${state.PlayerATotal} points, and you have ${state.PlayerBTotal} points. Computer won!`;
      } else {
        state.result = `Computer has ${state.PlayerATotal} points, and you have ${state.PlayerBTotal} points. It's a draw!`;
      }
      return state.result;
    },
  },
  mutations: {
    playerAClick(state) {
      const randomIndex = Math.floor(Math.random() * 11);
      const cardValue = state.cardsPool.splice(randomIndex, 1)[0];
      state.PlayerATotal += cardValue;
      state.PlayerAPool.push(cardValue);
    },
    playerBClick(state) {
      state.playerBHasDrawn = true;
      console.log(state.playerBHasDrawn);
      const randomIndex = Math.floor(Math.random() * state.cardsPool.length);
      const cardValue = state.cardsPool.splice(randomIndex, 1)[0];
      if (typeof cardValue === "number") {
        state.PlayerBTotal += cardValue;
      }

      state.PlayerBPool.push(cardValue);
    },
    playerBStop(state) {
      state.playerBHasDrawn = false;
      state.PlayerADisabled = false;
      state.PlayerBDisabled = true;

      const compDrawCard = () => {
        const randomIndex = Math.floor(Math.random() * state.cardsPool.length);
        const cardValue = state.cardsPool.splice(randomIndex, 1)[0];
        if (typeof cardValue === "number") {
          state.PlayerATotal += cardValue;
          state.PlayerADisabled = true;
          setTimeout(() => {
            state.PlayerBDisabled = false;
          }, 2000);
        } else {
          setTimeout(() => {
            drawOrNot();
          }, 2000);
        }
        state.PlayerAPool.push(cardValue);
        state.playerAHasDrawn = true;

        // setTimeout(() => {
        //   drawOrNot();
        // }, 2000);
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
            state.playerAHasDrawn = false;
            console.log(state.playerAHasDrawn);
          }
        } else if (state.PlayerATotal >= 15 && state.PlayerATotal <= 18) {
          const probability = Math.random();
          if (probability < 0.4) {
            compDrawCard();
          } else {
            state.PlayerADisabled = true;
            state.PlayerBDisabled = false;
            state.playerAHasDrawn = false;
            console.log(state.playerAHasDrawn);
          }
        } else {
          const probability = Math.random();
          if (probability < 0.2) {
            compDrawCard();
          } else {
            state.PlayerADisabled = true;
            state.PlayerBDisabled = false;
            state.playerAHasDrawn = false;
            console.log(state.playerAHasDrawn);
          }
        }
      };
      drawOrNot();
    },
    applySpeCard(state, n) {
      if (n === "A3" && state.cardsPool.includes(3)) {
        const index = state.PlayerBPool.indexOf(n);
        state.PlayerBPool.splice(index, 1);
        setTimeout(() => {
          state.PlayerBPool.push(3);
          state.PlayerBTotal += 3;
          const index = state.cardsPool.indexOf(3);
          state.cardsPool.splice(index, 1);
        }, 1000);
      }
      if (n === "A4" && state.cardsPool.includes(4)) {
        const index = state.PlayerBPool.indexOf(n);
        state.PlayerBPool.splice(index, 1);
        setTimeout(() => {
          state.PlayerBPool.push(4);
          state.PlayerBTotal += 4;
          const index = state.cardsPool.indexOf(4);
          state.cardsPool.splice(index, 1);
        }, 1000);
      }
      if (n === "A5" && state.cardsPool.includes(5)) {
        const index = state.PlayerBPool.indexOf(n);
        state.PlayerBPool.splice(index, 1);
        setTimeout(() => {
          state.PlayerBPool.push(5);
          state.PlayerBTotal += 5;
          const index = state.cardsPool.indexOf(5);
          state.cardsPool.splice(index, 1);
        }, 1000);
      }
      if (n === "RL") {
        const index = state.PlayerBPool.indexOf(n);
        state.PlayerBPool.splice(index, 1);
        setTimeout(() => {
          const remCard = state.PlayerBPool.pop();
          if (typeof remCard === "number") {
            state.PlayerBTotal -= remCard;
            state.cardsPool.push(remCard);
            console.log(state.cardsPool);
          } else {
            state.cardsPool.push(remCard);
            console.log(state.cardsPool);
          }
        }, 1000);
      }
    },
    reset(state) {
      state.cardsPool = [
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
        "+24",
      ];
      state.PlayerAPool = [];
      state.PlayerBPool = [];
      state.PlayerATotal = 0;
      state.PlayerBTotal = 0;
      state.PlayerADisabled = true;
      state.PlayerBDisabled = false;
      state.playerAHasDrawn = true;
      state.playerBHasDrawn = false;
      this.commit("playerAClick");
    },
  },
  actions: {},
  modules: {},
});
