import { InventoryModel } from "./inventario";
import {WeaponModel} from "./WeaponModel";

interface Player {
    addItemToInventory(item: WeaponModel): void;
    removeItemFromInventory(item: WeaponModel): void;
    attack(): void;
    changeWeapon(newWeapon: WeaponModel): void;
    viewStats(): void;
    viewInventory(): void;
}

export class User implements Player {
    name: string;
    weaponInUse: WeaponModel | null;
    inventory: InventoryModel;

    constructor(name: string, inventory: InventoryModel) {
        this.name = name;
        this.weaponInUse = null;
        this.inventory = inventory;
    }

    attack(): void {
        if (this.weaponInUse == null) {
            console.log(`El personaje ${this.name} no tiene un arma en uso`);
            return; 
        }  
        console.log(`El personaje ${this.name} ha realizado un ataque 
        con ${this.weaponInUse.name} haciendo ${this.weaponInUse.attack()} de daño`)
    }

    changeWeapon(newWeapon: WeaponModel): void {
        const weaponExist: WeaponModel[] = this.inventory
        .getItems()
        .filter((w: WeaponModel) => w === newWeapon);

        if (weaponExist.length === 0){
            console.log(`El personaje ${this.name} no tiene el arma ${newWeapon.name} en su inventario`);
            return;
        }

        this.weaponInUse = weaponExist[0];
    }

    viewStats(): void {
        if (this. weaponInUse == null) {
        console.log(`El personaje ${this.name} no tiene un arma en uso`);
        return; 
        }
       this.weaponInUse.stats();
    }

    addItemToInventory(weapon: WeaponModel): void {
        this.inventory.addItem(weapon);
    }

    removeItemFromInventory(weapon: WeaponModel): void {
        this.inventory.removeItem(weapon);
    }

    viewInventory(): void {
        console.log(`Inventario de ${this.name}:`);
        this.inventory.getItems().forEach((item: WeaponModel) => {
            console.log(`- ${item.name}`);
        });
    }   
}