import Character from '../character';

test.each([
  [() => new Character('C'), 'Incorrect name'],
  [() => new Character(1234), 'Incorrect name'],
  [() => new Character('Very long name for character'), 'Incorrect name'],
])('testing length of name', (name, expected) => {
  expect(name).toThrow(expected);
});

test('testing name of Character === string', () => {
  const calvin = new Character('Calvin');
  expect(calvin.name).toBe('Calvin');
});

// Tests for second task added

test('testing level from method levelUp() if health > 0', () => {
  const calvin = new Character('Calvin');
  calvin.levelUp();
  expect(calvin.level).toBe(2);
});
test('testing health from method levelUp() if health > 0', () => {
  const calvin = new Character('Calvin');
  calvin.health = 4;
  calvin.levelUp();
  expect(calvin.health).toBe(100);
});

test('testing attack from method levelUp() if health > 0', () => {
  const calvin = new Character('Calvin');
  calvin.attack = 10;
  calvin.levelUp();
  expect(calvin.attack).toBe(12);
});

test('testing defence from method levelUp() if health > 0', () => {
  const calvin = new Character('Calvin');
  calvin.defence = 25;
  calvin.levelUp();
  expect(calvin.defence).toBe(30);
});

test('testing error from method levelUp() if health <= 0', () => {
  const calvin = new Character('Calvin');
  calvin.health = -10;
  expect(() => calvin.levelUp()).toThrow('Нельзя повысить левел умершего');
});

test('testing error from method levelUp() if health <= 0', () => {
  const calvin = new Character('Calvin');
  calvin.health = 0;
  expect(() => calvin.levelUp()).toThrow('Нельзя повысить левел умершего');
});

test('testing health from method damage() if health >= 0', () => {
  const calvin = new Character('Calvin');
  calvin.defence = 10;
  calvin.damage(20);
  expect(calvin.health).toBe(82);
});

test('testing health from method damage() if health < 0', () => {
  const calvin = new Character('Calvin');
  calvin.health = -10;
  calvin.defence = 10;
  calvin.damage(20);
  expect(calvin.health).toBe(-10);
});
