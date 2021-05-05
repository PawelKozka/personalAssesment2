import { eWalkingType } from "../../enums/eWalkingType";
import { Mammal } from "./Mammal";

export class Human extends Mammal {
    readonly legs = 2;

    walk(): string {
        return `${this.legs} ${eWalkingType.legs}`
    }
}