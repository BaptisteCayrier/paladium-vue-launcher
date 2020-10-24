import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      name: 'Fugulen',
      email: 'baptiste611@hotmail.fr',
      options: {
        maxRam: 3,
        minRam: 3,
      },
    },
  },
  mutations: {
    setUser(state, user) {
      state.currentUser = user;
    },
    setMaxRam(state, maxRam) {
      state.maxRam = maxRam;
    },
    setMinRam(state, minRam) {
      state.minRam = minRam;
    },
  },
});
