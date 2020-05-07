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
	intereses:
}

	hobbies:{
		'futbol',
		'ps4'
	],
peliculas: [

	// JSON -> JAVASCRIPT OBJECT NOTATION 
/* JSON 
LIGERO, INTERCAMBIA DATOS, FACIL ESCRITURA Y LECTURA
{
    NOMBRE: {
        KE:{
        }
    }
}
*/
// TIPO DE DATOS (NUMBER), STRING, BOOL 
// VAR - CONST -> 
var json = {
    nombre: 'kevin',
    edad: 25,
    soltero: true,
    fecha: new Date('1995/02/24'),
}

console.log(json.nombre)
console.log(json['edad'])

json.nombre = 'nuevo'

json.direccion = 'solanda'

console.log(json)

delete json.direccion

console.log(json)

/*
console.error()
console.info()
console.warn()
*/

var json2 = {
    nombre: 'kevin',
    edad: 25,
    soltero: true,
    fecha: new Date('1995/02/24'),
    interese: {
        hobbies: [
            'futbol',
            'ps4'
        ],
        peliculas: [
            {
                nombre: '',
                tipo: '',
                esBuena: true,
            },
            {
                nombre: '',
                tipo: '',
                esBuena: true,
            }
        ]
    },
    familia: [
        {
            nombre: '',
            edad: 1,
        },
        {
            nombre: '',
            edad: 1,
        }
    ]
}

// stringify

var json2String = JSON.stringify(json2)
console.log(json2)
console.log(json2String)

// Parse

var jsonParse = JSON.parse(json2String)
console.log(jsonParse)