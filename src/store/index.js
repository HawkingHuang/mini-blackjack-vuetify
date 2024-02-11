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
        "BS",
        "BS",
      ],
      PlayerAPool: [],
      PlayerBPool: [],
      PlayerATotal: 0,
      PlayerBTotal: 0,
      PlayerADisabled: true,
      PlayerBDisabled: false,
      playerAHasDrawn: true,
      playerBHasDrawn: false,
      limit: 21,
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
        state.PlayerATotal <= state.limit &&
        state.PlayerBTotal <= state.limit
      ) {
        state.result = `${state.PlayerATotal} : ${state.PlayerBTotal} Computer won!`;
      } else if (
        state.PlayerATotal < state.PlayerBTotal &&
        state.PlayerATotal <= state.limit &&
        state.PlayerBTotal <= state.limit
      ) {
        state.result = `${state.PlayerATotal} : ${state.PlayerBTotal} You won!`;
      } else if (
        state.PlayerATotal > state.limit &&
        state.PlayerBTotal <= state.limit
      ) {
        state.result = `${state.PlayerATotal} : ${state.PlayerBTotal} You won!`;
      } else if (
        state.PlayerBTotal > state.limit &&
        state.PlayerATotal <= state.limit
      ) {
        state.result = `${state.PlayerATotal} : ${state.PlayerBTotal} Computer won!`;
      } else {
        state.result = `${state.PlayerATotal} : ${state.PlayerBTotal} It's a draw!`;
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
          state.PlayerAPool.push(cardValue);
          state.PlayerATotal += cardValue;
          state.PlayerADisabled = true;
          console.log(state.PlayerAPool);
          setTimeout(() => {
            compAppSpeCard();
            state.PlayerBDisabled = false;
            console.log(state.PlayerAPool);
            console.log(state.cardsPool);
          }, 2000);
        } else {
          state.PlayerAPool.push(cardValue);
          setTimeout(() => {
            drawOrNot();
          }, 2000);
        }
        state.playerAHasDrawn = true;
      };

      const compAppSpeCard = () => {
        if (state.PlayerATotal > 21) {
          if (state.PlayerAPool.includes("+24")) {
            const index = state.PlayerBPool.indexOf("+24");
            state.PlayerAPool.splice(index, 1);
            state.limit = 24;
          }
          if (state.PlayerAPool.includes("RL")) {
            const index = state.PlayerAPool.indexOf("RL");
            state.PlayerAPool.splice(index, 1);
            setTimeout(() => {
              const remCard = state.PlayerAPool.pop();
              if (typeof remCard === "number") {
                state.PlayerATotal -= remCard;
                state.cardsPool.push(remCard);
              } else {
                state.cardsPool.push(remCard);
              }
            }, 2000);
          }
        }

        if (state.PlayerATotal > 10) {
          // if (state.PlayerAPool.includes("BS")) {
          //   const index = state.PlayerAPool.indexOf("BS");
          //   state.PlayerAPool.splice(index, 1);
          //   setTimeout(() => {
          //     for (let limit = 21; limit > state.PlayerATotal; limit--) {
          //       if (state.cardsPool.includes(limit - state.PlayerATotal)) {
          //         state.PlayerAPool.push(limit - state.PlayerATotal);
          //         state.PlayerATotal += limit - state.PlayerATotal;
          //         const index = state.cardsPool.indexOf(
          //           limit - state.PlayerATotal
          //         );
          //         state.cardsPool.splice(index, 1);
          //       }
          //     }
          //   }, 1000);
          // }
          if (
            state.PlayerAPool.includes("A5") &&
            state.cardsPool.includes(5) &&
            state.PlayerATotal <= 16
          ) {
            const index = state.PlayerAPool.indexOf("A5");
            state.PlayerAPool.splice(index, 1);
            setTimeout(() => {
              state.PlayerAPool.push(5);
              state.PlayerATotal += 5;
              const index = state.cardsPool.indexOf(5);
              state.cardsPool.splice(index, 1);
            }, 2000);
          }
          if (
            state.PlayerAPool.includes("A4") &&
            state.cardsPool.includes(4) &&
            state.PlayerATotal <= 17
          ) {
            const index = state.PlayerAPool.indexOf("A4");
            state.PlayerAPool.splice(index, 1);
            setTimeout(() => {
              state.PlayerAPool.push(4);
              state.PlayerATotal += 4;
              const index = state.cardsPool.indexOf(4);
              state.cardsPool.splice(index, 1);
            }, 2000);
          }
          if (
            state.PlayerAPool.includes("A3") &&
            state.cardsPool.includes(3) &&
            state.PlayerATotal <= 18
          ) {
            const index = state.PlayerAPool.indexOf("A3");
            state.PlayerAPool.splice(index, 1);
            setTimeout(() => {
              state.PlayerAPool.push(3);
              state.PlayerATotal += 3;
              const index = state.cardsPool.indexOf(3);
              state.cardsPool.splice(index, 1);
            }, 2000);
          }
        }
      };

      const drawOrNot = () => {
        if (
          (state.limit === 21 && state.PlayerBTotal > 21) ||
          (state.limit === 21 && state.PlayerATotal === 21)
        ) {
          state.PlayerADisabled = true;
          state.PlayerBDisabled = false;
          state.playerAHasDrawn = false;
        } else if (
          (state.limit === 24 && state.PlayerBTotal > 24) ||
          (state.limit === 24 && state.PlayerATotal === 24)
        ) {
          state.PlayerADisabled = true;
          state.PlayerBDisabled = false;
          state.playerAHasDrawn = false;
        } else if (state.PlayerATotal <= 10) {
          compDrawCard();
        } else if (state.PlayerATotal > 10 && state.PlayerATotal < 15) {
          const probability = Math.random();
          if (probability < 0.8) {
            compDrawCard();
          } else {
            state.PlayerADisabled = true;
            state.PlayerBDisabled = false;
            state.playerAHasDrawn = false;
          }
        } else if (state.PlayerATotal >= 15 && state.PlayerATotal <= 18) {
          const probability = Math.random();
          if (probability < 0.4) {
            compDrawCard();
          } else {
            state.PlayerADisabled = true;
            state.PlayerBDisabled = false;
            state.playerAHasDrawn = false;
          }
        } else {
          const probability = Math.random();
          if (probability < 0.2) {
            compDrawCard();
          } else {
            state.PlayerADisabled = true;
            state.PlayerBDisabled = false;
            state.playerAHasDrawn = false;
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
      if (n === "+24") {
        const index = state.PlayerBPool.indexOf(n);
        state.PlayerBPool.splice(index, 1);
        state.limit = 24;
      }
      if (n === "BS") {
        const index = state.PlayerBPool.indexOf(n);
        state.PlayerBPool.splice(index, 1);
        if (state.limit === 21) {
          if (state.PlayerBTotal <= 10 && state.cardsPool.includes(11)) {
            setTimeout(() => {
              state.PlayerBPool.push(11);
              state.PlayerBTotal += 11;
              const index = state.cardsPool.indexOf(11);
              state.cardsPool.splice(index, 1);
            }, 1000);
          }
          if (state.PlayerBTotal > 10) {
            setTimeout(() => {
              for (let limit = 21; limit > state.PlayerBTotal; limit--) {
                if (state.cardsPool.includes(limit - state.PlayerBTotal)) {
                  state.PlayerBPool.push(limit - state.PlayerBTotal);
                  state.PlayerBTotal += limit - state.PlayerBTotal;
                  const index = state.cardsPool.indexOf(
                    limit - state.PlayerBTotal
                  );
                  state.cardsPool.splice(index, 1);
                }
              }
            }, 1000);
          }
        }
        if (state.limit === 24) {
          if (state.PlayerBTotal <= 13 && state.cardsPool.includes(11)) {
            setTimeout(() => {
              state.PlayerBPool.push(11);
              state.PlayerBTotal += 11;
              const index = state.cardsPool.indexOf(11);
              state.cardsPool.splice(index, 1);
            }, 1000);
          }
          if (state.PlayerBTotal > 13) {
            setTimeout(() => {
              for (let limit = 24; limit > state.PlayerBTotal; limit--) {
                if (state.cardsPool.includes(limit - state.PlayerBTotal)) {
                  state.PlayerBPool.push(limit - state.PlayerBTotal);
                  state.PlayerBTotal += limit - state.PlayerBTotal;
                  const index = state.cardsPool.indexOf(
                    limit - state.PlayerBTotal
                  );
                  state.cardsPool.splice(index, 1);
                }
              }
            }, 1000);
          }
        }
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
        "BS",
        "BS",
      ];
      state.PlayerAPool = [];
      state.PlayerBPool = [];
      state.PlayerATotal = 0;
      state.PlayerBTotal = 0;
      state.PlayerADisabled = true;
      state.PlayerBDisabled = false;
      setTimeout(() => {
        state.playerAHasDrawn = true;
        state.playerBHasDrawn = false;
        this.commit("playerAClick");
      }, 500);
    },
  },
  actions: {},
  modules: {},
});
