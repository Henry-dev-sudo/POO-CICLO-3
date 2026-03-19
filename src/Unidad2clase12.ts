class Animales {
    nombre: string;
    categoria: string;
    raza: string;

    constructor(nombre: string, categoria: string, raza: string){
        this.nombre = nombre;
        this.categoria = categoria;
        this.raza = raza;
    }

    mostrar(): void{
        console.log("El animal es un " + this.categoria + " Su nombre es " + this.nombre);
    }
}

class Encargado extends Animales {
    dueño: string;

    constructor(nombre: string, categoria: string, raza: string, dueño: string){
        super(nombre, categoria, raza);
        this.dueño = dueño;
    }

    mensaje(): void{
        console.log(`El animalito es un ${this.categoria}`);
        console.log("Se llama: " + this.nombre + " y su dueño es: " + this.dueño);
    }
}

class Precio extends Encargado {
    precio: number;

    constructor(nombre: string, categoria: string, raza: string, dueño: string, precio: number){
        super(nombre, categoria, raza, dueño);
        this.precio = precio;
    }

    vender(): void{
        console.log(`${this.nombre} se vende a $${this.precio}`);
    }
}

let ob = new Precio('Pipo', 'Perro', 'Buldog Frances', 'Kenet', 80);

ob.mostrar();
ob.mensaje();
ob.vender();   