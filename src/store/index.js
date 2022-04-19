import { createStore } from "vuex";

export default createStore({
  state: {
    isSignedIn: false,
  },
  getters: {
    getSignStatus: (state) => {
      return state.isSignedIn;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
