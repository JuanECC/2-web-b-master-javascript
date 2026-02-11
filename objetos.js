// Un objeto es una coleccion de pares clave valor. (propiedades)

const disco ={
    // propiedades del disco (Datos del disco) atrubutos al objeto
    titulo: "Siempre es hoy",
    artista: "Cerati",
    anio: 2025,
    disponible: true,

    // Propiedad de tipo arreglo
    canciones: ["Siempre es hoy", "Cosas imposibles", "tabu", "vivo" ],

    // Podemos guardar acciones guardadas con los datos.

    //Metodo que muestra la informaciom

   
    mostrarInfo(){
        console.log(`${this.titulo} de ${this.artista}, lanzado en${this.anio}`)
    },

    mostrarCanciones(){
        this.canciones.forEach((cancion, index) => {
            console.log(`${index + 1}. ${cancion}`);
        });

     },

     agregarCancion(cancion){
        this.canciones.push(cancion);
        console.log(`Canción "${cancion}" agregada al disco.`);

     }
}


console.log(disco.artista);
console.log(disco.canciones);

console.log(disco['titulo']);
console.log(disco ["disponible"]);

disco.mostrarInfo();
disco.mostrarCanciones();

disco.agregarCancion("Adios");
disco.mostrarCanciones();


const {canciones} = disco;
const [primera, segunda, tercera] = canciones;
console.log(primera);
console.log(segunda);
console.log(tercera);
console.log("------------------");

const {canciones: [pista1, pista2, pista3]} = disco; // Una sola linea (Forma directa)
console.log(pista1);
console.log(pista2);
console.log(pista3);


// Error comun: Desestructurar no crea datos, solo los exrae  
// Renombrar variables al desestructurar
const {titulo: nombreDisco, anio: lanzamiento} = disco; // Cambiamos el nombre de la variable
// Se asigna el calor de la ´propiedad titulo a la variable con otro nombre 
console.log(nombreDisco);
console.log(lanzamiento);

// Desestructuracion basica.
const {titulo, artista} = disco;
console.log(titulo);
console.log(artista);

