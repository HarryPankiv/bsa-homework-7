import { Fighter } from "./fight/fighter";
import { ImprovedFighter } from "./fight/improvedFighter";
import { Fight } from './fight/fight';

export default class Main {
    constructor() {
        const app = new Fight();
    }
}

const start = new Main();