class CuentaBancaria {
  private _saldo: number;
  constructor(saldo: number) {
    this._saldo = saldo;
  }

  // Getter
  get saldo(): number {
    return this._saldo;
  }

  // Setter
  set saldo(valor: number) {
    if (valor < 0) {
      console.log("No se permite saldo negativo");
      return;
    }
    this._saldo = valor;
  }

  // Método para depositar
  depositar(monto: number) {
    if (monto > 0) {
      this._saldo += monto;
    }
  }
}

const cuenta = new CuentaBancaria(1000);
cuenta.saldo = 5000; //
cuenta.depositar(500); //
console.log(cuenta.saldo); // 1500
