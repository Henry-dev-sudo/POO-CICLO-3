class persona { 
    nombre: string;
    edad: number; 
    telefono: number; 

    constructor(nombre:string, edad: number, telefono: number){
        this.nombre=nombre;
        this.edad=edad;
        this.telefono=telefono;
    }

    mostrar() : void{ 
        alert("el nombre es: " + this.nombre)
        alert("la edad es: " + this.edad)
        alert("el telefono es: " + this.telefono)
    }
}

let nombre: string = prompt("ingrese su nombre") || "";
let edad: number = parseInt(prompt("ingrese su edad") || "0");

let people = new persona(nombre, edad, 123456789);
people.mostrar();