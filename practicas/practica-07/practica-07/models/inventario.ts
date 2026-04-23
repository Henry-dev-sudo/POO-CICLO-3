import { weaponMode1 } from "../../../practica7";
import { WeaponModel } from "./WeaponModel";

export abstract class InventoryModel { 
    items: Array<WeaponModel>;
    inventoryCapacity: number;

    protected constructor(inventoryCapacity: number) {
        this.inventoryCapacity = inventoryCapacity;
        this.items = [];
    }
    abstract addItem(item: any): void;
    abstract removeItem(item: any): void;
    abstract viewInventory(): void;

    getItems(): WeaponModel[] {
        return this.items;
    }
}

export class Inventory extends InventoryModel {

    constructor(inventoryCapacity: number) {
        super(inventoryCapacity);
    }

    addItem(item: WeaponModel): void {

        if (this.items.length > this.inventoryCapacity) {
            console.log("El inventario esta lleno");
            return;
        }
        this.items.push(item);
    }

    removeItem(item: WeaponModel): void {
        this.items = this.items.filter((i: WeaponModel) => i !== item);                                                                                                                                        
        
    }

    viewInventory(): void {

        if (this.items.length === 0) {
            console.log("El inventario esta vacio");
            return;
        }

        console.log( this.items);
        console.table(this.items);
    }

}

