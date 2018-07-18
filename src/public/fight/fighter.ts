// Create class Fighter
export interface IFighter {
  name: string;
  health: number;
  power: number;
  setDamage: (damaage: number) => void;
  hit: (enemy: IFighter, point:number) => void;
  knockout: () => void;
  setInfo: (name:HTMLInputElement, health:HTMLInputElement, power:HTMLInputElement) => void;
}

export class Fighter implements IFighter {
  name: string;
  health: number = 10;
  power: number = 1;
  
  constructor(name: string, health: number = 10, power: number = 1) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  setDamage(damage:number) {
    this.health = this.health - damage;
  }

  hit(enemy: IFighter, point: number) {
    let damage = point * this.power;
    enemy.setDamage(damage);
  }

  setInfo(name:HTMLInputElement, health:HTMLInputElement, power:HTMLInputElement) {
    this.name = name.value;
    this.health = Number(health.value);
    this.power = Number(power.value);
    this._setInfo()
  }

  private _setInfo() {
    const $fighter = document.getElementById('fight-log');
    $fighter.innerText = `Name: ${this.name}, health - ${this.health}, power - ${this.power}`;
  }

  async knockout() {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        const $fighter = document.getElementById('fight-log');
        $fighter.innerText += `Time is over`;
        resolve();
      }, 500);
    });
  }
}

