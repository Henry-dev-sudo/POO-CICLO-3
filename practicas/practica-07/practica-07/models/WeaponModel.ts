export abstract class WeaponModel {
    name: string;
    damage: number;
    durability: number;

    protected constructor(name: string, damage: number, durability: number) {
        this.name = name;
        this.damage = damage;
        this.durability = durability;
    }

    abstract attack(): number

    abstract stats(): void;
}