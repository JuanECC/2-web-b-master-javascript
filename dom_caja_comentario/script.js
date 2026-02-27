const form = document.getElementById("formComentario");
const input = document.getElementById("comentarioInput");
const lista = document.getElementById("listaComentarios");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const textoComentario = input.value.trim();

    if (textoComentario === "") return;

    // Crear contenedor del comentario
    const comentarioDiv = document.createElement("div");
    comentarioDiv.classList.add("comentario");

    // Crear texto del comentario
    const parrafo = document.createElement("p");
    parrafo.textContent = textoComentario;

    // Crear fecha y hora
    const fecha = document.createElement("div");
    fecha.classList.add("fecha");

    const ahora = new Date();
    fecha.textContent = ahora.toLocaleString();

    // Botón eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "X";
    botonEliminar.classList.add("eliminar");

    botonEliminar.addEventListener("click", function() {
        lista.removeChild(comentarioDiv);
    });

    // Agregar elementos al comentario
    comentarioDiv.appendChild(botonEliminar);
    comentarioDiv.appendChild(parrafo);
    comentarioDiv.appendChild(fecha);

    // Agregar comentario a la lista
    lista.appendChild(comentarioDiv);

    // Limpiar input
    input.value = "";
});