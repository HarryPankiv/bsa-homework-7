import { Fighter } from "./fighter";

export interface IImprovedFighter {
	doubleHit: (enemy: Fighter, point: number) => void;
}

export class ImprovedFighter extends Fighter implements IImprovedFighter {
  	constructor(name:string, health: number = 20, power: number = 2) {
    	super(name, health, power);
 	}

  	doubleHit(enemy:Fighter, point: number) {
    	super.hit(enemy, point * 2);
  	}
}
