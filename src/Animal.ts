import { eWalkingType } from "./enums/eWalkingType";

export abstract class Animal {
    private name: string;
    private mass: number;
    constructor(name: string, mass: number){
        this.name = name;
        this.mass = mass;
    }
    walk(): string {
        return ''
    }
    breathe(): string {
        return ''
    }
    toString(): string {
        return `${this.name} - mass: ${this.mass}`
    }
}