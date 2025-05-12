// @flow
export type Person = {
  name: string,
  age: number,
  isActive?: boolean,
};

export const createPerson = (name: string, age: number): Person => ({
  name,
  age,
  isActive: true,
});

export const greet = (person: Person): string => {
  return `Hello, ${person.name}!`;
};
