var persona = /** @class */ (function () {
    function persona(nombre, edad, telefono) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }
    persona.prototype.mostrar = function () {
        alert("El nombre es: " + this.nombre);
        alert("La edad es: " + this.edad);
        alert("El teléfono es: " + this.telefono);
    };
    return persona;
}());
function ejecutar() {
    var nombre = prompt("Ingrese su nombre") || "";
    var edad = parseInt(prompt("Ingrese su edad") || "0");
    var telefono = parseInt(prompt("Ingrese su teléfono") || "0");
    var people = new persona(nombre, edad, telefono);
    people.mostrar();
}
ejecutar();
