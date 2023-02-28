# datasearch APP con Vuex y Vue router

> Ejercicio de modulo DAW en asignatura de DESARROLLO WEB EN ENTORNO CLIENTE.
Se trata de una aplicación de con Vue usando las herramientas que nos proporciona Vue js.

El enunciado dice así:
> > Hacer una aplicación web que muestre en la interfaz un formulario con los siguientes campos: un buscador, un botón para buscar, un campo para introducir el nombre, otro para apellidos, y otro para edad y un botón para enviar los datos.
> 
> > Los datos deben mostrarse para dispositivo movil, es decir, que el diseño está pensado para usarlo sólo en dispositivo movil, tal y como se muestra en el vídeo.
> 
> > Cuando el usuario haga click en el botón para enviar los datos, los datos se almacenan en un array de objetos, que al principio está vacío, pero se va llenando con los datos que el usuario vaya introduciendo. Cada objeto literal dentro del array debe tener los siguientes campos: nombre, apellidos y edad, los mismos que el formulario.
> 
> > Ahora, si el usuario en lugar de introducir datos quisiera buscarlos, puede usar el buscador. Al escribir un nombre, un apellido o una edad en el buscador, deben mostrarse todos los datos relacionados en la interfaz, usando la función filter de javascript para buscar. En caso de no encontrar los datos buscados, mostraría el siguiente mensaje: No hay datos que mostrar.
> 
> > Y Por último si el usuario quisiera simplemente mostrar los datos que ya hay almacenadoe en el array, le daría al  botón de mostrar, en caso de no haber datos todavía, mostraría el siguiente mensaje: No hay datos que mostrar.
> 
> > Es obligatorio usar funciones, de tipo flecha. No debe haber código a nivel global, salvo la inicialización del array.
> 
> > Tanto al hacer clic en el botón de buscar como el de insertar, se deben resetear los campos.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
