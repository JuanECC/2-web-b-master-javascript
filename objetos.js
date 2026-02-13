// Un objeto es una colección de pares clave-valor (propiedades)

const disco = {
    // Propiedades del disco (datos del disco)
    titulo: "Siempre es hoy",
    artista: "Cerati",
    anio: 2025,
    disponible: true,

    // Propiedad de tipo arreglo (lista de canciones)
    canciones: ["Siempre es hoy", "Cosas imposibles", "Tabú", "Vivo"],

    // Método que muestra la información del disco
    mostrarInfo() {
        // "this" hace referencia al objeto actual (disco)
        console.log(`${this.titulo} de ${this.artista}, lanzado en ${this.anio}`);
    },

    // Método que muestra todas las canciones
    mostrarCanciones() {
        // Recorre el arreglo canciones con forEach
        this.canciones.forEach((cancion, index) => {
            // index es la posición y cancion es el valor
            console.log(`${index + 1}. ${cancion}`);
        });
    },

    // Método para agregar una nueva canción al arreglo
    agregarCancion(cancion) {
        // push agrega un nuevo elemento al final del arreglo
        this.canciones.push(cancion);
        console.log(`Canción "${cancion}" agregada al disco.`);
        
    },

    
   //Eliminar canción por nombre
    eliminarCancion(nombreCancion) {
        const indice = this.canciones.indexOf(nombreCancion);

        if (indice !== -1) {
            this.canciones.splice(indice, 1); // Elimina 1 elemento desde la posición encontrada
            console.log(`Canción "${nombreCancion}" eliminada.`);
        } else {
            console.log("La canción no existe en el disco.");
        }
    },

    //  Cambiar disponibilidad
    cambiarDisponibilidad() {
        this.disponible = false;
        console.log("El disco ahora NO está disponible.");
    }
};

// Accedemos a propiedades usando notación de punto
console.log(disco.artista);
console.log(disco.canciones);

// Accedemos a propiedades usando notación de corchetes
console.log(disco['titulo']);
console.log(disco["disponible"]);

// Llamamos a los métodos del objeto
disco.mostrarInfo();
disco.mostrarCanciones();

// Agregamos una nueva canción
disco.agregarCancion("Adiós");

// Mostramos nuevamente las canciones ya actualizadas
disco.mostrarCanciones();
// ==========================
// DESESTRUCTURACIÓN
// ==========================
// Extraemos la propiedad canciones del objeto
const { canciones } = disco;

// Desestructuración de arreglo
// Extraemos las primeras tres canciones en variables separadas
const [primera, segunda, tercera] = canciones;
console.log(primera);
console.log(segunda);
console.log(tercera);
console.log("------------------");

// Desestructuración en una sola línea directamente del objeto
const { canciones: [pista1, pista2, pista3] } = disco;

console.log(pista1);
console.log(pista2);
console.log(pista3);
// Error común: desestructurar NO crea datos nuevos, solo los extrae
// Renombrar variables al desestructurar
// titulo se guarda en la variable nombreDisco
// anio se guarda en la variable lanzamiento
const { titulo: nombreDisco, anio: lanzamiento } = disco;
console.log(nombreDisco);
console.log(lanzamiento);
// Desestructuración básica
// Extraemos directamente las propiedades titulo y artista
const { titulo, artista } = disco;
console.log(titulo);
console.log(artista);
//Ejercicio: 
// Eliminar cancion
//Cambiar de disco a No disponible

disco.mostrarCanciones();

// Eliminar una canción
disco.eliminarCancion("Vivo");

disco.mostrarCanciones();

// Cambiar a no disponible
disco.cambiarDisponibilidad();

disco.mostrarInfo();
