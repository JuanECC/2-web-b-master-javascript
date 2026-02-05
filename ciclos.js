let i = 1;
while (i <= 3){
    console.log("while:", i);
    i++; // i = i +1; VARIABLE DE CONTROL
}

/*let entrada = "";

while (entrada !== 'salir'){
    entrada = prompt("Escribe algo: ");

}

console.log("Saliste!");*/

//Arrays

let frutas = ["Manzana", "Pera", "Tulo", "Cereza", "Mango", "Papaya"];

console.log (frutas.length);


for (let indice = 0; indice < frutas.length; indice++){
    console.log("Fruta = ", frutas[indice]);
}


console.log("Metodos de los arreglos")

let alumnos = [];

alumnos.push("Anna");
alumnos.push("bruno");
alumnos.push("Fernanda");
alumnos.push("Natalia");
console.log(alumnos);


alumnos.pop();
console.log(alumnos);

alumnos.unshift("Nina");
alumnos.unshift("Misael");
alumnos.unshift("Beto");

console.log(alumnos);

alumnos.shift();
console.log(alumnos);

// Arreglo de una lista de super 
//Imprimir lista del super
let listaSuper = ["Papas","Huevo","Desodorante","leche","Crema para peinar"]

listaSuper.push("Arroz");
listaSuper.push("Cebolla")
listaSuper.pop("Especies")

for (let indice1 = 0; indice1 < listaSuper.length; indice1++){
    console.log("Producto "+ (indice1+1) +": "+ listaSuper[indice1]);
    console.log("Total de productos: " + listaSuper.length);

}

// Total de productos
//promt
// extra
let listaSuper3 = [];
let Producto = "inicio";

while (Producto !== "") {
    Producto = prompt("Ingressa un producto del supermercado ");

    if (Producto !== ""){
        listaSuper3.push(Producto);
    }
}

for (let i = 0; i <listaSuper3.length; i++){
    console.log(i+1 +"- "+ listaSuper3[i]);
}

console.log("Total de productos: " + listaSuper3.length);


