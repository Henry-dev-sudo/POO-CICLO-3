// Ejercicio 5 Sistema de Pagos
// Crear una clase abstracta Pago con el método procesarPago(). El usuario debe poder
// seleccionar entre pago en efectivo, pago con tarjeta o transferencia bancaria. Cada clase
// debe implementar su proceso de pago.

abstract class Pago {
    abstract procesarPago(monto: number, saldo: number): number;
}

class PagoEfectivo extends Pago {
    procesarPago(monto: number, saldo: number): number {
        console.log(`Pagando $${monto} en efectivo.`);
        return saldo - monto;
    }
}

class PagoTarjeta extends Pago {
    procesarPago(monto: number, saldo: number): number {
        console.log(`Pagando $${monto} con tarjeta.`);
        return saldo - monto;
    }
}

class PagoTransferencia extends Pago {
    procesarPago(monto: number, saldo: number): number {
        console.log(`Pagando $${monto} con transferencia bancaria.`);
        return saldo - monto;
    }
}

let saldo = 1000; // saldo inicial

const efectivo = new PagoEfectivo();
saldo = efectivo.procesarPago(200, saldo);
console.log(`Saldo restante: $${saldo}`);

const tarjeta = new PagoTarjeta();
saldo = tarjeta.procesarPago(300, saldo);
console.log(`Saldo restante: $${saldo}`);

const transferencia = new PagoTransferencia();
saldo = transferencia.procesarPago(150, saldo);
console.log(`Saldo restante: $${saldo}`);