
// Seleccionados Nuestros Elementows del DOM mediante ID
const titulo = document.getElementById("titulo");
console.log(titulo) 

const texto = document.querySelector(".texto");
console.log(texto)

const caja = document.getElementById("caja");
console.log(caja)

const btnClase = document.getElementById("btnClase");

const btnTexto = document.getElementById("btnTexto");
const btnColor = document.getElementById("btnColor");
const btnOcultar = document.getElementById("btnOcultar");

// El evento addEventListener esta escuchando un click
//Cambiar de texto
btnTexto.addEventListener("click", () =>{
    titulo.textContent = "Cambiaste el texto desde javascript"
});

btnColor.addEventListener("click", () =>{
    titulo.style.color = "purple";
    caja.style.backgroundColor = "pink";
});

// Ocultar mi cajita
btnOcultar.addEventListener("click", () =>{
    if(caja.style.display === "none"){
        caja.style.display = "block";
    }else{
        caja.style.display = "none";
    }
})
// Cambiar de clase
btnClase.addEventListener("click", () =>{
    caja.classList.toggle("activa"); // Cambia el estado visual
})



