
function Usuario(nombre, apellido, libros, mascotas) {
    this.nombre = nombre || " ";                //Agregado el default
    this.apellido = apellido || " ";
    this.libros = libros || [];
    this.mascotas = mascotas || [];

}

Usuario.prototype.getFullName = function () {    // Funcion que devuelve el nombre y apellido del usuario
    return `${this.nombre} ${this.apellido}`;
}

Usuario.prototype.addMascota = function(mascota) {          // Funcion que agrega una mascota al array
    this.mascotas.push(mascota);
}

Usuario.prototype.getMascotas = function () {       // Funcion que devuelve las mascotas
    return this.mascotas;
}

Usuario.prototype.addBooks = function(libro) {
    this.libros.push(libro);
}

Usuario.prototype.getBooks = function () {
    return this.libros.map((libro) => libro.titulo);
}

const User1 = new Usuario(
    "Gonzalo",
    "Villaverde",
    [{titulo: "Hollywood", autor: "Bukowski"}, {titulo:"La guerra de los gimnasios", autor:"Aira"}],
    ["Lola"]

);

const prueba = new Usuario();
User1.addMascota("Mora");
User1.addBooks({titulo: "Harry Potter", autor:"Rowling"});

console.log(User1.getFullName())
console.log(User1.getBooks());
User1.addMascota("Blackie");
console.log(User1.getMascotas());