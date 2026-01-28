console.log("holi linea 1")

// aqui se llama a la funcion llamada "saludo" la cual fue declarada lineas abajo, cuando la cascada llega a este llamado se detiene, busca en que parte del fichero fue declarada la funcion, la ejecuta y luego continua con la lectura del resto de la cascada
saludo();



console.log("eso se ejecutara despues de la funcion de abajo")

// la declaracion de una funcion esta estructurada de la siguiente manera y orden:
//      1)palabra reservada function
//      2)nombre de la funcion
//      3)parentesis que recibiran (o no) los parametros
//      4)seguido de llaves, que es donde ejecutaremos nuestras acciones, en este caos imprimir en consola

// las funciones declaradas con la palabra reservada "function" pueden saltarse la cascada, ya que estas se declaran en cualquier parte del fichero y se llaman en cualquier otra parte del fichero, la funcion siempre se ejecutara en lo que la cascada llegue al llamado

function saludo() {
    console.log("holi linea 6")
}


////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////funciones de flecha/////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////



// si queremos crear una funcion de flecha primero tenemos declarra una variable, en este caso toca llamar a la variable despues de la declaracion y a la variable se le asigna la funcion de flecha
const otro = () => {
    console.log("funcion de flecha")
}
otro();

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////funciones con parametros///////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

let numeroA=4;
let numeroB=5
suma( numeroA, numeroB);

function suma(numA, numB){
    numA=numB+3;
    console.log(numA+ numB)
}
console.log(numeroA)