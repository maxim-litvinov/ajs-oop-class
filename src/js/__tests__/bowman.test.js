import Bowman from '../classes/bowman';

test('Объект создается корректно', () => {
	const bowman = new Bowman('Bowman');
	const correct = {
		attack: 25,
		defence: 25,
		health: 100,
		level: 1,
		name: 'Bowman',
		type: 'Bowman',
	};
	expect(bowman).toEqual(correct);
});