//Ejericio 1: 

class Vehiculo {
  marca: string;
  modelo: string;
  anio: number;

  constructor(marca: string, modelo: string, anio: number) {
    if (!marca || marca.trim() === "") {
      throw new Error("La marca no puede estar vacía.");
    }
    if (!modelo || modelo.trim() === "") {
      throw new Error("El modelo no puede estar vacío.");
    }
    if (anio > new Date().getFullYear()) {
      throw new Error(
        `El año no puede ser mayor al año actual (${new Date().getFullYear()}).`
      );
    }

    this.marca = marca.trim();
    this.modelo = modelo.trim();
    this.anio = anio;
  }

  mostrarInformacion(): void {
    console.log(`  Marca  : ${this.marca}`);
    console.log(`  Modelo : ${this.modelo}`);
    console.log(`  Año    : ${this.anio}`);
  }
}

// ──────────────────────────────────────────────
class Automovil extends Vehiculo {
  numeroPuertas: number;

  constructor(
    marca: string,
    modelo: string,
    anio: number,
    numeroPuertas: number
  ) {
    super(marca, modelo, anio);
    if (numeroPuertas <= 0) {
      throw new Error("El número de puertas debe ser mayor a 0.");
    }
    this.numeroPuertas = numeroPuertas;
  }

  mostrarInformacion(): void {
    console.log("🚗 Automóvil");
    console.log("-".repeat(30));
    super.mostrarInformacion();
    console.log(`  Puertas: ${this.numeroPuertas}`);
    console.log();
  }
}

// ──────────────────────────────────────────────
class Motocicleta extends Vehiculo {
  cilindrada: number;

  constructor(
    marca: string,
    modelo: string,
    anio: number,
    cilindrada: number
  ) {
    super(marca, modelo, anio);
    if (cilindrada <= 0) {
      throw new Error("La cilindrada debe ser mayor a 0.");
    }
    this.cilindrada = cilindrada;
  }

  mostrarInformacion(): void {
    console.log("🏍️  Motocicleta");
    console.log("-".repeat(30));
    super.mostrarInformacion();
    console.log(`  Cilindrada: ${this.cilindrada} cc`);
    console.log();
  }
}

console.log("=".repeat(40));
console.log("=".repeat(40));
console.log();

const auto1 = new Automovil("Toyota", "Corolla", 2022, 4);
const auto2 = new Automovil("Ford", "Mustang", 2020, 2);
const moto1 = new Motocicleta("Honda", "CB500F", 2023, 500);
const moto2 = new Motocicleta("Yamaha", "MT-07", 2021, 689);

const vehiculos: Vehiculo[] = [auto1, auto2, moto1, moto2];
vehiculos.forEach((v) => v.mostrarInformacion());

console.log("=".repeat(40));
console.log("=".repeat(40));
console.log();

const casos: { nombre: string; fn: () => void }[] = [
  { nombre: "Año futuro",   fn: () => new Automovil("BMW",  "X5",  2099, 4) },
  { nombre: "Marca vacía",  fn: () => new Motocicleta("",   "CBR", 2020, 600) },
  { nombre: "Modelo vacío", fn: () => new Automovil("Audi", "",    2019, 4) },
];

casos.forEach(({ nombre, fn }) => {
  try {
    fn();
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(` ${nombre}: ${e.message}`);
    }
  }
});

console.log();
console.log(" Programa finalizado correctamente.");


// EJERCICIO 2 - JERARQUIA DE CUENTA BANCARIA

class CuentaBancaria {
  titular: string;
  protected saldo: number;

  constructor(titular: string, saldo: number) {
    if (!titular || titular.trim() === "")
      throw new Error("El titular no puede estar vacío.");
    if (saldo < 0)
      throw new Error("El saldo inicial no puede ser negativo.");
    this.titular = titular.trim();
    this.saldo = saldo;
  }

  depositar(monto: number): void {
    if (monto <= 0) throw new Error("El monto a depositar debe ser mayor a 0.");
    this.saldo += monto;
    console.log(`Deposito de $${monto}. Nuevo saldo: $${this.saldo}`);
  }

  retirar(monto: number): void {
    if (monto <= 0) throw new Error("El monto a retirar debe ser mayor a 0.");
    if (monto > this.saldo) throw new Error("Saldo insuficiente.");
    this.saldo -= monto;
    console.log(`Retiro de $${monto}. Nuevo saldo: $${this.saldo}`);
  }

