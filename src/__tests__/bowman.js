import Bowman from '../bowman';

test.each([
  [() => new Bowman('B'), 'Incorrect name'],
  [() => new Bowman(1234), 'Incorrect name'],
  [() => new Bowman('Very long name for character'), 'Incorrect name'],
])('testing length of name', (name, expected) => {
  expect(name).toThrow(expected);
});

test('testing name of Bowman === string', () => {
  const bob = new Bowman('Bob');
  expect(bob.name).toBe('Bob');
});

test('testing create Bowman`s name', () => {
  const bob = new Bowman('Bob');
  expect(bob.name).toBe('Bob');
});

test('testing create Bowman`s health', () => {
  const bob = new Bowman('Bob');
  expect(bob.health).toBe(100);
});

test('testing create Bowman`s level', () => {
  const bob = new Bowman('Bob');
  expect(bob.level).toBe(1);
});

test('testing create Bowman`s type', () => {
  const bob = new Bowman('Bob');
  expect(bob.type).toBe('Bowman');
});

test('testing create Bowman`s attack', () => {
  const bob = new Bowman('Bob');
  expect(bob.attack).toBe(25);
});

test('testing create Bowman`s defence', () => {
  const bob = new Bowman('Bob');
  expect(bob.defence).toBe(25);
});
