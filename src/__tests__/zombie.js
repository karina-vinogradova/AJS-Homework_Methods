import Zombie from '../zombie';

test.each([
  [() => new Zombie('S'), 'Incorrect name'],
  [() => new Zombie(1234), 'Incorrect name'],
  [() => new Zombie('Very long name for character'), 'Incorrect name'],
])('testing length of name', (name, expected) => {
  expect(name).toThrow(expected);
});

test('testing name of Zombie === string', () => {
  const zina = new Zombie('Zina');
  expect(zina.name).toBe('Zina');
});

test('testing create Zombie`s name', () => {
  const zina = new Zombie('Zina');
  expect(zina.name).toBe('Zina');
});

test('testing create Zombie`s health', () => {
  const zina = new Zombie('Zina');
  expect(zina.health).toBe(100);
});

test('testing create Zombie`s level', () => {
  const zina = new Zombie('Zina');
  expect(zina.level).toBe(1);
});

test('testing create Zombie`s type', () => {
  const zina = new Zombie('Zina');
  expect(zina.type).toBe('Zombie');
});

test('testing create Zombie`s attack', () => {
  const zina = new Zombie('Zina');
  expect(zina.attack).toBe(40);
});

test('testing create Zombie`s defence', () => {
  const zina = new Zombie('Zina');
  expect(zina.defence).toBe(10);
});
