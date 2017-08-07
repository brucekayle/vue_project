import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import 'babel-polyfill'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      serverUrl: "http://localhost/ptt/",
      leftSidebarStatus: "",
      breadcrumb_ico: "fa fa-home",
      breadcrumb_one: "首页",
      breadcrumb_two: "",
      activeType: null,
      itemsPerPage: 20,
      items: {/* [id: number]: Item */},
      users: {/* [id: string]: User */},
      lists: {
        top: [/* number */],
        new: [],
        show: [],
        ask: [],
        job: []
      }
    },
    mutations,
    getters
  })
}
