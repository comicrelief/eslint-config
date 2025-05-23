// TypeScript test file with formatting rules

// @stylistic/semi and @stylistic/member-delimiter-style
export interface User {
  id: number;
  name: string;
  active: boolean;
}

// @stylistic/comma-dangle
const users = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Charlie', active: true },
];

// @typescript-eslint/no-unused-vars (underscore prefix)
export function getActiveUsers(_limit = 10): Array<User> {
  return users.filter((user) => user.active);
}

// @stylistic/indent and @stylistic/semi
export function findUser(id: number): User {
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    throw new Error(`User with id ${id} not found`);
  }
  return foundUser;
}

// @stylistic/arrow-parens (parentheses required around single parameter)
export const getUserById = (id: number): User => users.find((user) => user.id === id) || users[0];
