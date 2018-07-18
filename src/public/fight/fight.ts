import { Fighter, IFighter } from './fighter';
import { ImprovedFighter, IImprovedFighter } from './improvedFighter';

export interface IFight {
  	fighter1: IFighter;
  	fighter2: IFighter;
}

export class Fight implements IFight{
  	fighter1: IFighter;
  	fighter2: IFighter;

  	constructor() {
  		this.initializeFight();
  	}


  	initializeFight() {
		const fightButton = document.getElementById('fight') as HTMLButtonElement;

		const name1 = document.getElementById("name1") as HTMLInputElement;
		const name2 = document.getElementById("name2") as HTMLInputElement;
		const health1 = document.getElementById("health1") as HTMLInputElement;
		const health2 = document.getElementById("health2") as HTMLInputElement;
		const power1 = document.getElementById("power1") as HTMLInputElement;
		const power2 = document.getElementById("power2") as HTMLInputElement;

		fightButton.addEventListener('click', () => { 
	  		this.fighter1 = new Fighter(name1.value, Number(health1.value), Number(power1.value));
	  		this.fighter2 = new ImprovedFighter(name2.value, Number(health2.value), Number(power2.value));
			this._startFight(this.fighter1, this.fighter2, 2.2, 2.4, 1.2);
		});
  	}

	private _startFight(fighter, improvedFighter, ...point){
		let output:string = '';

		if(!!this.fighter1 && !!this.fighter2) {
			output += `The fight between ${improvedFighter.name} and ${fighter.name} begins!\n`;
		  	let round = 0;

		  	while (fighter.health > 0 && improvedFighter.health > 0) {
				let pointIndex = Math.floor(Math.random() * point.length);
				output += `Round - ${round}\nPoint for current round - ${point[pointIndex]}\n`;
				fighter.hit(improvedFighter, point[pointIndex]);
			    output += `${improvedFighter.name}'s health - ${improvedFighter.health.toFixed(2)}\n`
				if (improvedFighter.health < 0) {
			  		improvedFighter.knockout().then(() => {
						document.getElementById('fight-log').innerText += `- ${fighter.name} wins!`;
			  	});
			  	break;
				}

				//roll hit/doubleHit
				let doubleHitChance = Math.random();
				output += `${improvedFighter.name} rolled - ${doubleHitChance}\n`;
				if (doubleHitChance > 0.5) {
				  	improvedFighter.doubleHit(fighter, point[pointIndex]);
				    output += `${fighter.name}'s health - ${fighter.health.toFixed(2)}\n\n`
				} else {
				  	improvedFighter.hit(fighter, point[pointIndex]);
				    output += `${fighter.name}'s health - ${fighter.health.toFixed(2)}\n\n`
				}

				if (fighter.health < 0) {
				  	fighter.knockout().then(() => {
						document.getElementById('fight-log').innerText += `- ${improvedFighter.name} wins!`;
				  	});
				  	break;
				}

				round++;
	  		}
		}
	    document.getElementById('fight-log').innerText = output;
	}

}