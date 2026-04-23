class persona {
    nombre: string;
    edad: number;
    telefono: number;

    constructor(nombre: string, edad: number, telefono: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }

    mostrar(): void {
        alert("El nombre es: " + this.nombre);
        alert("La edad es: " + this.edad);
        alert("El teléfono es: " + this.telefono);
    }
}

function ejecutar() {
    let nombre: string = prompt("Ingrese su nombre") || "";
    let edad: number = parseInt(prompt("Ingrese su edad") || "0");
    let telefono: number = parseInt(prompt("Ingrese su teléfono") || "0");

    let people = new persona(nombre, edad, telefono);
    people.mostrar();
}

ejecutar();