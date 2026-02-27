// Un objeto es una coleccion de pares clave - valor (propiedades)

const disco = {
    // Propiedades (datos del disco)
    titulo: 'Fuerza Natural',
    artista: 'Gustavo Cerati',
    anio: 2009,
    disponible: true,

    // Propiedad de tipo arreglo
    canciones: ['Déjà Vu', 'Magia', 'Tracción a Sangre', 'Cactus', 'Rapto'],

    // Metodo que muestra la informacion
    mostrarInfo() {
        console.log(`${this.titulo} de ${this.artista}, lanzado en ${this.anio}`);
        // this apunta a ESTE objeto (disco)
    },

    // Metodo que lista las canciones 
    mostrarCanciones(){
        this.canciones.forEach((cancion, i) => {
            console.log(`${i + 1} - ${cancion}`);
        });
    },

    // Agregar una cancion 
    agregarCancion(nombre){
        this.canciones.push(nombre);
        console.log(`Cancion agregada: ${nombre}`);
    },

    // Eliminar cancion
    eliminarCancion(nombre){
        this.canciones = this.canciones.filter(cancion => cancion !== nombre);
        console.log(`Cancion eliminada: ${nombre}`);
    },

    // Cambiar estado del disco
    cambiarDisponibilidad(estado){
        this.disponible = estado;
        console.log(`Disponibilidad cambiada a: ${this.disponible}`);
    }
};

// Acceder a los datos con notacion de punto
console.log(disco.artista);
console.log(disco.canciones);

// Acceder con notacion de corchetes
console.log(disco['titulo']);
console.log(disco['disponible']);

// Llamar a metodos
disco.mostrarInfo();
disco.mostrarCanciones();
disco.agregarCancion('Crimen');
disco.mostrarCanciones();

disco.eliminarCancion('Magia');
disco.mostrarCanciones();

disco.cambiarDisponibilidad(false);

// Desestructuracion
const { canciones } = disco;
const [primera, segunda, tercera] = canciones;

console.log(primera);
console.log(segunda);
console.log(tercera);
console.log('-------------');

const { canciones: [pista1, pista2, pista3] } = disco;
console.log(pista1);
console.log(pista2);
console.log(pista3);

// Renombrar variables 
const { titulo: nombreDisco, anio: lanzamiento } = disco;
console.log(nombreDisco);
console.log(lanzamiento);

// Desestructuracion basica
const { titulo, artista } = disco;
console.log(titulo);
console.log(artista);