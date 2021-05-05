import { eWalkingType } from "../../enums/eWalkingType";
import { Mammal } from "./Mammal";

export class Lion extends Mammal {
   readonly legs = 4;
   walk(): string {
       return `${this.legs} ${eWalkingType.legs}`
   }
}