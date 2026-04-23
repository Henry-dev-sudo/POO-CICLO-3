import * as readline from "readline";

class EvaluacionDePrestamo {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  nombre: string;
  fecha: string;
  estado: string;
  sueldo: number;

  constructor(nombre: string = "", fecha: string = "", estado: string = "", sueldo: number = 0) {
    this.nombre = nombre;
    this.fecha = fecha;
    this.estado = estado;
    this.sueldo = sueldo;
  }

  pedirInfo() {
    this.rl.question("Ingrese su Nombre: ", (nombre: string) => {
      this.nombre = nombre;
      this.rl.question("Ingresa tu fecha de Nacimiento (YYYY-MM-DD): ", (fecha: string) => {
        this.fecha = fecha;
        this.rl.question("Ingresa tu estado familiar (Casado/Soltero/Viudo): ", (estado: string) => {
          this.estado = estado.trim().toLowerCase();
          this.rl.question("Ingrese su sueldo: ", (numero: string) => {
            this.sueldo = Number(numero);
            this.evaluarPrestamo();
            this.rl.close();
          });
        });
      });
    });
  }

  edad(): number {
    const fechaNacimiento = new Date(this.fecha);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    if (
      hoy.getMonth() < fechaNacimiento.getMonth() ||
      (hoy.getMonth() === fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--;
    }
    return edad;
  }

  evaluarPrestamo(): void {
    const edadCalculada = this.edad();
    let montoPrestamo = 0;

    if (this.estado === "casado" && edadCalculada > 22 && this.sueldo >= 450 && this.sueldo <= 600) {
      montoPrestamo = 2000;
    } else if (this.estado === "casado" && edadCalculada > 32 && this.sueldo >= 601 && this.sueldo <= 1000) {
      montoPrestamo = 3000;
    } else if (this.estado === "soltero" && edadCalculada > 22 && this.sueldo >= 400 && this.sueldo <= 600) {
      montoPrestamo = 2500;
    } else if (this.estado === "soltero" && edadCalculada > 30 && this.sueldo >= 601 && this.sueldo <= 1000) {
      montoPrestamo = 3500;
    } else if (this.estado === "viudo" && edadCalculada > 35 && this.sueldo >= 600 && this.sueldo <= 1500) {
      montoPrestamo = 4000;
    }

    if (montoPrestamo > 0) {
      console.log(
        `${this.nombre}, ${this.estado} de ${edadCalculada} años con un sueldo de $${this.sueldo.toFixed(
          2
        )} se le permite otorgar el préstamo de $${montoPrestamo.toFixed(2)} dolares.`
      );
    } else {
      console.log("Préstamo denegado");
    }
  }
}

const evaluacion = new EvaluacionDePrestamo();
evaluacion.pedirInfo();