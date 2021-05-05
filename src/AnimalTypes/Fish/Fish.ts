import { Animal } from "../../Animal";
import { eBreathingType } from "../../enums/eBreathingType";
import { eWalkingType } from "../../enums/eWalkingType";

export abstract class Fish extends Animal {
    walk(): string {
        return `${eWalkingType.swim}`
    }
    breathe(): string {
        return `Breathe with ${eBreathingType.gill}`
    }
}