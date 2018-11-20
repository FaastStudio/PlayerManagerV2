/* eslint-disable no-unused-expressions */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      token: null
    },
    user: {
      authenticated: false,
      uid: null,
      first: 'User'
    },
    data: {
      playerArray: [],
      myPlayerCount: 0
    }
  },
  mutations: {
    setToken (state, token) {
      // set Token
      state.auth.token = token
      state.user.authenticated = true
    },
    setUserId (state, userId) {
      // set UserID
      state.user.uid = userId
    },
    setFirstName (state, first) {
      // set UserID
      state.user.first = first
    },
    // Store all Players from Dashboard/playerlist
    setPlayerArray (state, array) {
      state.data.playerArray = array
    },
    setPlayerCount (state, count) {
      state.data.myPlayerCount = count
    },
    logout (state) {
      state.auth.token = null
      state.user.authenticated = false
      state.user.uid = null
      state.data.playerArray = null
    }
  },
  actions: {
    checkAuth () {
      var jwt = this.state.auth.token
      if (jwt) {
        this.state.user.authenticated = true
      } else {
        this.state.user.authenticated = false
      }
    }
  }
})
