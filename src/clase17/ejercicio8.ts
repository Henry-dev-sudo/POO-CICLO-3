// Ejercicio 8 Sistema de Tienda (Nivel Avanzado)
// Crear una clase abstracta Producto con los métodos calcularPrecioFinal() y
// mostrarInformacion(). El sistema debe permitir registrar productos electrónicos, ropa y
// alimentos. Cada tipo de producto debe aplicar diferentes reglas de impuestos o descuentos
// para calcular el precio final.

//
abstract class Producto {
    nombre: string;
    precioBase: number;

    constructor(nombre: string, precioBase: number) {
        this.nombre = nombre;
        this.precioBase = precioBase;
    }

    abstract calcularPrecioFinal(): number;
    abstract mostrarInformacion(): void;
}

class Electronico extends Producto {
    garantiaAnios: number;

    constructor(nombre: string, precioBase: number, garantiaAnios: number) {
        super(nombre, precioBase);
        this.garantiaAnios = garantiaAnios;
    }

    calcularPrecioFinal(): number {
        return this.precioBase * 1.15;
    }

    mostrarInformacion(): void {
        console.log(
            `Electrónico: ${this.nombre}, Precio Base: $${this.precioBase}, Garantía: ${this.garantiaAnios} años, Precio Final: $${this.calcularPrecioFinal().toFixed(2)}`
        );
    }
}

class Ropa extends Producto {
    talla: string;

    constructor(nombre: string, precioBase: number, talla: string) {
        super(nombre, precioBase);
        this.talla = talla;
    }

    calcularPrecioFinal(): number {
        return this.precioBase * 0.90;
    }

    mostrarInformacion(): void {
        console.log(
            `Ropa: ${this.nombre}, Precio Base: $${this.precioBase}, Talla: ${this.talla}, Precio Final: $${this.calcularPrecioFinal().toFixed(2)}`
        );
    }
}

class Alimento extends Producto {
    private fechaExpiracion: string;

    constructor(nombre: string, precioBase: number, fechaExpiracion: string) {
        super(nombre, precioBase);
        this.fechaExpiracion = fechaExpiracion;
    }

    calcularPrecioFinal(): number {
        return this.precioBase * 1.05;
    }

    mostrarInformacion(): void {
        console.log(
            `Alimento: ${this.nombre}, Precio Base: $${this.precioBase}, Expira: ${this.fechaExpiracion}, Precio Final: $${this.calcularPrecioFinal().toFixed(2)}`
        );
    }
}

const laptop = new Electronico("Laptop Gamer", 1200, 2);
const camiseta = new Ropa("Camiseta Nike", 50, "M");
const leche = new Alimento("Leche Entera", 2, "2026-04-01");

laptop.mostrarInformacion();
camiseta.mostrarInformacion();
leche.mostrarInformacion();