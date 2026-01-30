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
