import { Animal } from "../../Animal";
import { eBreathingType } from "../../enums/eBreathingType";

export abstract class Mammal extends Animal {
    breathe():string {
        return `Breathe with ${eBreathingType.lungs}`
    }
}