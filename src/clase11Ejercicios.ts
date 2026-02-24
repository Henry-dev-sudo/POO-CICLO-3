
// import * as readline from "readline";

// class Programa {
//   private rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   IngresarNotas(): void {
//     this.rl.question("Ingrese una nota: ", (respuesta: string) => {
//       const nota = Number(respuesta);
//       this.evaluarNota(nota);
//       this.cerrar();
//     });
//   }

//   evaluarNota(nota: number): void {
//     if (nota >= 9 && nota <= 10) {
//       console.log("Excelente");
//     } else if (nota >= 7 && nota < 9) {
//       console.log("Bueno");
//     } else if (nota >= 6 && nota < 7) {
//       console.log("Regular");
//     } else {
//       console.log("Reprobado");
//     }
//   }

//   cerrar(): void {
//     this.rl.close();
//   }
// }

// const programa = new Programa();
// programa.IngresarNotas();

import * as readline from "readline";

type UsuarioInfo = { contraseña: string; rol: string; codigo: number }; // Definimos un tipo para la información de los usuarios

class SistemaAutenticacion {
    private rl: readline.Interface;
    private usuarios: Record<string, UsuarioInfo> = {
        admin: { contraseña: "admin123", rol: "Administrador", codigo: 1 },
        cliente: { contraseña: "cliente123", rol: "Cliente", codigo: 2 },
        invitado: { contraseña: "invitado123", rol: "Invitado", codigo: 3 }
    };

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    iniciar(): void {
        this.rl.question("Ingresa tu usuario: ", (usuario: string) => {
            this.rl.question("Ingresa tu contraseña: ", (contraseña: string) => {
                this.validarLogin(usuario, contraseña);
                this.cerrar();
            });
        });
    }

    private validarLogin(usuario: string, contraseña: string): void {
        const info = this.usuarios[usuario];
        if (info && info.contraseña === contraseña) {
            console.log(` Login correcto. Rol: ${info.rol} (Código: ${info.codigo})`);
        } else {
            console.log(" Usuario o contraseña incorrectos.");
        }
    }

    private cerrar(): void {
        this.rl.close();
    }
}

const app = new SistemaAutenticacion();
app.iniciar();