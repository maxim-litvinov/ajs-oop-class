class Character {
	constructor(name, type) {
		if (name.length < 2 || name.length > 10) {
			throw new Error("Имя должно быть больше 2 знаков и меньше 10");
		}
		const validTypes = ['Bowman', 'Swordman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
		if (!validTypes.includes(type)) {
			throw new Error('Неверный тип');
		}

		this.name = name;
		this.type = type;
		this.health = 100;
		this.level = 1;

		this.attack = undefined
		this.defence = undefined
	}
}

module.exports = Character;