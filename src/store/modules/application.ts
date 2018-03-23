import * as Vuex from 'vuex';

import { IStoreRootState } from '../store';

export interface ApplicationState {
  cardFilter: string;
  typeFilter: string | null;
}

const applicationModule: Vuex.Module<ApplicationState, IStoreRootState> = {
  state: {
    cardFilter: '',
    typeFilter: null,
  },
  mutations: {
    /**
     * 
     * @param state 
     * @param payload 
     */
    SET_CARD_FILTER(state: ApplicationState, payload: { cardFilter: string }) {
      state.cardFilter = payload.cardFilter;
    },
    SET_TYPE_FILTER(state: ApplicationState, payload: { typeFilter: string }) {
      state.typeFilter = payload.typeFilter;
    },
  },
  getters: {
    cardFilter(state) {
      return state.cardFilter;
    },
    typeFilter(state) {
      return state.typeFilter;
    }
  },
  actions: {
    /**
     * 
     */
    setCardFilter(context, payload: { cardFilter: string }) {
      context.commit('SET_CARD_FILTER', payload);
    },
    setTypeFilter(context, payload: { typeFilter: string }) {
      context.commit('SET_TYPE_FILTER', payload);
    },
  },
}

export default applicationModule;