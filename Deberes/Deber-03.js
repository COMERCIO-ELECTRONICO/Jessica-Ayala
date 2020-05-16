var arreglo = [
    {nombre: 'kevin',       //se crea nuevo array con datos personales
    edad: 25,
    fecha: new Date('1995/02/24'),
    telf: "0999999999"}
]

function crearUsuario (arreglo,usuario,cb){        //funcion para crear un usuario
    if (arreglo == usuario){                           // compara si el usuario que ingreso es igual al array
        cb({                                          // guarda informacion al callback
            mensaje: 'usuario existe',                 //envia mensaje "usuario existe"
            arreglo                                    // envio arreglo
        })
    }else{                                             // caso contrario a la condicion
        arreglo.push(usuario);                               // agrega el usuario al array
        cb({
            mensaje: 'usuario ingresado correctamente',      
            arreglo
        })
    }
}

var usuario = {nombre: 'jessy',                           // crea el array de usuario
edad: 22,
fecha: new Date('1997/10/20'),
telf: "0999999998"}

crearUsuario(arreglo,usuario,(respuestaMensaje) => {       // llama a la funcion "crear usuario" y genera una funcion del callback
    console.log(respuestaMensaje);                          // imprime informacion del callback
})

function editarUsuario(arreglo,usuario,ind,cb){             //  Crea la funcion editar usuario 
    arreglo[ind]=usuario;                                    // reemplaza en el array por el usuario
    cb({
        mensaje: 'usuario a sido cambiado',
        arreglo
    })
}

var usuario2 = {nombre: 'maria',                               // crea el array usuario 2
edad: 28,
fecha: new Date('1992/08/10'),
telf: "0999997998"}

editarUsuario(arreglo,usuario2,1,(respuestaMensaje) => {        // llama a la funcion editar usuario y genera la funcion callback
    console.log(respuestaMensaje);                               // imprime la informacion del callback 
})

function eliminarUsuario(arreglo,ind,cb){                        // crea la funcion eliminar usuario
    var i = arreglo.indexOf( ind );                              // en la variable i obtengo el array del indice 
    if ( i !== -1 ) {                                             // si el arreglo existe mandara un valor positivo, por el cual pongo un if para ver si existe ese indice
        arreglo.splice( i, 1 );                                  // con splice elimino el array de aquel indice
        cb({
            mensaje: 'usuario a sido eliminado',
            arreglo
        })
    }else{
        cb({
            mensaje: 'no existe indice',
            arreglo
        })
    }
    
}

eliminarUsuario(arreglo,1,(respuestaMensaje) => {                // llamo a la funcion eliminar usuario con su callback 
    console.log(respuestaMensaje);                               // imprime la informacion del callback
})

function listarUsuario(arreglo, cb) {                          // crea la funcion listar usuario
    arreglo                                                  // dentro del arreglo 
        .forEach(                                            // recorre ese arreglo con forEach
            usuario => {                                     // el item del arreglo se llama usuario 
                console.log(usuario);                        // imprime el item
            });
    cb({                                                           // guarda en el callback un mensaje
        mensaje: 'lista de usuario'
    })
}

listarUsuario(arreglo, (respuestaMensaje) => {                   // llama a la funcion listar usuario 
    console.log(respuestaMensaje);                                // imprime informacion del callback
})