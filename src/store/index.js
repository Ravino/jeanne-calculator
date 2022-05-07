import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const computeBank = (amount, dayInYear, dayInSlice, percent) => {
  const percentYear = ((amount / 100) * percent);
  const percentDay = ((percentYear / dayInYear) * dayInSlice);
  return percentDay;
};

export default new Vuex.Store({
  state: {
    listBanks: [],
    amount: 0,
    dayInYear: 365,
    dayInSlice: 0,
  },
  getters: {},
  mutations: {
    addBank: (state, data) => {
      state.listBanks.push(data);
      return undefined;
    },
    removeBank: (state, position) => {
      state.listBanks.splice(position, 1);
      return undefined;
    },
    changeDayInYear: (state, data) => {
      state.dayInYear = data;
      return undefined;
    },
    changeDayInSlice: (state, data) => {
      state.dayInSlice = data;
      return undefined;
    },
    changeAmount: (state, data) => {
      state.amount = data;
      return undefined;
    },
    computeBanks: (state) => {
      const Amount = state.amount;
      const DayInYear = state.dayInYear;
      const DayInSlice = state.dayInSlice;

      for (let i = 0; i < state.listBanks.length; i += 1) {
        const bank = state.listBanks[i];
        state.listBanks[i].minAmount = computeBank(Amount, DayInYear, DayInSlice, bank.minPercent);
        state.listBanks[i].maxAmount = computeBank(Amount, DayInYear, DayInSlice, bank.maxPercent);
      }
      return undefined;
    },
  },
  actions: {
  },
  modules: {},
});
