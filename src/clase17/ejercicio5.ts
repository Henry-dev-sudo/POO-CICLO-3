// Ejercicio 5 Sistema de Pagos
// Crear una clase abstracta Pago con el método procesarPago(). El usuario debe poder
// seleccionar entre pago en efectivo, pago con tarjeta o transferencia bancaria. Cada clase
// debe implementar su proceso de pago.

abstract class Pago {
    abstract procesarPago(): void;
}

class PagoEfectivo extends Pago {
    procesarPago(): void {
        console.log("Estás pagando en efectivo.");
    }
}

class PagoTarjeta extends Pago {
    procesarPago(): void {
        console.log("Estás pagando con tarjeta.");
    }
}

class PagoTransferencia extends Pago {
    procesarPago(): void {
        console.log("Estás pagando con transferencia bancaria.");
    }
}

const efectivo = new PagoEfectivo();
efectivo.procesarPago();

const tarjeta = new PagoTarjeta();
tarjeta.procesarPago();

const transferencia = new PagoTransferencia();
transferencia.procesarPago();