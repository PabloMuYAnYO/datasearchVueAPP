import { createStore } from 'vuex'

export default createStore({
  state: {
    array: [],
    nombre: '',
    apellido: '',
    edad: '',
    buscar: '',
    searches: ''
  },
  getters: {
  },
  mutations: {

    addperson( state ){
      state.array.push({nombre: state.nombre, apellido: state.apellido, edad: state.edad}),
      state.nombre = '',
      state.apellido = '',
      state.edad = ''
    },
    searchperson( state ){
      let res = state.array.filter(elemento => elemento.nombre == state.buscar || elemento.apellido == state.buscar || elemento.edad == state.buscar)
      //console.log(res)
      state.searches = res
    },

  },
  actions: {

    acctionaddperson( context ){
      context.commit('addperson');
    },
    acctionsearchperson( context ){
      context.commit('searchperson');
    },

  },
  modules: {
  }
})
