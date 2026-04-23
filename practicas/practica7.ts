// let texto: String;
// let numero: Number;

// interface usuario {
//     nombre: String;
//     edad: Number;
// }

// let carnet: String | Number | null


// let usuario: usuario;

// let usuarios: Array<usuario>;
// let usuarios2: usuario[];


// let nombre = "Juan";
// let edad = 30;

// usuario = {
//     nombre: nombre,
//     edad: edad
// }

// usuarios.push(usuario);
// usuarios.push(texto)


//Ejercicio praactica:

export abstract class weaponMode1 {
    name: string;
    damage: number;
    durability: number;

    constructor(name: string, damage: number, durability: number) {
        this.name = name;
        this.damage = damage;
        this.durability = durability;
    }

    abstract attack(): void;
    abstract stats(): void;
}

export type swordtype = 'sword' | 'dagger'
export type dowtype = 'bow' | 'crossbow'

export class sword extends weaponMode1 {
    swordType: swordtype;

    constructor(name: string, damage: number, durability: number, swordType: swordtype) {
        super(name, damage, durability);
        this.swordType = swordType;
    }  

    attack(): number {
        if (this.swordType === 'sword') return this.damage * 1.2;
        if (this.swordType === 'dagger') return this.damage * 1.5;
    }

    stats(): void { 
        console.log(`Nombre: ${this.name}, 
            Tipo: ${this.swordType}, 
            Daño: ${this.damage}, 
            Durabilidad: ${this.durability}`);
    }
}

export class bow extends weaponMode1 {
    dowType: dowtype;
    scope: number;

    constructor(name: string, damage: number, durability: number, dowType: dowtype, scope: number) {
        super(name, damage, durability);
        this.dowType = dowType;
        this.scope = scope;
    }

    attack(): number {
        if (this.dowType === 'bow') return this.damage * 1.8;
        if (this.dowType === 'crossbow') return this.damage * 2.2;
        return this.damage;
    }

    stats(): void {
        console.log(`Nombre: ${this.name}, 
            Tipo: ${this.dowType}, 
            Daño: ${this.damage}, 
            Durabilidad: ${this.durability}, 
            Alcance: ${this.scope}`);
    }
}
