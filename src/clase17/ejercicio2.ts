abstract class Vehiculo { 
    tipo: string; 

    constructor(tipo: string){ 
        this.tipo = tipo;
    }


    abstract mover(): void;
}

class Carro extends Vehiculo { 
    mover(): void{
        console.log("EL carro se mueve a 40km/h")
    }
}

class Moto extends Vehiculo { 
    mover (): void { 
        console.log("La moto va en pique a 40km/h")
    }
}
const carrito = new Carro("Honda");
carrito.mover();

