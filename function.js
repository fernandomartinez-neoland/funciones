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

let numeroA = 4;
let numeroB = 5
// a las funciones se le pueden enviar datos (valores string, numericos, booleanos, etc, incluso otras funciones... pero eso de enviar funciones como parametros lo veremos en otra clase jeje... <inserte emoji malvado>)
// en este caso enviaremos 2 variables, cada variable tiene su valor, la funcion recibira directamente el valor de cada variable y se lo asignara a una variable interna (las variables que se encuentran dentro del parentesis, en el mismo orden en el que son enviadas)
suma(numeroA, numeroB);


// al declarar una funcion, se pueden declarar variables dentro de los paremetros
// estas variables cumplen con las siguientes condiciones especiales:
//      1) no requieren de const o let para ser declaradas
//      2) estas se les puede asignar un valor inicial que cambiara en cuanto reciban un valor desde la llamada
//      3) esta variable existe UNICA Y EXCLUSIVAMENTE dentro de la funcion, es decir que solo se puede usar dentro de la funcion, al terminar la funcion esta funcion muere, deja de existir y si intentas usarla fuera de la funcion te saldra un error indicando que la variable no ha sido definida
//      4) aunque llames a la variable con el mismo nombre que la variable variable que enviaste durante el llamado de la funcion, se tratan como 2 objetos separados, de igual manera que aunque 2 personas tengan el mismo modelo de telefono, ambos son objetos diferentes, asi mismo como cuando en un trabajo el jefe te usa como recadero
function suma(numA, numB) {
    numA = numB + 3;
    console.log(numA + numB)
}


////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////funciones con retorno///////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

const nombre = "fernando"
const apellido = "martinez"


function cadena(name, apellido) {
    // las funciones con retorno usan la palabra reservada "return" para devolver un valor cada que se les llama, esta usa generalmente cuadno queremos hacer una especie de transaccion de informacion, digase que le damos algo a la funcion y esta nos retorna algun valor, como cuando vas a comprar algo, el parametro es el dinero y el retorno es el producto o servicio
    // en este caso la funcion solicita un nombre y un apellido como pago y retorna un texto
    // nombre esta representado por la variable INTERNA llamada "name" y aunque la variable INTERNA diga apellido como la externa, NO son la misma variable, esta solo recibe el valor de la externa
    return "el nombre es: " + name + " " + apellido
}

// aqui llamamos a la funcion "cadena" y como parametro le enviamos 2 variables, "nombre" y "apellido", cada una tiene un valor propio y este valor es lo que esta recibiendo la funcion
// en este caso le asignamos la funcion a imprimir ya que esta tiene como valor lo que se encuentra en su "return"
const imprimir = cadena(nombre, apellido)

// para comprobar imprimimos la variable que contiene a la funcion y esta debe imprimir el valor de la funcion
// asi como podemos decir "variable=funcion" podemos usar a la funcion de la misma manera en la que se usa una variable comun y corriente, con lo cual "console.log(imprimir)" es lo mismo que decir "console.log(cadena(nombre, apellido))"
console.log(imprimir)


////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//////////////funciones llamada desde el html///////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

// esta funcion recibe como parametro, todos los eventos provenientes del formulario y los almacena en la variable "e", que usamos para referirnos a "event"

function enviar(e) {
    //  usamos "e.preventDefault();" para evitar que el formulario al enviarse refresque la pantalla
    e.preventDefault();

    // aprovechando la variable "e", usamos la propiedad "target" para hacer referencia a objetivo o seleccion de un elemento, seguido del nombre del elemento (nombre que colocamos en html en la propiedad "name"), por utimo capturamos el valor con "value"
    // recordar que todos los valores capturados de cualquier tipo de input pasan a ser automaticamente de tipo texto, con lo cual al sumarlos se hace una concatenación y es por eso que usamo el parseInt en este caso, para poder sumar ambos numeros
    const numA=parseInt(e.target.numA.value) 
    const numB=parseInt(e.target.numB.value)
    console.log(numA + numB)
}