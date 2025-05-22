// @flow
// This file tests the combined configuration with multiple features

// Flow type annotations
export type User = {
  id: number,
  name: string,
  active: boolean,
};

// Good practices (sonarjs)
export const getActiveUsers = () => users.filter((user) => user.active);

// Proper error handling
export const findUser = (id) => {
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    throw new Error(`User with id ${id} not found`);
  }
  return foundUser;
};
