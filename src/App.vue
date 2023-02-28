<template>
  <div id="contenedor-nav">
    <nav>
      <router-link to="/">Insertar Datos</router-link> |
      <router-link to="/search_data">Buscar</router-link> |
      <router-link to="/show_data">Mostrar</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="sass">
body
  background: #15172b

#contenedor-nav
  display: flex
  flex-direction: column
  justify-content: space-around
  height: 71vh

#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
//   display: flex
//   justify-content: center
//   align-items: center
//   color: #2c3e50

#contenedor-nav nav
    margin-left: 9.5%
    a 
      font-weight: bold
      color: #fff
      margin-left: 7px

      &.router-link-exact-active 
        color: #42b983

</style>
