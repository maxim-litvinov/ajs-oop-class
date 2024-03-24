import Character from "./character";

export default class Swordman extends Character {
	constructor(name, type = 'Swordman') {
		super(name, type);
		this.attack = 40;
		this.defence = 10;
	}
}