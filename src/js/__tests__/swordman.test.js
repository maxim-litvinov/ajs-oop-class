import Swordman from '../classes/swordman';

test('Объект создается корректно', () => {
	const swordman = new Swordman('Swordman');
	const correct = {
		attack: 40,
		defence: 10,
		health: 100,
		level: 1,
		name: 'Swordman',
		type: 'Swordman',
	};
	expect(swordman).toEqual(correct);
});