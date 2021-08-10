class Usuario {
    constructor(nombre, apellido, mascotas, libros) {
        this.nombre = nombre || "";
        this.apellido = apellido || "";
        this.mascotas = mascotas || [];
        this.libros = libros || [];
    }

    getFullName () {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota (mascota) {
        this.mascotas.push(mascota);
    }

    getMascotas () {
        return this.mascotas;
    }

    addBooks (book) {
        this.libros.push(book);
    }

    getBooks () {
        return this.libros;
    }

}

const user1 = new Usuario (
    "Gonzalo",
    "Villaverde",
    [{titulo: "Hollywood", autor: "Bukowski"}, {titulo:"La guerra de los gimnasios", autor:"Aira"}],
    ["Lola"]
)

console.log(user1.getFullName())
