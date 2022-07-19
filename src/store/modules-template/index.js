//se import en el store

import state from './state/'
import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'

const myCustomModule = {
    namespaced: true,
    getters,
    actions,
    mutations,
    state
}

export default myCustomModule