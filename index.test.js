const mapTransform = require('.');

test('convert object to string', () => {
  const source = {
    name: 'Jhin',
    hello: {
      world: 'hello world',
    },
  };
  const def = '{name} say {hello.world} {hello.extra}!';
  expect(mapTransform(source, def)).toBe('Jhin say hello world !');
});

test('convert object to object', () => {
  const source = {
    name: 'Jhin',
    hello: {
      world: 'hello world',
    },
  };
  const def = {id: 1, name: '{name}Deng', say: '{hello.world}!'};
  expect(mapTransform(source, def))
      .toEqual({id: 1, name: 'JhinDeng', say: 'hello world!'});
});

test('convert object to array', () => {
  const source = {
    name: 'Jhin',
    hello: {
      world: 'hello world',
    },
  };
  const def = [
    {id: 1, name: '{name}Deng', say: '{hello.world}!'},
    {id: 2, name: 'alex', say: 'wow!'},
  ];
  expect(mapTransform(source, def))
      .toEqual([
        {id: 1, name: 'JhinDeng', say: 'hello world!'},
        {id: 2, name: 'alex', say: 'wow!'},
      ]);
});

test('convert string to string', () => {
  const source = 'hello';
  const def = '{name} say {hello.world}!';
  expect(mapTransform(source, def)).toBe(' say !');
});

test('convert array to string', () => {
  const source = ['hello', 'world'];
  const def = 'Jhin say {0} {1}!';
  expect(mapTransform(source, def)).toBe('Jhin say hello world!');
});

test('convert array to array', () => {
  const source = [
    {
      name: 'Jhin',
      gender: 'male',
    }, {
      name: 'Alexis',
      gender: 'female',
    },
  ];
  const def = [{
    name: 'Jhin',
    say: 'I am {0.gender}',
  }, {
    name: 'Alexis',
    say: 'I am {1.gender}',
  }];
  expect(mapTransform(source, def)).toEqual([{
    name: 'Jhin',
    say: 'I am male',
  }, {
    name: 'Alexis',
    say: 'I am female',
  }]);
});
