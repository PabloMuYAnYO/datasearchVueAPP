<template>
	<div>
		<div class="form">
			<div class="title">Buscar Datos</div>
			<div class="subtitle">Busca tus datos!</div>
			<div class="input-container ic1">
				<input id="firstname" class="input" type="text" placeholder=" " v-model="$store.state.buscar"/>
				<div class="cut"></div>
				<label for="firstname" class="placeholder">Nombre, apellidos o edad</label>
			</div>
			<button class="submit" v-on:click="buscar()">Buscar</button>
			<div class="mostrar">
            <p v-if="$store.state.array.length == 0 ">No hay datos para Buscar</p>

				<section v-if="$store.state.array.length > 0 ">

					<div class="target" v-for="data in $store.state.searches" :key="data">
						<p class="name">Nombre: {{ data.nombre }}</p>
						<p class="ape">Apellidos: {{ data.apellido }}</p>
						<p class="edad">Edad: {{ data.edad}}</p>
					</div>
				</section>
        </div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'SearchForm',
  methods:{
    buscar(){
        this.$store.dispatch('acctionsearchperson')
    }
}
}
</script>

<style lang="sass" scoped>

body 
	align-items: center 
	background-color: #000 
	display: flex 
	justify-content: center 
	height: 100vh 
.form 
	margin-left: 1rem
	background-color: #15172b 
	box-shadow: 2px 2px 3px black
	border-radius: 20px 
	box-sizing: border-box 
	height: 500px 
	padding: 20px 
	width: 320px 
.title 
	color: #eee 
	font-family: sans-serif 
	font-size: 36px 
	font-weight: 600 
	margin-top: 30px 
.subtitle 
	color: #eee 
	font-family: sans-serif 
	font-size: 16px 
	font-weight: 600 
	margin-top: 10px 
.input-container 
	height: 50px 
	position: relative 
	width: 100% 
.ic1 
	margin-top: 40px 
.input 
	background-color: #303245 
	border-radius: 12px 
	border: 0 
	box-sizing: border-box 
	color: #eee 
	font-size: 18px 
	height: 100% 
	outline: 0 
	padding: 4px 20px 0 
	width: 100% 
	&:not(:placeholder-shown) 
		& ~ .placeholder 
			color: #808097 
	&:focus 
		& ~ .placeholder 
			color: #dc2f55 
.cut 
	background-color: #15172b 
	border-radius: 10px 
	height: 20px 
	left: 20px 
	position: absolute 
	top: -20px 
	transform: translateY(0) 
	transition: transform 200ms 
	width: 155px 
.cut-short 
	width: 50px 
.input:focus ~ .cut,
.input:not(:placeholder-shown) ~ .cut 
	transform: translateY(8px) 
.placeholder 
	color: #65657b 
	font-family: sans-serif 
	left: 20px 
	line-height: 14px 
	pointer-events: none 
	position: absolute 
	transform-origin: 0 50% 
	transition: transform 200ms, color 200ms 
	top: 20px 
.input:focus ~ .placeholder,
.input:not(:placeholder-shown) ~ .placeholder 
	transform: translateY(-30px) translateX(10px) scale(0.75) 
.submit 
	background-color: #ff8000 
	border-radius: 12px 
	border: 0 
	box-sizing: border-box 
	color: #eee 
	cursor: pointer 
	font-size: 18px 
	height: 50px 
	margin-top: 38px 
	// outline: 0 
	text-align: center 
	width: 100% 
	&:active 
		background-color: #ff8040 

.mostar
	color: #fff
p
	color: #fff

</style>
