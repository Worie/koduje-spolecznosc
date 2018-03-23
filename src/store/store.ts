
import Vue from 'vue'
import Vuex, { Module } from 'vuex';

import applicationModule, { ApplicationState } from './modules/application';
import { EISCONN } from 'constants';

export interface IStoreRootState {
  application: ApplicationState;
}

Vue.use(Vuex);

export default new Vuex.Store<IStoreRootState>({
  modules: {
    application: applicationModule,
  },
});