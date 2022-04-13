import Undead from '../undead';

test.each([
  [() => new Undead('U'), 'Incorrect name'],
  [() => new Undead(1234), 'Incorrect name'],
  [() => new Undead('Very long name for character'), 'Incorrect name'],
])('testing length of name', (name, expected) => {
  expect(name).toThrow(expected);
});

test('testing name of Undead === string', () => {
  const ugly = new Undead('Ugly');
  expect(ugly.name).toBe('Ugly');
});

test('testing create Undead`s name', () => {
  const ugly = new Undead('Ugly');
  expect(ugly.name).toBe('Ugly');
});

test('testing create Undead`s health', () => {
  const ugly = new Undead('Ugly');
  expect(ugly.health).toBe(100);
});

test('testing create Undead`s level', () => {
  const ugly = new Undead('Ugly');
  expect(ugly.level).toBe(1);
});

test('testing create Undead`s type', () => {
  const ugly = new Undead('Ugly');
  expect(ugly.type).toBe('Undead');
});

test('testing create Undead`s attack', () => {
  const ugly = new Undead('Ugly');
  expect(ugly.attack).toBe(25);
});

test('testing create Undead`s defence', () => {
  const ugly = new Undead('Ugly');
  expect(ugly.defence).toBe(25);
});
