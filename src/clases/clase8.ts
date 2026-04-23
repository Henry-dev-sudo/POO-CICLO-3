class inventario{
    id:number;
    producto:string;
    codigo:string;
    fecha:string;
    precio:number
    

    constructor(id:number, producto:string, codigo:string, fecha:string, precio:number){
        this.id = id;
        this.producto = producto;
        this.codigo = codigo;
        this.fecha = fecha;
        this.precio = precio;
    }

    public Agregar(precio2:number, precio3:number):void{
        console.log('Porducto agragado con precio: $' + this.precio);
        console.log('Precio de descuento: $' + precio2+ ' y ' + precio3);
    }
}

let producto = new inventario(1, 'Coca-cola', '1234', '12/06/2024', 100);
producto.Agregar(80, 50);