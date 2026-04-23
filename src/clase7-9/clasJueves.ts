//Ejercicio  1: 
abstract class Dispositivo {
    constructor(public nombre: string) {}

    abstract encender(): void;
    abstract apagar(): void;
}

class Televisor extends Dispositivo {
    override encender(): void {
        console.log(`${this.nombre} se ha encendido.`);
    }

    override apagar(): void {
        console.log(`${this.nombre} se ha apagado.`);
    }
}

class Radio extends Dispositivo {
    override encender(): void {
        console.log(`${this.nombre} se ha encendido.`);
    }
    apagar(): void {
        console.log(`${this.nombre} se ha apagado.`);
    }   
}

const dispositivos: Dispositivo[] = [
    new Televisor("Televisor Samsung"),
    new Radio("Radio Sony")
];

dispositivos.forEach(dispositivo => {
    dispositivo.encender();
    dispositivo.apagar();
});


//Ejercicio 2:

abstract class metodoPago {
    constructor(public titular: string) {}

    abstract pagar(monto: number): void;

    mostrarTitular(): void {
        console.log(`Titular: ${this.titular}`);
    }
}

class TarjetaCredito extends metodoPago {
    override pagar(monto: number): void {
        console.log(`Pagando $${monto}  dolares con tarjeta de crédito de ${this.titular}.`);
    }
}

class Efectivo extends metodoPago {
    override pagar(monto: number): void {
        console.log(`Pagando $${monto}  dolares en efectivo de ${this.titular}.`);
    } 
}

const pagos: metodoPago[] = [
    new TarjetaCredito("Henry Zelaya"),
    new Efectivo("Aldair Cortez")
];  

pagos.forEach(pago => {
    pago.mostrarTitular();
    pago.pagar(100);
});