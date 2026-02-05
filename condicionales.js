let edad = 20;
let tieneIne = true;
// condicion que queremos que se cumpla
if (edad >= 18) {
    console.log("Eres mayor de edad");// se ejecuta si es true
} else {
    console.log("Eres menor de edad");// sino se ejecutra la parte falsa

}


let calificacion = 9;

if (calificacion >= 9) {
    console.log("Eres increible")
} else if (calificacion >= 6){
    console.log(" Estas aprobado")
}else{
    console.log("Reprobaste")
}


//Operadores logicos
// AND (y) &&
// OR (O) ||
// NOT (no) !

if (edad >=18 && tieneIne){
    console.log("Puedes votar");
}else{
    console.log("No puedes votar");
}


let numero = 1;

numero = parseInt(numero);

// Si querremis preguntar si es divisible o no entre 2
if (numero % 2 === 0){

}else{
    console.log("No es divisible entre 2");
}

let esPremium = true;
let totalCompras = 350;
let esFinDeSemana = false;

if  (esPremium || (totalCompras > 1000 && esFinDeSemana)){
    console.log("Descuento aplicado");
}else {
    console.log("No aplica descuento");
}
