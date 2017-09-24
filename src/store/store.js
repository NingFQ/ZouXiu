import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex );

const state = {
	cartList : []	
}
const mutations = {
	addCart(state,good_info){
		state.cartList.push(good_info);
	}
}

const actions = {
	addCart({commit},good_info){
		console.log(this.state.cartList)
		return commit('addCart',good_info)
	}
}

const getters = {
	
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
