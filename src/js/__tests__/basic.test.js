import lifeBar from '../app';

test('basic test', () => {
  const result = lifeBar({ health: 90 });

  expect(result).toBe('healthy');
});

test('Здоровье более 50', () => {
  const result = lifeBar({ health: 50 });

  expect(result).toBe('healthy');
});

test('Здоровье менее 50', () => {
  const result = lifeBar({ health: 49 });

  expect(result).toBe('wounded');
});

test('Здоровье более 15', () => {
  const result = lifeBar({ health: 15 });

  expect(result).toBe('wounded');
});

test('Здоровье менее 15', () => {
  const result = lifeBar({ health: 14 });

  expect(result).toBe('critical');
});