  mostrarInformacion(): void {
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo  : $${this.saldo}`);
  }
}

class CuentaAhorro extends CuentaBancaria {
  tasaInteres: number;

  constructor(titular: string, saldo: number, tasaInteres: number) {
    super(titular, saldo);
    if (tasaInteres < 0) throw new Error("La tasa de interés no puede ser negativa.");
    this.tasaInteres = tasaInteres;
  }

  aplicarInteres(): void {
    const interes = this.saldo * this.tasaInteres;
    this.saldo += interes;
    console.log(`Interes aplicado ($${interes.toFixed(2)}). Saldo: $${this.saldo.toFixed(2)}`);
  }

  mostrarInformacion(): void {
    console.log("Cuenta de Ahorro");
    super.mostrarInformacion();
    console.log(`Interes: ${this.tasaInteres * 100}%`);
  }
}

class CuentaCorriente extends CuentaBancaria {
  limiteSobregiro: number;

  constructor(titular: string, saldo: number, limiteSobregiro: number) {
    super(titular, saldo);
    if (limiteSobregiro < 0) throw new Error("El límite de sobregiro no puede ser negativo.");
    this.limiteSobregiro = limiteSobregiro;
  }

  retirar(monto: number): void {
    if (monto <= 0) throw new Error("El monto a retirar debe ser mayor a 0.");
    if (monto > this.saldo + this.limiteSobregiro)
      throw new Error("Supera el límite de sobregiro.");
    this.saldo -= monto;
    console.log(`Retiro de $${monto}. Saldo: $${this.saldo}`);
  }

  mostrarInformacion(): void {
    console.log("Cuenta Corriente");
    super.mostrarInformacion();
    console.log(`Sobregiro permitido: $${this.limiteSobregiro}`);
  }
}

// EJERCICIO 3 - SISTEMA ACADEMICO

class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    if (!nombre || nombre.trim() === "") throw new Error("El nombre no puede estar vacío.");
    if (edad <= 0) throw new Error("La edad debe ser mayor a 0.");
    this.nombre = nombre.trim();
    this.edad = edad;
  }

  mostrarRol(): void {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad  : ${this.edad} años`);
  }
}

class Estudiante extends Persona {
  carrera: string;
  matricula: string;

  constructor(nombre: string, edad: number, carrera: string, matricula: string) {
    super(nombre, edad);
    if (!carrera || carrera.trim() === "") throw new Error("La carrera no puede estar vacía.");
    if (!matricula || matricula.trim() === "") throw new Error("La matrícula no puede estar vacía.");
    this.carrera = carrera.trim();
    this.matricula = matricula.trim();
  }

  mostrarRol(): void {
    console.log("Estudiante");
    super.mostrarRol();
    console.log(`Carrera  : ${this.carrera}`);
    console.log(`Matricula: ${this.matricula}`);
  }
}

class Docente extends Persona {
  especialidad: string;
  codigoDocente: string;

  constructor(nombre: string, edad: number, especialidad: string, codigoDocente: string) {
    super(nombre, edad);
    if (!especialidad || especialidad.trim() === "") throw new Error("La especialidad no puede estar vacía.");
    if (!codigoDocente || codigoDocente.trim() === "") throw new Error("El código no puede estar vacío.");
    this.especialidad = especialidad.trim();
    this.codigoDocente = codigoDocente.trim();
  }

  mostrarRol(): void {
    console.log("Docente");
    super.mostrarRol();
    console.log(`Especialidad: ${this.especialidad}`);
    console.log(`Codigo      : ${this.codigoDocente}`);
  }
}

// EJERCICIO 4 - JERARQUIA DE PRODUCTOS

class Producto {
  nombre: string;
  precio: number;

  constructor(nombre: string, precio: number) {
    if (!nombre || nombre.trim() === "") throw new Error("El nombre del producto no puede estar vacío.");
    if (precio <= 0) throw new Error("El precio debe ser mayor a 0.");
    this.nombre = nombre.trim();
    this.precio = precio;
  }

  calcularPrecioFinal(): number {
    return this.precio;
  }

  mostrarInformacion(): void {
    console.log(`Nombre       : ${this.nombre}`);
    console.log(`Precio base  : $${this.precio.toFixed(2)}`);
    console.log(`Precio final : $${this.calcularPrecioFinal().toFixed(2)}`);
  }
}

class ProductoDigital extends Producto {
  formato: string;

  constructor(nombre: string, precio: number, formato: string) {
    super(nombre, precio);
    if (!formato || formato.trim() === "") throw new Error("El formato no puede estar vacío.");
    this.formato = formato.trim();
  }

  calcularPrecioFinal(): number {
    return this.precio;
  }

  mostrarInformacion(): void {
    console.log("Producto Digital");
    super.mostrarInformacion();
    console.log(`Formato      : ${this.formato}`);
  }
}

