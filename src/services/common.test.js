const { filterOnAllInput } = require("./common");

describe('common service test', () => {

  test('find toto world in array of object', () => {
    const entries = [{title: 'test1', label: 'test 1 label'}, {title: 'test toto', label: 'test 2 label'}];    
    const textSearched = 'toto';
    const result = filterOnAllInput(entries, textSearched);

    expect(result).toStrictEqual([{title: 'test toto', label: 'test 2 label'}]);
  });

  test('find world in array of object without params', () => {
    const result = filterOnAllInput(null, null);

    expect(result).toStrictEqual([]);
  });
})


