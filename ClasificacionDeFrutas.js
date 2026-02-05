let frutas = ["Manzana", "Banana", "Cereza", "Durazno", "Uva", "Manzana"];

let contador = {};

for (let i = 0; i< frutas.length; i++){
    let fruta = frutas[i];

    if (contador[fruta]){
        contador[fruta]++;
    }else{
        contador[fruta] = 1;
    }
}

console.log(contador);