class ProductoFisico extends Producto {
  peso: number;
  recargoPorcentaje: number;

  constructor(nombre: string, precio: number, peso: number, recargoPorcentaje: number) {
    super(nombre, precio);
    if (peso <= 0) throw new Error("El peso debe ser mayor a 0.");
    if (recargoPorcentaje < 0) throw new Error("El recargo no puede ser negativo.");
    this.peso = peso;
    this.recargoPorcentaje = recargoPorcentaje;
  }

  calcularPrecioFinal(): number {
    return this.precio * (1 + this.recargoPorcentaje / 100);
  }

  mostrarInformacion(): void {
    console.log("Producto Fisico");
    super.mostrarInformacion();
    console.log(`Peso         : ${this.peso} kg`);
    console.log(`Recargo envio: ${this.recargoPorcentaje}%`);
  }
}

// EJERCICIO 5 - FIGURAS GEOMETRICAS

class Figura {
  calcularArea(): number {
    return 0;
  }

  mostrarInformacion(): void {
    console.log(`Area: ${this.calcularArea()}`);
  }
}

class Rectangulo extends Figura {
  base: number;
  altura: number;

  constructor(base: number, altura: number) {
    super();
    if (base <= 0) throw new Error("La base debe ser mayor a 0.");
    if (altura <= 0) throw new Error("La altura debe ser mayor a 0.");
    this.base = base;
    this.altura = altura;
  }

  calcularArea(): number {
    return this.base * this.altura;
  }

  mostrarInformacion(): void {
    console.log("Rectangulo");
    console.log(`Base  : ${this.base}`);
    console.log(`Altura: ${this.altura}`);
    console.log(`Area  : ${this.calcularArea()}`);
  }
}

class Circulo extends Figura {
  radio: number;

  constructor(radio: number) {
    super();
    if (radio <= 0) throw new Error("El radio debe ser mayor a 0.");
    this.radio = radio;
  }

  calcularArea(): number {
    return parseFloat((Math.PI * this.radio ** 2).toFixed(2));
  }

  mostrarInformacion(): void {
    console.log("Circulo");
    console.log(`Radio: ${this.radio}`);
    console.log(`Area : ${this.calcularArea()}`);
  }
}

// EJECUCION

function probarValidacion(nombre: string, fn: () => void): void {
  try {
    fn();
  } catch (e: unknown) {
    if (e instanceof Error) console.log(`Error ${nombre}: ${e.message}`);
  }
}

// Ejercicio 2
console.log("Ejercicio 1 - Cuentas Bancarias\n");

const ahorro = new CuentaAhorro("Ana Garcia", 1000, 0.05);
ahorro.mostrarInformacion();
console.log();
ahorro.depositar(500);
ahorro.retirar(200);
ahorro.aplicarInteres();

console.log();

const corriente = new CuentaCorriente("Luis Martinez", 500, 300);
corriente.mostrarInformacion();
console.log();
corriente.retirar(700);

console.log();
probarValidacion("saldo negativo",  () => new CuentaAhorro("Test", -100, 0.05));
probarValidacion("retiro excesivo", () => ahorro.retirar(999999));

// Ejercicio 3
console.log("\nEjercicio 2 - Sistema Academico\n");

const estudiante = new Estudiante("Maria Lopez", 20, "Ingenieria en Sistemas", "2024-001");
const docente = new Docente("Carlos Ruiz", 45, "Programacion Orientada a Objetos", "DOC-042");

estudiante.mostrarRol();
console.log();
docente.mostrarRol();

console.log();
probarValidacion("edad invalida", () => new Estudiante("Test", -5, "Derecho", "000"));
probarValidacion("nombre vacio",  () => new Docente("", 30, "Matematicas", "DOC-001"));

// Ejercicio 4
console.log("\nEjercicio 3 - Productos\n");

const digital = new ProductoDigital("Curso de TypeScript", 49.99, "MP4");
const fisico  = new ProductoFisico("Laptop Dell XPS", 1200, 2.5, 15);

digital.mostrarInformacion();
console.log();
fisico.mostrarInformacion();

console.log();
probarValidacion("precio cero",     () => new ProductoDigital("Test", 0, "PDF"));
probarValidacion("precio negativo", () => new ProductoFisico("Test", -10, 1, 5));

// Ejercicio 5
console.log("\nEjercicio 4 - Figuras Geometricas\n");

const rect    = new Rectangulo(8, 5);
const circulo = new Circulo(4);

rect.mostrarInformacion();
console.log();
circulo.mostrarInformacion();

console.log();
probarValidacion("radio negativo", () => new Circulo(-3));
probarValidacion("base cero",      () => new Rectangulo(0, 5));