let librosLeidos = [];

function agregarLibro(libro) {
    librosLeidos.push(libro);
}

function mostrarLibrosLeidos() {
    console.log("Lista de libros leídos:");

    librosLeidos.forEach((libro, index) => {
        console.log(`${index + 1}. ${libro}`);
    });

    console.log("Total de libros:", librosLeidos.length);
}

agregarLibro("La metamorfosis");
agregarLibro("El amor en los tiempos de cólera");
agregarLibro("Rayuela");
agregarLibro("Don Quijote de la Mancha");

mostrarLibrosLeidos();
