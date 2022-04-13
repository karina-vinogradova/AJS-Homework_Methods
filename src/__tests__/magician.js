import Magician from '../magician';

test.each([
  [() => new Magician('M'), 'Incorrect name'],
  [() => new Magician(1234), 'Incorrect name'],
  [() => new Magician('Very long name for character'), 'Incorrect name'],
])('testing length of name', (name, expected) => {
  expect(name).toThrow(expected);
});

test('testing name of Magician === string', () => {
  const martin = new Magician('Martin');
  expect(martin.name).toBe('Martin');
});

test('testing create Magician`s name', () => {
  const martin = new Magician('Martin');
  expect(martin.name).toBe('Martin');
});

test('testing create Magician`s health', () => {
  const martin = new Magician('Martin');
  expect(martin.health).toBe(100);
});

test('testing create Magician`s level', () => {
  const martin = new Magician('Martin');
  expect(martin.level).toBe(1);
});

test('testing create Magician`s type', () => {
  const martin = new Magician('Martin');
  expect(martin.type).toBe('Magician');
});

test('testing create Magician`s attack', () => {
  const martin = new Magician('Martin');
  expect(martin.attack).toBe(10);
});

test('testing create Magician`s defence', () => {
  const martin = new Magician('Martin');
  expect(martin.defence).toBe(40);
});
