import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Clase abstracta 
abstract class Paciente {
  private nombre: string;
  private fechaNacimiento: string;
  private edad: number;
  private telefono: number;
  private responsable: string;
  private telefonoResponsable: number;
  private sintomas: string;

  constructor(
    nombre: string,
    fechaNacimiento: string,
    edad: number,
    telefono: number,
    responsable: string,
    telefonoResponsable: number,
    sintomas: string
  ) {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.edad = edad;
    this.telefono = telefono;
    this.responsable = responsable;
    this.telefonoResponsable = telefonoResponsable;
    this.sintomas = sintomas;
  }

  getNombre(): string { return this.nombre; }
  getEdad(): number { return this.edad; }
  getResponsable(): string { return this.responsable; }
  getSintomas(): string { return this.sintomas; }

  protected obtenerDescuento(codigoEstudiante: string): number {
    const ultimosDos = parseInt(codigoEstudiante.slice(-2));
    return ultimosDos / 100;
  }

  abstract calcularCosto(codigoEstudiante: string): number;

  mostrarDatos(): void {
    console.log("\nDATOS DEL PACIENTE");
    console.log("Nombre           : " + this.nombre);
    console.log("Fecha Nacimiento : " + this.fechaNacimiento);
    console.log("Edad             : " + this.edad);
    console.log("Telefono         : " + this.telefono);
    console.log("Responsable      : " + this.responsable);
    console.log("Tel. Responsable : " + this.telefonoResponsable);
    console.log("Sintomas         : " + this.sintomas);
  }
}

class ConsultaGeneral extends Paciente {
  constructor(
    nombre: string,
    fechaNacimiento: string,
    edad: number,
    telefono: number,
    responsable: string,
    telefonoResponsable: number,
    sintomas: string
  ) {
    super(nombre, fechaNacimiento, edad, telefono, responsable, telefonoResponsable, sintomas);
  }

  calcularCosto(codigoEstudiante: string): number {
    const precioBase = 50;
    const descuento = this.obtenerDescuento(codigoEstudiante);
    return precioBase - precioBase * descuento;
  }

  mostrarResumen(codigoEstudiante: string): void {
    this.mostrarDatos();
    console.log("Tipo             : Consulta General");
    console.log("Costo Total      : $" + this.calcularCosto(codigoEstudiante).toFixed(2));
    console.log("\n");
  }
}

class ConsultaEspecialidad extends Paciente {
  constructor(
    nombre: string,
    fechaNacimiento: string,
    edad: number,
    telefono: number,
    responsable: string,
    telefonoResponsable: number,
    sintomas: string
  ) {
    super(nombre, fechaNacimiento, edad, telefono, responsable, telefonoResponsable, sintomas);
  }

  calcularCosto(codigoEstudiante: string): number {
    const precioBase = 90;
    const descuento = this.obtenerDescuento(codigoEstudiante);
    const usoEquipo = 0.03;
    return precioBase - precioBase * descuento - precioBase * usoEquipo;
  }

  mostrarResumen(codigoEstudiante: string): void {
    this.mostrarDatos();
    console.log("Tipo             : Consulta Especial");
    console.log("Costo Total      : $" + this.calcularCosto(codigoEstudiante).toFixed(2));
    console.log("\n");
  }
}

// Funcion extra
function verificarMenorDeEdad(paciente: Paciente): void {
  if (paciente.getEdad() < 18) {
    console.log("El paciente es menor de edad. El responsable " + paciente.getResponsable() + " debe estar presente.");
  } else {
    console.log("El paciente es mayor de edad.");
  }
}

rl.question("Nombre del paciente: ", (nombre) => {
  if (!isNaN(Number(nombre))) {
    console.log("Entrada invalida. Solo texto.");
    return rl.close();
  }

  rl.question("Fecha de nacimiento (dd/mm/aaaa): ", (fechaNacimiento) => {
    if (fechaNacimiento.length !== 10) {
      console.log("Entrada invalida.");
      return rl.close();
    }

    rl.question("Edad: ", (años) => {
      if (isNaN(Number(años))) {
        console.log("Entrada invalida. Solo numeros.");
        return rl.close();
      }
      const edad = Number(años);

      rl.question("Telefono: ", (telefonoNum) => {
        if (isNaN(Number(telefonoNum))) {
          console.log("Entrada invalida. Solo numeros.");
          return rl.close();
        }
        const telefono = Number(telefonoNum);

        rl.question("Nombre del responsable: ", (responsable) => {
          if (!isNaN(Number(responsable))) {
            console.log("Entrada invalida. Solo texto.");
            return rl.close();
          }

          rl.question("Telefono del responsable: ", (telefonoResponsableNum) => {
            if (isNaN(Number(telefonoResponsableNum))) {
              console.log("Entrada invalida. Solo numeros.");
              return rl.close();
            }
            const telefonoResponsable = Number(telefonoResponsableNum);

            rl.question("Ingrese codigo de estudiante: ", (codigoEstudiante) => {
              if (codigoEstudiante.trim() === "") {
                console.log("Entrada invalida.");
                return rl.close();
              }

              console.log("\n1. Consulta General ($50)");
              console.log("2. Consulta de Especialidad ($90)");

              rl.question("Seleccione una opcion (1 o 2): ", (opcion) => {
                if (opcion !== "1" && opcion !== "2") {
                  console.log("Entrada invalida.");
                  return rl.close();
                }

                rl.question("Ingrese los sintomas: ", (sintomas) => {
                  if (sintomas.trim() === "") {
                    console.log("Entrada invalida.");
                    return rl.close();
                  }

                  let paciente: ConsultaGeneral | ConsultaEspecialidad;

                  if (opcion === "1") {
                    paciente = new ConsultaGeneral(nombre, fechaNacimiento, edad, telefono, responsable, telefonoResponsable, sintomas);
                  } else {
                    paciente = new ConsultaEspecialidad(nombre, fechaNacimiento, edad, telefono, responsable, telefonoResponsable, sintomas);
                  }
                  paciente.mostrarResumen(codigoEstudiante);
                  verificarMenorDeEdad(paciente);

                  rl.close();
                });
              });
            });
          });
        });
      });
    });
  });
});
