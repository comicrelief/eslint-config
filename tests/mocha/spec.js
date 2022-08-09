import { expect } from 'chai';

// should not trigger 'no-console'
console.log('console is allowed');

// should not trigger 'no-undef'
describe('suite', () => {
  it('test', () => {
    // should not trigger 'no-unused-expressions'
    expect(null).to.be.null;
  });
});
