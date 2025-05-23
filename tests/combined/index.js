// @flow
// This file tests the combined configuration with multiple features

/**
 * @typedef {Object} User - Testing JSDoc comments
 * @property {number} id - User ID
 * @property {string} name - User name
 * @property {boolean} active - Whether user is active
 */

// Sample data
const users = [
  // @stylistic/comma-dangle (requires trailing commas in multiline)
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Charlie', active: true },
];

/**
 * Get all active users - Testing JSDoc comments
 * @returns {User[]} Array of active users
 */
// Testing @stylistic/arrow-body-style (implicit return preferred)
export const getActiveUsers = () => users.filter((user) => user.active);

/**
 * Find a user by ID
 * @param {number} id - User ID to find
 * @returns {User} Found user
 * @throws {Error} If user not found
 */
export const findUser = (id) => {
  // @stylistic/indent (2 spaces)
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    // @stylistic/indent (2 spaces with nesting)
    throw new Error(`User with id ${id} not found`);
  }
  // @stylistic/semi (requires semicolons)
  return foundUser;
};

// Testing formatting rules
export function formatTest() {
  // @stylistic/semi (requires semicolons)
  const test = 'test';

  // @stylistic/comma-dangle (requires trailing commas)
  const options = {
    a: 1,
    b: 2,
    c: 3,
  };

  // @stylistic/indent (2 spaces with nesting)
  if (test) {
    return options;
  }

  // Testing consistent-return
  return null;
}
