"use strict";
// //EJERCICIO 1
// class Usuario { 
//     nombre: string;
//     apellido: string;
//     telefono: string;
//     correo: string;
//     private codIdentificacion: string;
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(nombre: string, apellido: string, telefono: string, correo: string, codIdentificacion: string) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.telefono = telefono;
//         this.correo = correo;
//         this.codIdentificacion = codIdentificacion;
//     }
// }
// let u = new Usuario("Aldair", "Zelaya", "60484064", "aldair.zelaya@example.com", "123456789");
// console.log(u);
// //EJERCICIO 2:
class Factura {
    constructor(producto, cantidad, precio, iva, descuento) {
        this.producto = producto;
        this.cantidad = cantidad;
        this.precio = precio;
        this.iva = iva;
        this.descuento = descuento;
    }
    calculartotal() {
        let subtotal = this.precio * this.cantidad;
        let descuentoTotal = subtotal * (this.descuento / 100);
        let ivaTotal = (subtotal - descuentoTotal) * (this.iva / 100);
        let total = subtotal - descuentoTotal + ivaTotal;
        return ('Precio del producto: ' + this.precio
            + '\nCantidad: ' + this.cantidad
            + '\nIVA: ' + this.iva + '%'
            + '\nDescuento: ' + this.descuento + '%'
            + '\nTotal a pagar: ' + total.toFixed(2));
    }
}
let f = new Factura("Laptop", 2, 400, 15, 10);
console.log(f.calculartotal());
//EJERCICIO 3:
// class vercicacion{ 
//     nombre: string;
//     edad: number;
//     constructor(nombre: string, edad: number) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }
//     verificarEdad(){
//         if ( this.edad > 0 && this.edad < 2) {
//             return this.nombre + ' es un bebé.';
//         } else if (this.edad >= 2 && this.edad < 10) {
//             return this.nombre + ' es un niño.';
//         } else if (this.edad >= 10 && this.edad < 14) {
//             return this.nombre + ' es un preadolescente.';
//         } else if (this.edad >= 14 && this.edad < 17) {
//             return this.nombre + ' es un adolecente.';
//         } else if (this.edad >= 17 && this.edad < 30) {
//             return this.nombre + ' es un joven.';
//         } else if (this.edad >= 30 && this.edad < 50) {
//             return this.nombre + ' es un adulto.';
//         } else if(this.edad >= 50) {
//             return this.nombre + ' es un adulto mayor.';
//         }else {
//             return 'Edad no válida.';
//         }
//     }
// }
// let v = new vercicacion("Aldair", 25);
// console.log(v.verificarEdad());
//# sourceMappingURL=lab.js.map