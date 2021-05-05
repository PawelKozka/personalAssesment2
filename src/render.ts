import { Animal } from './Animal';
import AnimalsJSON from './animals.json'
import { Raven } from './AnimalTypes/Birds/Raven';
import { Piranha } from './AnimalTypes/Fish/Piranha';
import { Human } from './AnimalTypes/Mammals/Human';
import { Lion } from './AnimalTypes/Mammals/Lion';
import { iAnimals } from './interfaces/iAnimals';
export class Render {
   private animals: Animal[] = [];

    createAnimal(data: iAnimals): void {
            let animal: Animal;
            const {value: {name, mass}} = data;
            switch (data.type) {
                case 'human':
                    animal = new Human(name, mass);
                    break;
                case 'lion':
                    animal = new Lion(name, mass);
                    break;
                case 'raven':
                    animal = new Raven(name, mass);
                    break;
                case 'piranha':
                    animal = new Piranha(name, mass);
                    break;
                default:
                    throw new Error('This animal is not recognized')
            }
            this.animals.push(animal);
    }
    display(){
        const {data} = AnimalsJSON;
        data.forEach(animal=> this.createAnimal(animal))
        const body = document.querySelector('body') as HTMLElement;
        const list = document.createElement('ul');
        body.appendChild(list);
        for (let animal of this.animals) {
            const listElement = document.createElement('li');
            listElement.innerHTML = `${animal.toString()} <br> move: ${animal.walk()} <br> breathe: ${animal.breathe()}`
            list.appendChild(listElement);
        }
    }
}