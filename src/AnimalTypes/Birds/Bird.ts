import { Animal } from "../../Animal";
import {eBreathingType} from '../../enums/eBreathingType';
import {eWalkingType} from '../../enums/eWalkingType';

export abstract class Bird extends Animal {
    walk(): string {
        return `${eWalkingType.fly}`
    }
    breathe(): string {
        return `Breathe with ${eBreathingType.lungs}`
    }
}