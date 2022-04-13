import Swordsman from '../swordsman';

test.each([
  [() => new Swordsman('S'), 'Incorrect name'],
  [() => new Swordsman(1234), 'Incorrect name'],
  [() => new Swordsman('Very long name for character'), 'Incorrect name'],
])('testing length of name', (name, expected) => {
  expect(name).toThrow(expected);
});

test('testing name of Swordsman === string', () => {
  const simon = new Swordsman('Simon');
  expect(simon.name).toBe('Simon');
});

test('testing create Swordsman`s name', () => {
  const simon = new Swordsman('Simon');
  expect(simon.name).toBe('Simon');
});

test('testing create Swordsman`s health', () => {
  const simon = new Swordsman('Simon');
  expect(simon.health).toBe(100);
});

test('testing create Swordsman`s level', () => {
  const simon = new Swordsman('Simon');
  expect(simon.level).toBe(1);
});

test('testing create Swordsman`s type', () => {
  const simon = new Swordsman('Simon');
  expect(simon.type).toBe('Swordsman');
});

test('testing create Swordsman`s attack', () => {
  const simon = new Swordsman('Simon');
  expect(simon.attack).toBe(40);
});

test('testing create Swordsman`s defence', () => {
  const simon = new Swordsman('Simon');
  expect(simon.defence).toBe(10);
});
