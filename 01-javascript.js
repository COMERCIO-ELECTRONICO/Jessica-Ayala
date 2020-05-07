// JSON -> JAVASCRIPT OBJECT NOTATION
/* JSON
LIGERO INTERCAMBIA DATOS, FACIL ESCRITURA Y LECTURA
{
	NOMBRE:{
		KE:{

		}
	}
}
*/
// TIPO DE DATOS (NUMBER), STRING, BOOL:
// VAR - CONST ->
var json = {
	nombre: 'Jessy',
	edad: 22,
	soltero: true,
	fecha: new Date(1997-10-20),
}

// JSON -> JAVASCRIPT OBJECT NOTATION
/* JSON
LIGERO INTERCAMBIA DATOS, FACIL ESCRITURA Y LECTURA
{
	NOMBRE:{
		JE:{

		}
	}
}
*/
// TIPO DE DATOS (NUMBER), STRING, BOOL:
// VAR - CONST ->
var json = {
	nombre: 'jessy',
	edad: 22,
	soltero: true,
	fecha: new Date('1997/10/20'),
}

console.log(json.nombre)
console.log(json['edad'])

json.nombre = 'nuevo'

json.direccion = 'San Carlos'

delete json.direccion

console.log(json)
/*console.error()
console.info()
console.warn()*/