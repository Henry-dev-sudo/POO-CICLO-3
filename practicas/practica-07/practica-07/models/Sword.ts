import {WeaponModel} from "./WeaponModel";

export type SwordType = 'sword' | 'dagger';

export class Sword extends WeaponModel {
    swordType: SwordType;

    constructor(
        name: string,
        damage: number,
        durability: number,
        swordType: SwordType
    ) {
        super(name, damage, durability);
        this.swordType = swordType;
    }

    attack(): number {
        if (this.swordType === 'sword') return this.damage * 1.2;
        if (this.swordType === 'dagger') return this.damage * 1.5;
    }

    stats() {
        console.log(`Estadisticas del Arma:`)
        console.log(`Nombre: ${this.name}`)
        console.log(`Dano: ${this.damage}:`)
        console.log(`Durabilidad: ${this.durability}:`)
        console.log(`Tipo: ${this.swordType}:`)
    }
}