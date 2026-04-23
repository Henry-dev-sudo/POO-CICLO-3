import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Ejercicio 1:

// abstract class Persona {
//   protected sueldo: number = 0;

//   abstract evaluarCredito(): void;
// }

// class Cliente extends Persona {
//   pedirSueldo(): void {
//     rl.question("\nIngrese su sueldo: ", (dato) => {
//       this.sueldo = parseFloat(dato);
//       this.evaluarCredito();
//       rl.close();
//     });
//   }

//   evaluarCredito(): void {
//     console.log(`\nSueldo ingresado: $${this.sueldo}`);

//     if (this.sueldo > 1300) {
//       console.log("Tarjeta aprobada por $2500");
//     } else if (this.sueldo > 800) {
//       console.log("Tarjeta aprobada por $1100");
//     } else if (this.sueldo > 500) {
//       console.log("Tarjeta aprobada por $700");
//     } else {
//       console.log("No aplica para tarjeta de crédito");
//     }
//   }
// }

// const cliente1 = new Cliente();
// cliente1.pedirSueldo();

//Ejercicio 2:

// abstract class SistemaColores {
//   protected colores: string[] = [];

//   abstract pedirColores(): void;
//   abstract mezclarColores(): void;
// }

// class JuegoColores extends SistemaColores {
//   private combinaciones: { [key: string]: string } = {
//     "rojo-azul": "morado",
//     "azul-amarillo": "verde",
//     "rojo-amarillo": "naranja",
//     "rojo-verde": "marrón",
//     "negro-blanco": "gris"
//   };

//   pedirColores(): void {
//     this.colores = [];

//     const pedir = (i: number) => {
//       if (i < 2) {
//       } else {
//         this.mezclarColores();
//         rl.close();
//       }
//     };

//     pedir(0);
//   }

//   mezclarColores(): void {
//     console.log("\nColores ingresados:", this.colores);

//     let resultadoFinal = "No existe combinación";

//     for (let i = 0; i < this.colores.length; i++) {
//       for (let j = i + 1; j < this.colores.length; j++) {
//         const clave1 = `${this.colores[i]}-${this.colores[j]}`;
//         const clave2 = `${this.colores[j]}-${this.colores[i]}`;

//         if (this.combinaciones[clave1]) {
//           resultadoFinal = this.combinaciones[clave1];
//         } else if (this.combinaciones[clave2]) {
//           resultadoFinal = this.combinaciones[clave2];
//         }
//       }
//     }

//     console.log(`\nResultado de la mezcla: ${resultadoFinal}`);
//   }
// }

// const juego = new JuegoColores();
// juego.pedirColores();
//       rl.question(`Ingrese el color ${i + 1}: `, (color) => {
//           this.colores.push(color.toLowerCase());
//           pedir(i + 1);
//         });
  

//Ejercicio 3:

// abstract class Tarjeta {
//   protected saldo: number;

//   constructor(saldoInicial: number) {
//     this.saldo = saldoInicial;
//   }

//   abstract iniciar(): void;
// }

// class TarjetaCredito extends Tarjeta {
//   constructor() {
//     super(3000); 
//   }

//   iniciar(): void {
//     console.log(`\nSaldo inicial: $${this.saldo.toFixed(2)}`);
//     this.procesarTransaccion();
//   }

//   private procesarTransaccion(): void {
//     if (this.saldo <= 0) {
//       console.log("\nSaldo agotado. Cuenta cerrada.");
//       rl.close();
//       return;
//     }

//     rl.question("\nDigite el monto de la transacción (0 para salir): ", (dato) => {
//       const monto = parseFloat(dato);

//       if (isNaN(monto) || monto < 0) {
//         console.log("Ingrese un monto válido (número mayor o igual a 0).");
//         this.procesarTransaccion();
//         return;
//       }

//       if (monto === 0) {
//         console.log("Operación finalizada por el cliente.");
//         rl.close();
//         return;
//       }

//       if (monto > this.saldo) {
//         console.log("Fondos insuficientes.");
//       } else {
//         this.saldo -= monto;
//         console.log(`Transacción realizada. Saldo restante: $${this.saldo.toFixed(2)}`);
//       }
      
//       this.procesarTransaccion();
//     });
//   }
// }

// const tarjeta = new TarjetaCredito();
// tarjeta.iniciar();

//Ejercicio 4: modificacion

abstract class Tarjeta {
  protected saldo: number;
  protected puntos: number = 0;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  abstract iniciar(): void;
}

class TarjetaCredito extends Tarjeta {
  constructor() {
    super(3000);
  }

  iniciar(): void {
    console.log("\n Sistema de Tarjeta de Crédito");
    console.log(`Saldo inicial: $${this.saldo.toFixed(2)}`); 
    console.log(`Puntos acumulados: ${this.puntos}`); 
    this.procesarTransaccion();
  }

  private procesarTransaccion(): void {
    if (this.saldo <= 0) {
      console.log("\nSaldo agotado. Cuenta cerrada.");
      console.log(`Puntos totales acumulados: ${this.puntos}`);
      rl.close();
      return;
    }

    rl.question("\nDigite el monto de la transacción (0 para salir): ", (dato) => {
      const monto = parseFloat(dato);

      if (isNaN(monto) || monto < 0) {
        console.log("Ingrese un monto válido (número mayor o igual a 0).");
        this.procesarTransaccion();
        return;
      }

      if (monto === 0) {
        console.log("Operación finalizada por el cliente.");
        console.log(`Puntos totales acumulados: ${this.puntos}`); 
        rl.close();
        return;
      }

      if (monto > this.saldo) {
        console.log("Fondos insuficientes.");
        this.procesarTransaccion();
        return;
      }

      rl.question("Ingrese el POS (Bac, Banco Agricola, Otro): ", (datoPos) => {
        const pos = datoPos.trim().toLowerCase();

        this.saldo -= monto;

        const puntosGanados = this.calcularPuntos(pos, monto);
        this.puntos += puntosGanados;

        console.log(`\nTransacción realizada por $${monto.toFixed(2)}`);
        console.log(`Saldo restante: $${this.saldo.toFixed(2)}`);
        console.log(`Puntos ganados en esta transacción: ${puntosGanados}`);
        console.log(`Puntos acumulados: ${this.puntos}`);

        this.procesarTransaccion();
      });
    });
  }

  private calcularPuntos(pos: string, monto: number): number { 
    const dolaresEnteros = Math.floor(monto); 

    if (pos === "bac") {
      return dolaresEnteros * 3;
    }

    if (pos === "banco agricola" || pos === "banco agrícola") {
      return dolaresEnteros * 5;
    }

    return 0;
  }
}

const tarjeta = new TarjetaCredito();
tarjeta.iniciar();