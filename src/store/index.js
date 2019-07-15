import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import todo from './modules/todo'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
      todo,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
  })