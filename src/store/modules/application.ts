import * as Vuex from 'vuex';

import { IStoreRootState } from '../store';

export interface ApplicationState {
  test: string;
}

const applicationModule: Vuex.Module<ApplicationState, IStoreRootState> = {
  state: {
    test: 'initial',
  },
  mutations: {
    /**
     * 
     * @param state 
     * @param payload 
     */
    SET_TEST_STATE(state: ApplicationState, payload: { test }) {
      state.test = payload.test;
    },
  },
  getters: {
    test(state) {
      return state.test;
    }
  },
  actions: {
    /**
     * 
     */
    setTest(context, payload: { test: string }) {
      context.commit('SET_TEST_STATE', payload);
    },
  },
}

export default applicationModule;