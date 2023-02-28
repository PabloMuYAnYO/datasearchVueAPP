<template>
	<div>
		<div class="form">
			<div class="title">Mostrar Datos</div>
			<div class="subtitle">Mostrando todos los datos!</div>
			
			<div id="datos">
			<p v-if="$store.state.array.length == 0 ">No hay Valores en el Array</p>

			<section v-if="$store.state.array.length > 0 ">
				
				<div class="target" v-for="data in $store.state.array" :key="data">
					<hr>
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
  name: 'ShowForm',
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

#datos
	color: #fff

</style>
