import { weaponMode1, sword, bow } from "./practica7";

interface usuario {
    attack(): void;
    changeWeapon(newWeapon: weaponMode1): void;
}

class User implements usuario {
    name: string;
    weapon: weaponMode1;

    constructor(name: string, weapon: weaponMode1) {
        this.name = name;
        this.weapon = weapon;
    }

    attack(): void {
        console.log(`El personaje ${this.name} ataca con ${this.weapon.name} y hace ${this.weapon.attack()} de daño.`);
    }

    viewStats(): void {
        console.log(`Estadísticas de ${this.name}:`);
        this.weapon.stats();
    }

    changeWeapon(newWeapon: weaponMode1): void {
        this.weapon = newWeapon;
    }
}

// Espadas
const espada = new sword('Espada', 10, 100, 'sword');
const daga = new sword('daga', 10, 100, 'dagger');

//arcos
const arco = new bow('arquito', 10, 100, 'bow', 150);
const ballesta = new bow('ballesta', 10, 100, 'crossbow', 200);

// Example usage
const player = new User('Hero', espada);
player.attack();

console.log('\n Estadísticas')
player.viewStats();

console.log('\n Daga')
player.changeWeapon(daga);
player.attack();

console.log('\n Estadísticas')
player.viewStats();

console.log('\n Arco')
player.changeWeapon(arco);
player.attack();

console.log('\n Estadísticas')
player.viewStats();

console.log('\n Ballesta')
player.changeWeapon(ballesta);
player.attack();

console.log('\n Estadísticas')
player.viewStats();
