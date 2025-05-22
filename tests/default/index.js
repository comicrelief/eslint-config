// Import ordering (import/order rule)
import fs from 'node:fs';
import path from 'node:path';

import axios from 'axios';

// Basic ES6 features
export const example = () => 'Hello world!';

// Destructuring (works with prefer-destructuring off)
const array = [1, 2, 3];

// Using variables that won't be flagged as unused
const unused1 = array[0]; // We'll use this below

// Function with parameters (testing indentation)
export function testFunction(param1, param2) {
  if (param1) {
    return param2;
  }
  return null; // unicorn/no-null is off
}

// Using fs and path to avoid unused variable errors
export function readFile(filePath) {
  const fullPath = path.resolve(filePath);
  return fs.readFileSync(fullPath, 'utf8');
}

// Using axios to avoid unused variable error
export async function fetchData(url) {
  const response = await axios.get(url);
  return response.data;
}

// Object with method (tests various syntax features)
export const testObject = {
  name: 'Test',
  greet() {
    return `Hello, ${this.name}!`;
  },
};

// Using the variables to avoid unused variable warnings
export const useUnused = () => {
  console.log(unused1);
  return 'Using variables';
};

// Additional import/export tests
// Named exports (already have some above)
export const additionalNamedExport = 'another value';

// Default export (testing import/prefer-default-export is off)
export default function defaultExport() {
  return 'default value';
}
