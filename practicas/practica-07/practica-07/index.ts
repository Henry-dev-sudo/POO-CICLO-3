import {Sword} from "./models/Sword";
import {Bow} from "./models/Bow";
import {User} from "./models/Player";
import { Inventory } from "./models/inventario";

// Espadas
const espada = new Sword('Espada', 10, 100, 'sword');
const daga = new Sword('Daga', 10, 100, 'dagger');

// Arcos
const arco = new Bow('Arco', 10, 100, 'bow', 150);
const ballesta = new Bow('Ballesta', 10, 100, 'crossbow', 220);

// Inventario
const inventarioBase = new Inventory(1);
const mochila1 = new Inventory(2);
const mochila11 = new Inventory(3);
const mochila111 = new Inventory(4);

// usuario
const personaje1 = new User('Henry', inventarioBase)
personaje1.attack();
personaje1.addItemToInventory(espada);
personaje1.changeWeapon(espada);
personaje1.attack();

personaje1.addItemToInventory(arco);
personaje1.viewInventory();

const personaje2 = new User('Isvi', mochila1);
