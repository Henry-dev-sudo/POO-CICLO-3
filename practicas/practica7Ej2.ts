abstract class Descuento {
  abstract aplicar(monto: number): number;
}

class DescuentoFijo extends Descuento {
  constructor(private monto: number) { super(); }
  aplicar(monto: number): number {
    return Math.max(0, monto - this.monto);
  }
}

class DescuentoPorcentual extends Descuento {
  constructor(private porcentaje: number) { super(); }
  aplicar(monto: number): number {
    return monto * (1 - this.porcentaje / 100);
  }
}

class DescuentoVip extends Descuento {
  aplicar(monto: number): number {
    return monto > 500 ? monto * 0.8 : monto * 0.9;
  }
}

class Producto {
  constructor(
    public nombre: string,
    public precio: number,
    public cantidad: number
  ) {}
}

class Carrito {
  private productos: Producto[] = [];
  private descuentos: Descuento[] = [];

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }

  agregarDescuento(descuento: Descuento): void {
    this.descuentos.push(descuento);
  }

  calcularTotal(): number {
    let total = this.productos.reduce((acc, p) => acc + (p.precio * p.cantidad), 0);

    this.descuentos.forEach(d => {
      total = d.aplicar(total);
    });

    return total;
  }
}

// Ejecución
const carrito = new Carrito();
carrito.agregarProducto(new Producto("Monitor", 300, 1));
carrito.agregarProducto(new Producto("Teclado", 50, 2));

carrito.agregarDescuento(new DescuentoFijo(20));
carrito.agregarDescuento(new DescuentoPorcentual(10));
carrito.agregarDescuento(new DescuentoVip());

console.log("Total con descuentos aplicados:", carrito.calcularTotal());