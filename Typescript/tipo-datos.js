// tipo datos
var nombre = 'kevin';
var numero = 1;
var Bool = true;
var objetoUsuario = {
    nombre: 'kevin'
};
// arreglos
var arregloUno = [];
var arregloDos = [];
// varios tipados
var nombreDos = 1;
var arregl1 = [];
var arreglo2 = [];
var variableLet;
var variableConts = 1;
// any
var cualquierVariable;
function sumar(num1, num2) {
    var a = 2;
    var b = 3;
    if (num1) {
        a = num1;
    }
    if (num2) {
        b = num2;
    }
    return a + b;
}
;
sumar(5, 5);
sumar(5);
sumar();
console.log(sumar(5, 5));
console.log(sumar(5));
console.log(sumar());
