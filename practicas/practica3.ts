import * as readline from "readline";

class Bloque {
    tipoBloque: string;
    dureza: number;
    recursoQueEntrega: string;

    constructor(tipo: string, dureza: number, recurso: string) {
        this.tipoBloque = tipo;
        this.dureza = dureza;
        this.recursoQueEntrega = recurso;
    }

    romper(): string {
        return this.recursoQueEntrega;
    }

    mensajeAlRomperse(): void {
        console.log("Has roto un bloque de " + this.tipoBloque);
    }
}

class Pico {
    material: string;
    poderDeMineria: number;

    constructor(material: string, poder: number) {
        this.material = material;
        this.poderDeMineria = poder;
    }

    minar(bloque: Bloque): string | null {
        if (this.poderDeMineria >= bloque.dureza) {
            bloque.mensajeAlRomperse();
            return bloque.romper();
        } else {
            console.log("El pico no tiene suficiente poder para romper este bloque");
            return null;
        }
    }
}

class Jugador {
    nombre: string;
    pico: Pico;
    inventario: string[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.pico = new Pico("madera", 1);
        this.inventario = [];
    }

    cambiarPico(pico: Pico): void {
        this.pico = pico;
        console.log("Ahora tienes un pico de " + pico.material);
    }

    minarBloque(bloque: Bloque): void {
        const recurso = this.pico.minar(bloque);
        if (recurso) {
            this.inventario.push(recurso);
            console.log("Recurso obtenido: " + recurso);
        }
    }

    mostrarInventario(): void {
        console.log("Inventario:", this.inventario);
    }
}

const bloques = [
    new Bloque("hierro", 2, "mineral de hierro"),
    new Bloque("oro", 3, "mineral de oro"),
    new Bloque("diamante", 5, "diamante"),
    new Bloque("obsidiana", 7, "obsidiana"),
    new Bloque("carbon", 1, "carbon"),
    new Bloque("esmeralda", 4, "esmeralda")
];

const picos = [
    new Pico("madera", 1),
    new Pico("piedra", 3),
    new Pico("hierro", 5),
    new Pico("diamante", 7)
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pedirNumero(pregunta: string, callback: (n: number) => void) {
    rl.question(pregunta, (respuesta) => {
        const n = parseInt(respuesta);
        if (isNaN(n)) {
            console.log("Debes ingresar un número válido.");
            return pedirNumero(pregunta, callback);
        }
        callback(n);
    });
}

rl.question("Nombre del jugador: ", (nombre) => {
    console.log("\nBienvenido " + nombre);
    console.log("Empiezas con un pico de madera\n");

    const jugador = new Jugador(nombre);

    function menuPrincipal() {
        console.log("\n1 - Minar bloque");
        console.log("2 - Cambiar pico");
        console.log("3 - Ver inventario");
        console.log("4 - Salir");

        pedirNumero("Opción: ", (op) => {
            if (op === 1) {
                console.log("\nSelecciona un bloque:");
                bloques.forEach((b, i) => {
                    console.log(`${i} - ${b.tipoBloque} (dureza ${b.dureza})`);
                });

                pedirNumero("Bloque: ", (n) => {
                    if (n >= 0 && n < bloques.length) {
                        jugador.minarBloque(bloques[n]!);
                    } else {
                        console.log("Opción inválida.");
                    }
                    menuPrincipal();
                });

            } else if (op === 2) {
                console.log("\nSelecciona un pico:");
                picos.forEach((p, i) => {
                    console.log(`${i} - Pico de ${p.material} (poder ${p.poderDeMineria})`);
                });

                pedirNumero("Pico: ", (n) => {
                    if (n >= 0 && n < picos.length) {
                        jugador.cambiarPico(picos[n]!);
                    } else {
                        console.log("Opción inválida.");
                    }
                    menuPrincipal();
                });

            } else if (op === 3) {
                jugador.mostrarInventario();
                menuPrincipal();

            } else if (op === 4) {
                console.log("Gracias por jugar");
                rl.close();
            } else {
                console.log("Opción inválida.");
                menuPrincipal();
            }
        });
    }

    menuPrincipal();
});
