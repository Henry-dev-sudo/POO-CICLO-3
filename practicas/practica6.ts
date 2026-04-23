abstract class Suscripcion {
    private precioBase: number;

    constructor(precioBase: number) {
        this.precioBase = precioBase;
    }

    
    getPrecioBase(): number {
        return this.precioBase;
    }

    abstract calcularCosto(): number;
    abstract mostrarBeneficios(): string;
    abstract usar(): void;
    abstract getLimiteUso(): number;
}


class SuscripcionBasica extends Suscripcion {
    private limiteUso: number = 1000;

    constructor() {
        super(20); // precio base
    }

    calcularCosto(): number {
        return this.getPrecioBase() * 1.10; // +10%
    }

    mostrarBeneficios(): string {
        return "Acceso básico y uso limitado.";
    }

    usar(): void {
        this.limiteUso--;
    }

    getLimiteUso(): number {
        return this.limiteUso;
    }
}

class SuscripcionPremium extends Suscripcion {
    private limiteUso: number = 100;

    constructor() {
        super(20); // precio base
    }

    calcularCosto(): number {
        return this.getPrecioBase() * 1.50; // +50%
    }

    mostrarBeneficios(): string {
        return "Acceso completo + beneficios extra.";
    }

    usar(): void {
        this.limiteUso--;
    }

    getLimiteUso(): number {
        return this.limiteUso;
    }
}


class Usuario {
    private nombre: string;
    private suscripcion: Suscripcion;

    constructor(nombre: string, tipo: string) {
        this.nombre = nombre;

        if (tipo.toLowerCase() === "basica") {
            this.suscripcion = new SuscripcionBasica();
        } else {
            this.suscripcion = new SuscripcionPremium();
        }
    }

    usarSuscripcion(): void {
        this.suscripcion.usar();
    }

    mostrarEstado(): void {
        console.log(`Usuario: ${this.nombre}`);
        console.log(`Costo de suscripción: $${this.suscripcion.calcularCosto()} dólares`);
        console.log(`Beneficios: ${this.suscripcion.mostrarBeneficios()}`);
        console.log(`Límite de uso restante: ${this.suscripcion.getLimiteUso()}`);
    }
}


const usuario1 = new Usuario("henry", "basica");

usuario1.usarSuscripcion();
usuario1.mostrarEstado();

