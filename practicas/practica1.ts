// // Enunciado:

// // Crear una clase Estudiante que contenga los siguientes atributos:

// // nombre (string)
// // carnet (string)
// // notaFinal (number)
// // La clase debe incluir:

// // Un constructor para inicializar los atributos.
// // Un método mostrarInformacion() que imprima los datos del estudiante.
// // Posteriormente, instanciar al menos dos objetos y ejecutar el método en cada uno para observar cómo funcionan de manera independiente.

// class Estudiante {
//     private nombre: string;
//     private carnet: string; 
//     notaFinal: number = 0; 

//     constructor(nombre: string, carnet: string, notaFinal: number) {
//         this.nombre = nombre;
//         this.carnet = carnet;
//         this.notaFinal = notaFinal;
//     }

//     mostrarinformacion() { 
//         console.log(`Nombre: ${this.nombre}`);
//         console.log(`Carnet: ${this.carnet}`);
//         console.log(`Nota Final: ${this.notaFinal}`);
//     }

//     actualizarNota(nota: number) {
//         if ( nota < 0 && nota > 10) { 
//             console.log( "La nota no puede ser menor o igual a 0.");
//             return;
//         } else { 
//         this.notaFinal = nota;
//         }
//     }

//     actualizarCarbet(carnet: string) {
//         this.carnet = carnet;
//     }
// }

// // Instanciación correcta
// const alumno1 = new Estudiante("Aldair", "u20251250", 7);
// const alumno2 = new Estudiante("Juan", "u20251251", 8);
// const alumno3 = new Estudiante("Isvi", "u20251252", 9);
// console.log(alumno1.mostrarinformacion()) ;
// alumno1.actualizarCarbet("u20251253");
// alumno1.actualizarNota(10);
// alumno1.mostrarinformacion();

// alumno1.actualizarNota(-5);
// console.log(alumno1.mostrarinformacion()) ;

// Ejercicio 2: 

// Crear una clase Producto que incluya:

// nombre (string)
// precio (number)
// cantidad (number)
// La clase debe tener:

// Un constructor que inicialice los atributos.
// Un método calcularTotal() que retorne el total (precio × cantidad).
// Un método mostrarDetalle() que imprima la información del producto.
// Instanciar al menos un objeto y ejecutar sus métodos.

class Producto {
     private nombre: string;
     precio: number;
     cantidad: number; 

     constructor(nombre: string, precio: number, cantidad: number) {  
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
     }

     calcularTotal(): number {
        if ( this.precio < 0 || this.cantidad < 0) {
            console.log("El precio y la cantidad no pueden ser negativos.");
            return 0;
        } else {
        return this.precio * this.cantidad;
        }
    }
    mostrarDetalle() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Precio: ${this.precio}`);
        console.log(`Cantidad: ${this.cantidad}`);
        console.log(`Total: ${this.calcularTotal()}`);
    }
} 

// Instanciación del producto
const producto1 = new Producto("Laptop", 1000, 2);
producto1.mostrarDetalle();
