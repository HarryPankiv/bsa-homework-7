/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Fighter {
    constructor(name, health = 10, power = 1) {
        this.health = 10;
        this.power = 1;
        this.name = name;
        this.health = health;
        this.power = power;
    }
    setDamage(damage) {
        this.health = this.health - damage;
        console.log(`${this.name}'s health - ${this.health}`);
    }
    hit(enemy, point) {
        let damage = point * this.power;
        enemy.setDamage(damage);
    }
    setInfo(name, health, power) {
        this.name = name.value;
        this.health = Number(health.value);
        this.power = Number(power.value);
        console.log('here');
        this._setInfo();
    }
    _setInfo() {
        console.log('and here');
        const $user = document.getElementById('user-info');
        $user.innerText = `Name: ${this.name}, health - ${this.health}, power - ${this.power}`;
    }
    knockout() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("time is over");
                    resolve();
                }, 500);
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Fighter;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fight_fighter__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fight_improvedFighter__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fight_fight__ = __webpack_require__(3);



// create two instances
let sergio = new __WEBPACK_IMPORTED_MODULE_0__fight_fighter__["a" /* Fighter */]("sergio", 50, 2);
let yura = new __WEBPACK_IMPORTED_MODULE_0__fight_fighter__["a" /* Fighter */]("yura", 40, 2.2);
let marcus = new __WEBPACK_IMPORTED_MODULE_1__fight_improvedFighter__["a" /* default */]("marcus", 25, 2.8);
let harry = new __WEBPACK_IMPORTED_MODULE_1__fight_improvedFighter__["a" /* default */]("harry", 30, 2);
// call fight function
// fight(sergio, marcus, 2.6, 1.3, 1.5, 0.7, 0.4);
// fight(yura, harry, 2.4, 1.2, 1.5);
class Main {
    constructor() {
        const app = Object(__WEBPACK_IMPORTED_MODULE_2__fight_fight__["fight"])();
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = Main;

const start = new Main();


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fighter__ = __webpack_require__(0);
// Create class ImprovedFighter

class ImprovedFighter extends __WEBPACK_IMPORTED_MODULE_0__fighter__["a" /* Fighter */] {
    constructor(name, health = 20, power = 2) {
        super(name, health, power);
    }
    doubleHit(enemy, point) {
        super.hit(enemy, point * 2);
    }
}
/* harmony default export */ __webpack_exports__["a"] = (ImprovedFighter);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Fight {
    initializeFight() {
        const setInfoButton1 = document.getElementById('challenge1');
        const setInfoButton2 = document.getElementById('challenge2');
        const startButton = document.getElementById('start');
        const resetButton = document.getElementById('reset');
        const name1 = document.getElementById("name1");
        const name2 = document.getElementById("name2");
        const health1 = document.getElementById("health1");
        const health2 = document.getElementById("health2");
        const power1 = document.getElementById("power1");
        const power2 = document.getElementById("power2");
        // resetButton.addEventListener('click', () => this._resetRase());
        setInfoButton1.addEventListener('click', () => this.fighter1.setInfo(name1, health1, power1));
        setInfoButton2.addEventListener('click', () => this.fighter2.setInfo(name2, health2, power2));
        startButton.addEventListener('click', () => {
            // this._startFight();
        });
    }
    _startFight(fighter, improvedFighter, ...point) {
        if (!!this.fighter1 && !!this.fighter2) {
            console.log(`The fight between ${improvedFighter.name} and ${fighter.name} begins!`);
            let round = 0;
            while (fighter.health > 0 && improvedFighter.health > 0) {
                let pointIndex = Math.floor(Math.random() * point.length);
                console.log(`Round - ${round}\nPoint for current round - ${point[pointIndex]}`);
                fighter.hit(improvedFighter, point[pointIndex]);
                if (improvedFighter.health < 0) {
                    improvedFighter.knockout().then(() => {
                        console.log(`${fighter.name} wins!`);
                    });
                    break;
                }
                //roll hit/doubleHit
                let doubleHitChance = Math.random();
                console.log(`${improvedFighter.name} rolled - ${doubleHitChance}`);
                if (doubleHitChance > 0.5) {
                    improvedFighter.doubleHit(fighter, point[pointIndex]);
                }
                else {
                    improvedFighter.hit(fighter, point[pointIndex]);
                }
                if (fighter.health < 0) {
                    fighter.knockout().then(() => {
                        console.log(`${improvedFighter.name} wins!`);
                    });
                    break;
                }
                round++;
                console.log();
            }
        }
    }
}
/* unused harmony export Fight */

// create async function fight
function fight() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
/* unused harmony default export */ var _unused_webpack_default_export = (fight);


/***/ })
/******/ ]);
//# sourceMappingURL=main.map