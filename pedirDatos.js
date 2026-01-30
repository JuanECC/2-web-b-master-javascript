/*console.log("Hola me llamo juanito");
console.log("Como te llamas?");

let nombre =  prompt("Ingresa tu nombre");
//document.write(nombre);

//alert(nombre)

let fecha = prompt("cuando cumples años");
//document.write(fecha);
alert(fecha)
let msascotas = prompt("Cuantas mascotas tienes");
//document.write(mascotas);
alert(nombre)
alert(fecha)
alert(msascotas)
*/

// Preguntar cuantos perros tienes
// Preguntar cuantops gatos tienes
// Mostrar Como respuesta: Tienes en total x mascotas


let perros = prompt("Cuantos perros tienes?")

let gatos = prompt("Cuantos gatos tienes?")

perros= parseInt(perros);
gatos= parseInt(gatos);


let mascotas = perros + gatos;


document.write("Tienes en total " + mascotas + " mascotas");
alert("Juan tiee en total " + mascotas + " mascotas")

let hermanos= Number(prompt("Cuantos hermanos tienes?"))
let hermanas= Number(prompt("Cuantas hermanas tienes?"))
// Number es mas estricto y falla si hay texto mezclado

let totalh = hermanos+ hermanas;


console.log("Tienes en total " + totalh + " hermanos");

// NaN = Not a Number