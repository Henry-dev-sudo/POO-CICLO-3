/* ejercicios en clase antes de la actividad */

class banco {

  cliente: string;
  private saldo: number;

  constructor(cliente: string, saldoInicial: number) {
    this.cliente = cliente;
    this.saldo = saldoInicial;
  }
  get NuevoSaldo(): number { // método para obtener el saldo, pero no permite modificarlo directamente
    return this.saldo;
  }

  set Nuevosaldo(valor: number) { // método para modificar el saldo, pero con validación
    if (valor < 0) {
      throw new Error("El saldo no puede ser negativo");
    }
    this.saldo = valor;
  }
  mostrar(): void{
    console.log("saldo " + this.saldo);
  }
}

// let objeto = new banco("Cristiano Ronaldo", 100000);
// objeto.mostrar();
// objeto.Nuevosaldo = 150000; // modificamos el saldo a través del método set
// objeto.mostrar(); // mostramos el nuevo saldo

class Movimientos extends banco{
    deposito: number;
  constructor(cliente: string, saldo: number, deposito: number) {
    super(cliente, saldo);
    this.deposito = deposito;
  }

  procesodeposito(): void {
     nuevoSaldo = this.NuevoSaldo + this.deposito; // utilizamos el método set para actualizar el saldo
    console.log(`Depósito de ${this.deposito} realizado. Nuevo saldo: ${nuevoSaldo}`);
    this.comision(nuevoSaldo);
    }
}

comision(nuevoSaldo: number): number {
    let salida = nuevoSaldo-1;
    console.log('te cobre por la transfer nuevo saldo: ' + salida);
    return salida;
  }
  
let dep = 25;
let proceso  = new Movimientos("Cristiano Ronaldo", 100, dep);
proceso.Nuevosaldo = 800;
proceso.procesodeposito();