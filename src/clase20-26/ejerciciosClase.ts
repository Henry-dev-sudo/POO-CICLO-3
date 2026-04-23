// Ejercicio 1

// Crea una clase abstracta donde se solicite de manera publica el 
// nickname de un jugador y el total de 
// vida que es 100% en privado, Crear la clase mundo 1 que séra una clase hija,
//  donde se creara un método aventura y en ese método se le restara el 30% de vida al 
//  jugador, Crear el metodo acuatico donde se le restara el 50% de vida y luego se le 
//  sumara el 10% y crear el método endgame donde se le restara el 50% de vida. 
//   Cada método debe de imprimir el dato restante de vida que le quedo al jugador.  

abstract class Jugador {
    nickname: string;
    vida: number;

    constructor(nickname: string) {
        this.nickname = nickname;
        this.vida = 100;
    }
    abstract aventura(): void;
    abstract acuatico(): void;
    abstract endgame(): void;
}

class munditoOne extends Jugador {
    constructor(nickname: string) {
        super(nickname);
    }
    aventura(): void {
        this.vida = 100,
        this.vida -= 30;
        console.log(`Después de la aventura, ${this.nickname} tiene ${this.vida}% de vida restante.`);
    }

    acuatico(): void {
        this.vida = 100,
        this.vida -= 50;
        this.vida += 10; // sumamos el 10% después de restar el 50%
        console.log(`Después del mundo acuático, ${this.nickname} tiene ${this.vida}% de vida restante.`);
    }

    endgame(): void {
        this.vida = 100,
        this.vida -= 50;
        console.log(`Después del juego final, ${this.nickname} tiene ${this.vida}% de vida restante.`);
    }
}
console.log("\njugador 1 ")
let jugador1 = new munditoOne("JUANSITO EL PROSITO");
jugador1.aventura();
jugador1.acuatico();
jugador1.endgame();


// Ejercicio 2:

// 2. Aplicar al ejercicio 1 el formato de mantener el porcentaje de vida para interactuar 
// con los otros métodos, todo imprimiendo siempre mensajes en consola.

abstract class Jugador2 {
    nickname: string;
    vida: number;

    constructor(nickname: string) {
        this.nickname = nickname;
        this.vida = 100;
    }

    abstract aventura(): void;
    abstract acuatico(): void;
    abstract endgame(): void;
}

class MunditoTWO extends Jugador {
    constructor(nickname: string) {
        super(nickname);
    }

    private validarVida(): void {
        if (this.vida > 100) this.vida = 100;
        if (this.vida < 0) this.vida = 0;

        if (this.vida === 0) {
            console.log(`${this.nickname} ha perdido toda su vida. ¡GAME OVER!`);
        }
    }

    aventura(): void {
        this.vida -= 30;
        this.validarVida();
        console.log(`Después de la aventura, ${this.nickname} tiene ${this.vida}% de vida restante.`);
    }

    acuatico(): void {
        this.vida -= 50;
        this.vida += 10; // recuperación
        this.validarVida();
        console.log(`Después del mundo acuático, ${this.nickname} tiene ${this.vida}% de vida restante.`);
    }

    endgame(): void {
        this.vida -= 50;
        this.validarVida();
        console.log(`Después del juego final, ${this.nickname} tiene ${this.vida}%. LLegates a cero de vida PERDISTE QUE BOT JAJA
            .`);
    }
}

console.log("\n jugador 2")
const jugador2 = new MunditoTWO("JUANSITO EL PROSITO");
jugador2.aventura();
jugador2.acuatico();
jugador2.endgame();