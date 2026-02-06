function Saludar(nombre) {
  //Nombre es un parametro
  // Lo que va a hacer mi funcion

  return "hola " + nombre; // Retornando un valor
}
Saludar("Ana"); // Llamando a mi funcion saludar

let saludo = Saludar("Juan"); // Guardando el resultado de la funcion saludar en una variable
console.log(Saludar("Ana")); // Imprimiendo en consola el resultado de la funcion saludar con el argumento "Ana"
console.log(saludo); // Imprimiendo en consola la variable saludo que contiene el resultado de la funcion saludar

function sumar(a, b) {
  // a y b son parametros
  console.log(a + b); // Resultado en consola SOLO LO IMPRIME   
}

sumar(5, 3);


//return entrga un valor para poder usarlo despues

 
function restar(num1, num2) {
  let resultado = num1 - num2;
  return resultado; // variable local
}

console.log(restar(10, 4)); //variable global

let resultado;

function sinReturn(){
    let x = 5;
// logra ejecutar la funcion pero no devuelve nada porque no tiene return, por eso el resultado es undefined
}

console.log(sinReturn()); //undefined porque la funcion no tiene return

console.log(resultado); //undefined porque la variable resultado no tiene un valor asignado 


function multiplicar(dato1, dato2) {
    return dato1 * dato2;
  
}

console.log(multiplicar(4)); //Not a Number, hace falta passarle un argiment

//console.log(ana); // Error de variable no definida




// Arrow function / Funcion de flecha


const dividir = (a, b) => a/b; 
console.log (dividir(15, 2 ));


const suma = (a, b) => {
    return a + b;
}

console.log(suma(7, 8));

const multi = (x, y) => {return x*y}
console.log(multi(3,4));


//funcion anonima(No necesita darle nombre, ejecuta algo puntioal)

setTimeout (function(){
  console.log("Esto se ejecuta despues");
}, 5000); // Ejecuta la funcion despues de 5 segundos


// CUANDO NO USAR FUNCIONES ANONIMAS
/*Se tiene que reutilizar muchas veces
Tiene logica grande
Necesita ser testeada
Se necesita claridad*/

function mascotas(){
  console.log("Nombre de las mascotas:", a + b + c)
}

mascotas("Luna", "Max", "Bella"); // No funciona porque la funcion mascotas no tiene parametros definidos para recibir los argumentos, por lo tanto a, b y c no estan definidos dentro de la funcion mascotas.

/// 3 funciones 

//Funcion para calcular el area de un triangulo

//Funcion para verificar si un numero es par o impar

// Funcion para generar numeros fibonacci 


function areaTriangulo(base, altura){
  return (base * altura) / 2;
} 
console.log("Area del triangulo:", areaTriangulo(5, 10));


function esPar(numero){
  if (numero % 2 === 0){
   console.log("El numero es par");
   return true;

  } else {
    return false;
  } 

}

console.log("El numero es par?", esPar(4));
console.log("El numero es par?", esPar(7));

function fibonacci(n){
  let a = 0, b = 1, siguiente;
  let serie = [a, b]; 
  for (let i = 2; i < n; i++){
    siguiente = a + b;
    serie.push(siguiente);
    a = b;
    b = siguiente;
  }
  return serie;
} 
console.log("Serie Fibonacci:", fibonacci(10));

