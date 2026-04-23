// // class CuentaBancaria{ 
// //     private titular: string;
// //     private saldo: number;

// //     constructor(titular: string, saldo: number) {
// //         this.titular = titular;
// //         this.saldo = saldo;
// //     }

// //     getSaldo(usuario: { nombre: string; role: string }): number {
// //         if (usuario.role == "cliente"){
// //             throw new Error("los clientes no pueden acceder al saldo");
// //         }
// //         return this.saldo;
// //     }

// //     setSaldo(
// //         usuario: { nombre: string; role: string },
// //         saldo: number
// //     ): void {
// //             if ( usuario.role == "cliente"){
// //                 throw new Error("los clientes non pueden ver el saldo");
// //             }

// //             if (saldo <= 0 ){
// //                 throw new Error("el saldo debe ser menor a 0");
// //             }
// //             this.saldo += saldo;
// //     }
// // }

// // const usuarioAdmin = { 
// //     nombre: "admin", 
// //     role: "admin" 
// // };

// // const usuario ={ 
// //     nombre: "usuario",
// //     role: "cliente"
// // };

// // const cuentaAhorro = new CuentaBancaria("Juan Perez", 25);
// // console.log(cuentaAhorro.titular); 
// // console.log(cuentaAhorro.getSaldo(usuarioAdmin));
// // cuentaAhorro.setSaldo(usuarioAdmin,100);
// // console.log(cuentaAhorro.getSaldo(usuario));

// EJERCICIO 2:

// const usuarioAdmin = { nombre: "admin", role: "admin" };
// const usuario = { nombre: "usuario", role: "cliente" };

// class Producto {
//   nombre: string;
//   precio: number;
//   private stock: number;

//   constructor(nombre: string, precio: number, stock: number) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.stock = stock;
//   }

//   getStock(): number {
//     return this.stock;
//   }

//   aumentarStock(u: { role: string }, cantidad: number): void {
//     if (u.role === "cliente") {
//       console.log("Los clientes no pueden modificar el stock.");
//       return;
//     }
//     if (cantidad <= 0) {
//       console.log("La cantidad debe ser mayor a 0.");
//       return;
//     }
//     this.stock += cantidad;
//   }

//   disminuirStock(u: { role: string }, cantidad: number): void {
//     if (u.role === "cliente") {
//       console.log("Los clientes no pueden modificar el stock.");
//       return;
//     }
//     if (cantidad <= 0) {
//       console.log("La cantidad debe ser mayor a 0.");
//       return;
//     }
//     this.stock -= cantidad;
//   }
// }

// const producto = new Producto("Laptop", 1500, 10);

// console.log("=== Admin ===");
// console.log("Stock actual:", producto.getStock());
// producto.aumentarStock(usuarioAdmin, 5);
// console.log("Tras aumentar 5:", producto.getStock());
// producto.disminuirStock(usuarioAdmin, 3);
// console.log("Tras disminuir 3:", producto.getStock());

// console.log("\n=== Cliente ===");
// console.log("Stock actual:", producto.getStock());
// producto.aumentarStock(usuario, 10);
// producto.disminuirStock(usuario, 5);


//EJRCICIO 3:

class Producto {
    private nombre: string;
    private precio: number;
    private cantidad: number = 0;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;

    }

    getNombre(): string {
        return this.nombre;
    }

    getPrecio(): number {
        return this.precio;
    }

    getCantidad(): number {
        return this.cantidad;
    }

    setCantidad(cantidad: number): void {
    if (cantidad <= 0) {
        throw new Error("La cantidad debe ser mayor a 0");
    }
    this.cantidad = cantidad;
}
}

class Carrito{
    private productos: Producto[];
    private total: number;

    constructor() {
        this.productos = [];
        this.total = 0;
    }

    agregarProducto(producto: Producto, cantidad: number): void {
        if (cantidad <= 0) return;

        const existente = this.productos.find(
            (p) => p.getNombre() === producto.getNombre()
        );

        if (existente) {
            existente.setCantidad(existente.getCantidad() + cantidad);
        } else {
            producto.setCantidad(cantidad);
            this.productos.push(producto);
        }

        this.calcularTotal();
    }

    eliminarProducto(nombre: string): void {
        this.productos = this.productos.filter(
            (p) => p.getNombre() !== nombre
        );
        this.calcularTotal();
    }

    calcularTotal(): number {
        this.total = this.productos.reduce(
            (acc, p) => acc + p.getPrecio() * p.getCantidad(), 0
        );
        return this.total;
    }

    mostrarDetalle(): string {
        if (this.productos.length === 0) return "El carrito está vacío.";

        let detalle = "=== Detalle del carrito ===\n";
        this.productos.forEach((p) => {
            const subtotal = p.getPrecio() * p.getCantidad();
            detalle += `${p.getNombre()} x${p.getCantidad()} — $${subtotal.toFixed(2)}\n`;
        });
        detalle += `\nTotal: $${this.total.toFixed(2)}`;
        return detalle;
    }
}


const pera = new Producto("Pera", 0.75);
const Chile = new Producto("Chile pa Mangos",   1.20);
const pan  = new Producto("Pancito dulce",     2.50);

const carrito = new Carrito();

carrito.agregarProducto(pera, 3);
carrito.agregarProducto(Chile, 2);
carrito.agregarProducto(pan, 1);

console.log(carrito.mostrarDetalle());

carrito.eliminarProducto("Pera");
console.log(carrito.mostrarDetalle());
