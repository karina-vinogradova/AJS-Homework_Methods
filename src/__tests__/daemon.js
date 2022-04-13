import Daemon from '../daemon';

test.each([
  [() => new Daemon('D'), 'Incorrect name'],
  [() => new Daemon(1234), 'Incorrect name'],
  [() => new Daemon('Very long name for character'), 'Incorrect name'],
])('testing length of name', (name, expected) => {
  expect(name).toThrow(expected);
});

test('testing name of Daemon === string', () => {
  const dwarf = new Daemon('Dwarf');
  expect(dwarf.name).toBe('Dwarf');
});

test('testing create Daemon`s name', () => {
  const dwarf = new Daemon('Dwarf');
  expect(dwarf.name).toBe('Dwarf');
});

test('testing create Daemon`s health', () => {
  const dwarf = new Daemon('Dwarf');
  expect(dwarf.health).toBe(100);
});

test('testing create Daemon`s level', () => {
  const dwarf = new Daemon('Dwarf');
  expect(dwarf.level).toBe(1);
});

test('testing create Daemon`s type', () => {
  const dwarf = new Daemon('Dwarf');
  expect(dwarf.type).toBe('Daemon');
});

test('testing create Daemon`s attack', () => {
  const dwarf = new Daemon('Dwarf');
  expect(dwarf.attack).toBe(10);
});

test('testing create Daemon`s defence', () => {
  const dwarf = new Daemon('Dwarf');
  expect(dwarf.defence).toBe(40);
});
