// Crear objeto Libro

const libro = {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    estado: "disponible", // puede ser 'disponible' o 'prestado'
    capitulos: [],

    describirLibro: function() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },

    agregarCapitulo: function(capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Capítulo "${capitulo}" agregado.`);
    },

    eliminarCapitulo: function(capitulo) {
        const indice = this.capitulos.indexOf(capitulo);
        if (indice !== -1) {
            this.capitulos.splice(indice, 1);
            console.log(`Capítulo "${capitulo}" eliminado.`);
        } else {
            console.log("El capítulo no existe.");
        }
    }
};

libro.describirLibro();

libro.agregarCapitulo("Capítulo 1: Macondo");
libro.agregarCapitulo("Capítulo 2: La familia Buendía");

console.log(libro.capitulos);

libro.eliminarCapitulo("Capítulo 1: Macondo");

console.log(libro.capitulos);