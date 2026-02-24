// import * as readline from "readline";

// class Programa {
//     private rl: readline.Interface;

//     constructor() {
//         this.rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });
//     }

//     iniciar(): void {
//         this.pedirNumero();
//     }

//     pedirNumero(): void {
//         this.rl.question("Ingresa un número: ", (respuesta: string) => {
//             const numero = Number(respuesta);
//             this.evaluarNumero(numero);
//             this.cerrar();
//         });
//     }

//     evaluarNumero(numero: number): void {
//         if (numero > 10) {
//             console.log("Es mayor que 10");
//         } else if (numero === 10) {
//             console.log("Es igual a 10");
//         } else {
//             console.log("Es menor que 10");
//         }
//     }

//     cerrar(): void {
//         this.rl.close();
//     }
// }

// const app = new Programa();
// app.iniciar();
