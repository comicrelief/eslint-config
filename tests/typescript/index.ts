export class Example {
  // should not trigger 'no-useless-constructor'
  constructor(readonly name: string) {}

  // should not trigger 'typescript-eslint/no-unused-vars'
  methodWithUnused(_unused: string) {
    return this.name;
  }
}
