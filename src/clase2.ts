// let persona = {
//     nombre: "Juan",
//     edad: 25,
//     activo: true
// };

// console.log(persona.nombre);
// console.log(persona.edad);

// //Ejercicio 2{{
// let estudiante = {
//     nombre: "Maria",
//     carrera: "Ingenieria",
//     saludar(): void { 
//         console.log("Hola mi nombre es: " + this.nombre);
// }
// };

// estudiante.saludar();

// ejercicios de tarea:
// ejercicio 1:


// let persona = {
//     nombre: "Estefany",
//     edad: 18,
//     genero: "Femenino",

//     presentarse(): void { 
//         console.log("Hola ni nombre es: " + this.nombre + ", y tengo " + this.edad + " años.");
//     }
// }

// persona.presentarse();

//Ejercicio 2: 

// let producto = { 
//     nombre: "Refrijerador",
//     precio: 1500, 
//     disponible: true,
//     mostrarInfo() {
//         console.log("Producto: " + this.nombre + ", Precio: " + this.precio + ", Disponible: " + this.disponible);
//     }
// }

// producto.mostrarInfo();

//Ejercicio 3:

let banco = {
    usuario: "María López",
    montoActual: 1000,

    ingresar: function (valor: number) {
        this.montoActual += valor;
        console.log(`Ingreso de $${valor} realizado. Saldo disponible: $${this.montoActual}`);
    },

    depositar: function (valor: number) {
        if (valor <= this.montoActual) {
            this.montoActual -= valor;
            console.log(`Se descontaron $${valor}. Nuevo saldo: $${this.montoActual}`);
        } else {
            console.log(`No es posible descontar $${valor}. Fondos actuales: $${this.montoActual}`);
        }
    }
};

banco.ingresar(0);
banco.depositar(404);
banco.depositar(7000);