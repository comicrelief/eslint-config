// should not trigger 'no-console'
console.log('console is allowed');

// should not trigger 'no-undef'
describe('suite', () => {
  it('test', () => {
    expect(1).toEqual(1);
  });
});
