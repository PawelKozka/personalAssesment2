import { Animal } from "../../Animal";
import { eBreathingType } from "../../enums/eBreathingType";

export abstract class Mammal extends Animal {
    breathe():string {
        console.log(`Breathe with ${eBreathingType.lungs}`, 'dupaaa')
        return `Breathe with ${eBreathingType.lungs}`
    }
}