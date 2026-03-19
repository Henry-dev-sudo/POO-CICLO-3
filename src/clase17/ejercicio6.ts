// Ejercicio 6 Sistema de Notificaciones
// Crear una clase abstracta Notificación con el método enviar(). El sistema debe permitir
// enviar notificaciones por Email, SMS o WhatsApp. Cada clase implementará su forma de
// envío.

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