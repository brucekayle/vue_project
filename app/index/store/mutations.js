import Vue from 'vue'

export default {
  /* 修改面包屑 */
  updateBreadcrumbs: (state, { icon, one, two }) => {
    state.breadcrumb_ico = icon,
    state.breadcrumb_one = one,
    state.breadcrumb_two = two
  },

  switchLeftSidebar: (state, { status }) => {
    if(state.leftSidebarStatus == ''){
      state.leftSidebarStatus = status
    }else{
      state.leftSidebarStatus = ''
    }
  },
    

  SET_ACTIVE_TYPE: (state, { type }) => {
    state.activeType = type
  },

  SET_LIST: (state, { type, ids }) => {
    state.lists[type] = ids
  },

  SET_ITEMS: (state, { items }) => {
    items.forEach(item => {
      if (item) {
        Vue.set(state.items, item.id, item)
      }
    })
  },

  SET_USER: (state, { id, user }) => {
    Vue.set(state.users, id, user || false) /* false means user not found */
  }
}
